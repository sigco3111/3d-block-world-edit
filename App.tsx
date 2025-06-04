
import React, { useState, useRef, useEffect } from 'react';
import { BlockType, SceneControls, WorldData, BlockData } from './types'; // Added SceneControls, WorldData, BlockData
import BlockPalette from './components/BlockPalette';
import Instructions from './components/Instructions';
import useThreeScene from './hooks/useThreeScene';

const App: React.FC = () => {
  const [selectedBlockType, setSelectedBlockType] = useState<BlockType>(BlockType.GRASS);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneController = useThreeScene(mountRef, selectedBlockType);

  const handleExportWorld = () => {
    if (!sceneController) return;
    const blocks = sceneController.exportBlocks();
    const worldData: WorldData = { version: 1, blocks };
    const jsonData = JSON.stringify(worldData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'block-world.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportWorld = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!sceneController) return;
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsedData: WorldData = JSON.parse(text);
        if (parsedData && parsedData.version === 1 && Array.isArray(parsedData.blocks)) {
          // Basic validation for block structure can be added here if needed
          // For example, check if each block has x, y, z, and type.
          const isValid = parsedData.blocks.every(b =>
            typeof b.x === 'number' &&
            typeof b.y === 'number' &&
            typeof b.z === 'number' &&
            Object.values(BlockType).includes(b.type)
          );
          if (isValid) {
            sceneController.importBlocks(parsedData.blocks);
          } else {
            console.error('Invalid block data in imported file.');
            alert('가져온 파일에 잘못된 블록 데이터가 포함되어 있습니다.');
          }
        } else {
          console.error('Invalid file format or version for import.');
          alert('잘못된 파일 형식이거나 지원되지 않는 버전입니다.');
        }
      } catch (error) {
        console.error('Error parsing imported file:', error);
        alert('파일을 가져오는 중 오류가 발생했습니다.');
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset file input to allow re-importing the same file
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <Instructions />
      <div ref={mountRef} className="flex-grow relative">
        {/* The canvas will be appended here by the useThreeScene hook */}
      </div>
      <BlockPalette
        selectedBlockType={selectedBlockType}
        onSelectBlockType={setSelectedBlockType}
        onExport={handleExportWorld}
        onImport={handleImportWorld}
        isSceneReady={!!sceneController}
      />
    </div>
  );
};

export default App;
