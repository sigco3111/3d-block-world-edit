
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BlockType, BLOCK_SIZE, BlockMaterialMap, SceneControls, BlockData } from '../types';

const useThreeScene = (
  mountRef: React.RefObject<HTMLDivElement>,
  selectedBlockTypeProp: BlockType
): SceneControls | null => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const blocksGroupRef = useRef<THREE.Group>(new THREE.Group());
  const blockMaterialsRef = useRef<BlockMaterialMap>({});
  const selectedBlockTypeRef = useRef(selectedBlockTypeProp);

  const [sceneController, setSceneController] = useState<SceneControls | null>(null);

  useEffect(() => {
    selectedBlockTypeRef.current = selectedBlockTypeProp;
  }, [selectedBlockTypeProp]);

  useEffect(() => {
    if (!mountRef.current) return () => {}; // Return an empty cleanup function if mount is not ready

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    blockMaterialsRef.current = {
      [BlockType.GRASS]: new THREE.MeshStandardMaterial({ color: 0x63b949 }),
      [BlockType.DIRT]: new THREE.MeshStandardMaterial({ color: 0x8B4513 }),
      [BlockType.STONE]: new THREE.MeshStandardMaterial({ color: 0x808080 }),
      [BlockType.WOOD]: new THREE.MeshStandardMaterial({ color: 0xDEB887 }),
      [BlockType.WATER]: new THREE.MeshStandardMaterial({
        color: 0x1ca3ec,
        opacity: 0.7,
        transparent: true,
      }),
      [BlockType.LEAVES]: new THREE.MeshStandardMaterial({ color: 0x228B22 }),
      [BlockType.SAND]: new THREE.MeshStandardMaterial({ color: 0xF4A460 }),
      [BlockType.GLASS]: new THREE.MeshStandardMaterial({
        color: 0xADD8E6,
        opacity: 0.5,
        transparent: true,
      }),
      [BlockType.BRICK]: new THREE.MeshStandardMaterial({ color: 0xB22222 }),
      [BlockType.OBSIDIAN]: new THREE.MeshStandardMaterial({ color: 0x3B003B }),
    };

    const addBlockInternal = (position: THREE.Vector3, type: BlockType, interactive: boolean = true) => {
      if (!blocksGroupRef.current || Object.keys(blockMaterialsRef.current).length === 0) return;
      const geometry = new THREE.BoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      const material = blockMaterialsRef.current[type] || blockMaterialsRef.current[BlockType.STONE];
      const cube = new THREE.Mesh(geometry, material);
      cube.position.copy(position);
      cube.castShadow = true;
      cube.receiveShadow = true;
      cube.userData = { isBlock: interactive, blockType: type };
      blocksGroupRef.current.add(cube);
    };

    const removeBlockInternal = (blockMesh: THREE.Mesh) => {
      if (!blocksGroupRef.current) return;
      blocksGroupRef.current.remove(blockMesh);
      blockMesh.geometry.dispose();
      if (Array.isArray(blockMesh.material)) {
        blockMesh.material.forEach(m => m.dispose());
      } else {
        (blockMesh.material as THREE.Material).dispose();
      }
    };

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.mouseButtons = { MIDDLE: THREE.MOUSE.ROTATE };
    controls.enableZoom = true;
    controlsRef.current = controls;

    scene.add(blocksGroupRef.current);

    if (blocksGroupRef.current.children.length === 0) {
      const groundSize = 20;
      for (let x = -groundSize / 2; x < groundSize / 2; x++) {
        for (let z = -groundSize / 2; z < groundSize / 2; z++) {
          addBlockInternal(new THREE.Vector3(x * BLOCK_SIZE, -BLOCK_SIZE, z * BLOCK_SIZE), BlockType.GRASS, false);
        }
      }
    }

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && currentMount) {
        cameraRef.current.aspect = currentMount.clientWidth / currentMount.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };

    const getMouseCoordinates = (event: MouseEvent) => {
      if (!currentMount) return null;
      const rect = currentMount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / currentMount.clientWidth) * 2 - 1;
      const y = -((event.clientY - rect.top) / currentMount.clientHeight) * 2 + 1;
      return { x, y };
    };

    const onDocumentMouseDown = (event: MouseEvent) => {
      if (!cameraRef.current || !raycasterRef.current || !mouseRef.current || !blocksGroupRef.current) return;
      const coords = getMouseCoordinates(event);
      if (!coords) return;
      mouseRef.current.set(coords.x, coords.y);
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(blocksGroupRef.current.children, true);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        if (!intersect.face || !intersect.object) return;
        if (event.button === 0) {
          event.preventDefault();
          if (intersect.object instanceof THREE.Mesh) {
            const normal = intersect.face.normal.clone();
            const newBlockPos = new THREE.Vector3()
              .copy(intersect.object.position)
              .addScaledVector(normal, BLOCK_SIZE);
            newBlockPos.x = Math.round(newBlockPos.x / BLOCK_SIZE) * BLOCK_SIZE;
            newBlockPos.y = Math.round(newBlockPos.y / BLOCK_SIZE) * BLOCK_SIZE;
            newBlockPos.z = Math.round(newBlockPos.z / BLOCK_SIZE) * BLOCK_SIZE;
            addBlockInternal(newBlockPos, selectedBlockTypeRef.current, true);
          }
        } else if (event.button === 2) {
          event.preventDefault();
          if (intersect.object instanceof THREE.Mesh && intersect.object.userData.isBlock) {
            removeBlockInternal(intersect.object as THREE.Mesh);
          }
        }
      }
    };

    currentMount.addEventListener('mousedown', onDocumentMouseDown);
    window.addEventListener('resize', handleResize);
    const preventContextMenu = (event: MouseEvent) => event.button === 2 && event.preventDefault();
    currentMount.addEventListener('contextmenu', preventContextMenu);

    // Scene control functions
    const exportBlocks = (): BlockData[] => {
      if (!blocksGroupRef.current) return [];
      const exported: BlockData[] = [];
      blocksGroupRef.current.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.userData.isBlock === true) {
          exported.push({
            x: child.position.x,
            y: child.position.y,
            z: child.position.z,
            type: child.userData.blockType as BlockType,
          });
        }
      });
      return exported;
    };

    const importBlocks = (blocksToImport: BlockData[]): void => {
      if (!blocksGroupRef.current || !blockMaterialsRef.current || Object.keys(blockMaterialsRef.current).length === 0) {
        console.warn("Cannot import blocks: scene or materials not ready.");
        return;
      }
      // Clear existing user-added blocks
      const existingUserBlocks = blocksGroupRef.current.children.filter(
        child => child instanceof THREE.Mesh && child.userData.isBlock === true
      );
      existingUserBlocks.forEach(block => removeBlockInternal(block as THREE.Mesh));

      // Add new blocks
      blocksToImport.forEach(blockData => {
        const position = new THREE.Vector3(blockData.x, blockData.y, blockData.z);
        addBlockInternal(position, blockData.type, true);
      });
    };

    setSceneController({ exportBlocks, importBlocks });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', onDocumentMouseDown);
      currentMount.removeEventListener('contextmenu', preventContextMenu);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentElement) {
          rendererRef.current.domElement.parentElement.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current = null;
      }
      Object.values(blockMaterialsRef.current).forEach(material => {
        if (Array.isArray(material)) material.forEach(m => m.dispose());
        else material.dispose();
      });
      blockMaterialsRef.current = {};
      if (blocksGroupRef.current) {
        blocksGroupRef.current.children.forEach(child => {
          if (child instanceof THREE.Mesh) child.geometry.dispose();
        });
        blocksGroupRef.current.clear();
      }
      if (sceneRef.current) {
         const lights = sceneRef.current.children.filter(obj => obj.type.includes('Light'));
         lights.forEach(light => {
            if (typeof (light as any).dispose === 'function') (light as any).dispose();
            sceneRef.current?.remove(light);
         });
         if (blocksGroupRef.current) sceneRef.current.remove(blocksGroupRef.current);
         sceneRef.current = null;
      }
      cameraRef.current = null;
      setSceneController(null);
    };
  }, [mountRef]);

  return sceneController;
};

export default useThreeScene;
