
import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-50 text-white p-3 text-xs z-10 rounded-br-lg shadow-lg">
      <h3 className="font-bold mb-1">조작법:</h3>
      <ul className="list-disc list-inside">
        <li><span className="font-semibold">마우스 왼쪽 클릭:</span> 블록 놓기</li>
        <li><span className="font-semibold">마우스 오른쪽 클릭:</span> 블록 제거</li>
        <li><span className="font-semibold">마우스 휠:</span> 확대/축소</li>
        <li><span className="font-semibold">마우스 휠 클릭 + 드래그:</span> 시점 회전</li>
      </ul>
    </div>
  );
};

export default Instructions;
