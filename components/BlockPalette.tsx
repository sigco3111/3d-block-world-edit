
import React from 'react';
import { BlockType } from '../types';

interface BlockPaletteProps {
  selectedBlockType: BlockType;
  onSelectBlockType: (type: BlockType) => void;
  onExport: () => void;
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSceneReady: boolean;
}

const blockTypes = [
  { type: BlockType.GRASS, label: '잔디', color: 'bg-green-500' },
  { type: BlockType.DIRT, label: '흙', color: 'bg-yellow-700' },
  { type: BlockType.STONE, label: '돌', color: 'bg-gray-500' },
  { type: BlockType.WOOD, label: '나무', color: 'bg-yellow-600' },
  { type: BlockType.WATER, label: '물', color: 'bg-blue-500' },
  { type: BlockType.LEAVES, label: '나뭇잎', color: 'bg-green-700' },
  { type: BlockType.SAND, label: '모래', color: 'bg-yellow-300' },
  { type: BlockType.GLASS, label: '유리', color: 'bg-blue-200' },
  { type: BlockType.BRICK, label: '벽돌', color: 'bg-red-700' },
  { type: BlockType.OBSIDIAN, label: '흑요석', color: 'bg-indigo-900' },
];

const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { labelText: string }> = ({ labelText, ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-700
                disabled:bg-gray-500 disabled:opacity-70 disabled:cursor-not-allowed`}
  >
    {labelText}
  </button>
);

const BlockPalette: React.FC<BlockPaletteProps> = ({
  selectedBlockType,
  onSelectBlockType,
  onExport,
  onImport,
  isSceneReady,
}) => {
  const importInputId = "import-file-input";
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-700 p-3 flex flex-wrap justify-center items-center gap-3 shadow-lg overflow-x-auto">
      <span className="text-sm font-medium text-gray-300 whitespace-nowrap self-center">블록 선택:</span>
      <div className="flex gap-2">
        {blockTypes.map(({ type, label, color }) => (
          <button
            key={type}
            onClick={() => onSelectBlockType(type)}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-md focus:outline-none transition-all duration-150 ease-in-out flex-shrink-0
                        ${color} 
                        ${selectedBlockType === type ? 'ring-4 ring-offset-2 ring-offset-gray-700 ring-sky-400 transform scale-110' : 'hover:opacity-80'}`}
            title={label}
            aria-label={label}
            aria-pressed={selectedBlockType === type}
          >
          </button>
        ))}
      </div>
      <div className="h-8 border-l border-gray-500 mx-2 self-center hidden md:block" aria-hidden="true"></div> {/* Separator */}
      <div className="flex gap-2">
        <ActionButton
          labelText="내보내기"
          onClick={onExport}
          disabled={!isSceneReady}
          aria-disabled={!isSceneReady}
        />
        <input
          type="file"
          id={importInputId}
          accept=".json"
          onChange={onImport}
          style={{ display: 'none' }}
          disabled={!isSceneReady}
          aria-hidden="true" // Hidden, label is used
        />
        <label
          htmlFor={importInputId}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out cursor-pointer
                      bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-700
                      ${!isSceneReady ? 'bg-gray-500 opacity-70 cursor-not-allowed hover:bg-gray-500' : ''}`}
          role="button"
          tabIndex={isSceneReady ? 0 : -1}
          aria-disabled={!isSceneReady}
          onKeyDown={(e) => { // Allow activation with Space/Enter for accessibility
            if (isSceneReady && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              document.getElementById(importInputId)?.click();
            }
          }}
        >
          가져오기
        </label>
      </div>
    </div>
  );
};

export default BlockPalette;
