/**
 * PNG 파일을 ICO 파일로 변환하는 스크립트
 */

import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 현재 파일의 디렉토리 경로 구하기 (ESM에서는 __dirname이 없음)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 경로 설정
const publicDir = path.join(__dirname, '..', 'public');
const pngPath = path.join(publicDir, 'favicon.png');
const icoPath = path.join(publicDir, 'favicon.ico');

// PNG를 ICO로 변환
async function convertToIco() {
  try {
    // PNG 파일이 존재하는지 확인
    if (!fs.existsSync(pngPath)) {
      console.error('파비콘 PNG 파일을 찾을 수 없습니다: ' + pngPath);
      return;
    }
    
    // PNG를 ICO로 변환
    const buffer = await pngToIco(pngPath);
    
    // ICO 파일로 저장
    fs.writeFileSync(icoPath, buffer);
    
    console.log('ICO 파일이 성공적으로 생성되었습니다: ' + icoPath);
  } catch (error) {
    console.error('ICO 변환 중 오류 발생:', error);
  }
}

// 변환 실행
convertToIco(); 