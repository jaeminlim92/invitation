import React, {useEffect} from 'react'
import '../css/Footer.css'

const Footer = () => {
  useEffect(() => {
    // 카카오 SDK 로드
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
    script.integrity = 'sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8'
    script.crossOrigin = 'anonymous'
    script.async = true

    script.onload = () => {
      // Kakao SDK 초기화
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY || '842323c31c71098b0e3d3406310ee58e')

        // SDK 로드 후 바로 버튼 초기화
        if (window.Kakao.Share) {
          try {
            window.Kakao.Share.createCustomButton({
              container: '#kakao-share-btn',
              templateId: 120741
            })
          } catch (error) {
            console.error('카카오톡 공유 버튼 초기화 실패:', error)
          }
        }
      }
    }

    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // 클릭 핸들러는 더 이상 createCustomButton을 호출하지 않음
  const handleShareKakao = () => {
    if (!window.Kakao || !window.Kakao.Share) {
      alert('카카오톡 SDK를 불러올 수 없습니다.')
    }
    // 버튼 초기화는 이미 useEffect에서 수행됨
  }

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-title">소중한 날에 함께해 주셔서 감사합니다</p>
        <div className="share-button-container">
          <button
            id="kakao-share-btn"
            className="kakao-share-button"
            onClick={handleShareKakao}
            aria-label="카카오톡으로 공유하기"
          >
            <img
              src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
              alt="카카오톡 공유 버튼"
              width="40"
              height="40"
            />
            <span>카카오톡으로 공유하기</span>
          </button>
        </div>
        <p className="copyright-text">Created by Juhyeon & Jaemin. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
