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

    // 뷰포트 설정 - 모바일 디바이스에서 화면 크기가 변경될 때 컨텐츠 조정
    const setViewportProperties = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    };

    // 초기 설정 및
    setViewportProperties();

    // 화면 크기 변경 시 재조정
    window.addEventListener('resize', setViewportProperties);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      window.removeEventListener('resize', setViewportProperties);
    };
  }, []);

  return (
    <div className="app-container">
      <MobileInvitation />
    </div>
  )
}

export default App
