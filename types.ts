
import * as THREE from 'three';

export enum BlockType {
  GRASS = 'GRASS',
  DIRT = 'DIRT',
  STONE = 'STONE',
  WOOD = 'WOOD',
  WATER = 'WATER',
  LEAVES = 'LEAVES',
  SAND = 'SAND',
  GLASS = 'GLASS',
  BRICK = 'BRICK',
  OBSIDIAN = 'OBSIDIAN',
}

export interface BlockMaterialMap {
  [key: string]: THREE.Material | THREE.Material[];
}

export const BLOCK_SIZE = 1;

export interface BlockData {
  x: number;
  y: number;
  z: number;
  type: BlockType;
}

export interface WorldData {
  version: number;
  blocks: BlockData[];
}

export interface SceneControls {
  exportBlocks: () => BlockData[];
  importBlocks: (blocks: BlockData[]) => void;
}
