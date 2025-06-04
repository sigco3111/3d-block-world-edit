/**
 * 3D 블록 월드 파비콘 생성 스크립트
 * 간단한 아이소메트릭 큐브 모양의 아이콘을 생성합니다.
 */

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 현재 파일의 디렉토리 경로 구하기 (ESM에서는 __dirname이 없음)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 파비콘 크기 설정
const size = 64;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// 배경 투명하게 설정
ctx.clearRect(0, 0, size, size);

// 큐브 색상 설정
const topColor = '#8BC34A';    // 초록색 상단면
const leftColor = '#5D9C59';   // 어두운 초록색 왼쪽면
const rightColor = '#388E3C';  // 중간 초록색 오른쪽면

// 아이소메트릭 큐브 그리기
function drawIsometricCube() {
  const centerX = size / 2;
  const centerY = size / 2;
  const cubeSize = size * 0.6;

  // 큐브의 각 꼭지점 계산 (아이소메트릭 투영)
  const points = {
    // 상단면 꼭지점
    topLeft: [centerX - cubeSize / 4, centerY - cubeSize / 4],
    topRight: [centerX + cubeSize / 4, centerY - cubeSize / 4],
    topFront: [centerX, centerY],
    topBack: [centerX, centerY - cubeSize / 2],
    
    // 하단면 꼭지점
    bottomLeft: [centerX - cubeSize / 4, centerY + cubeSize / 4],
    bottomRight: [centerX + cubeSize / 4, centerY + cubeSize / 4],
    bottomFront: [centerX, centerY + cubeSize / 2],
    bottomBack: [centerX, centerY],
  };

  // 오른쪽면 그리기
  ctx.fillStyle = rightColor;
  ctx.beginPath();
  ctx.moveTo(...points.topRight);
  ctx.lineTo(...points.bottomRight);
  ctx.lineTo(...points.bottomFront);
  ctx.lineTo(...points.topFront);
  ctx.closePath();
  ctx.fill();

  // 왼쪽면 그리기
  ctx.fillStyle = leftColor;
  ctx.beginPath();
  ctx.moveTo(...points.topLeft);
  ctx.lineTo(...points.bottomLeft);
  ctx.lineTo(...points.bottomFront);
  ctx.lineTo(...points.topFront);
  ctx.closePath();
  ctx.fill();

  // 상단면 그리기
  ctx.fillStyle = topColor;
  ctx.beginPath();
  ctx.moveTo(...points.topLeft);
  ctx.lineTo(...points.topRight);
  ctx.lineTo(...points.topFront);
  ctx.lineTo(...points.topBack);
  ctx.closePath();
  ctx.fill();

  // 윤곽선 그리기
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;
  
  // 상단면 윤곽선
  ctx.beginPath();
  ctx.moveTo(...points.topLeft);
  ctx.lineTo(...points.topRight);
  ctx.lineTo(...points.topFront);
  ctx.lineTo(...points.topBack);
  ctx.closePath();
  ctx.stroke();
  
  // 오른쪽면 윤곽선
  ctx.beginPath();
  ctx.moveTo(...points.topRight);
  ctx.lineTo(...points.bottomRight);
  ctx.lineTo(...points.bottomFront);
  ctx.lineTo(...points.topFront);
  ctx.closePath();
  ctx.stroke();
  
  // 왼쪽면 윤곽선
  ctx.beginPath();
  ctx.moveTo(...points.topLeft);
  ctx.lineTo(...points.bottomLeft);
  ctx.lineTo(...points.bottomFront);
  ctx.lineTo(...points.topFront);
  ctx.closePath();
  ctx.stroke();
}

// 큐브 그리기
drawIsometricCube();

// 출력 디렉토리가 없으면 생성
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// PNG 형식으로 저장
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(publicDir, 'favicon.png'), buffer);

// 생성 완료 메시지
console.log('파비콘이 성공적으로 생성되었습니다: public/favicon.png'); 