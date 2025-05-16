import './App.css'
import React, { useEffect } from 'react'
import MobileInvitation from './components/MobileInvitation'

function App() {
  // 추가 복사 방지 기능
  useEffect(() => {
    // 복사 방지 함수
    const preventCopy = (e) => {
      e.preventDefault();
      return false;
    };

    // 복사 이벤트 방지
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);

    // iOS에서 길게 터치하면 나타나는 메뉴 방지
    document.addEventListener('touchstart', function(e) {
      e.target.style.webkitTouchCallout = 'none';
    }, { passive: true });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
    };
  }, []);

  return (
    <>
      <MobileInvitation />
    </>
  )
}

export default App
