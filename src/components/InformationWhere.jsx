import React from 'react'
import playButton from '../assets/images/wedding-info/play_button.png'
import loveSong from '../assets/media/love_song_component.gif'
import frame10Img from '../assets/images/wedding-info/wedding-info-carmera.jpg'
import pauseButton from '../assets/images/wedding-info/pause_button.png'
import Flower from '../assets/media/Flower.mp3'
import '../css/InformationWhere.css'

function InformationWhere() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef(null)
  const isPlayingRef = React.useRef(false)
  const hasInteractedRef = React.useRef(false)
  const sectionRef = React.useRef(null)

  React.useEffect(() => {
    // Audio 객체를 useEffect 안에서 생성
    audioRef.current = new Audio(Flower)
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    const handleVisibilityChange = () => {
      const audio = audioRef.current
      if (document.hidden) {
        // 화면이 숨겨질 때 재생 중이었다면 일시정지
        if (isPlayingRef.current) {
          audio.pause()
          setIsPlaying(false)
          isPlayingRef.current = false
        }
      }
    }

    // 스크롤 감지하여 재생
    const handleScroll = () => {
      // 이미 상호작용했거나 재생 중이면 아무것도 하지 않음
      if (hasInteractedRef.current || isPlayingRef.current) return

      hasInteractedRef.current = true

      if (audioRef.current) {
        // 사용자의 스크롤 이벤트를 감지했으므로 재생 시도
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
            isPlayingRef.current = true
          })
          .catch((error) => {
            console.error('Failed to play after interaction:', error)
          })
      }

      // 스크롤 이벤트 발생 후에는 리스너 제거
      window.removeEventListener('scroll', handleScroll)
    }

    // 인포메이션 섹션이 화면에 보이는지 감지
    const handleIntersection = (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting && !hasInteractedRef.current && !isPlayingRef.current) {
        // 사용자가 스크롤하여 이 섹션을 보고 있음
        hasInteractedRef.current = true

        if (audioRef.current) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true)
              isPlayingRef.current = true
            })
            .catch((error) => {
              console.error('Failed to play on section visible:', error)
            })
        }
      }
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)

    // 요소 가시성 감지 옵저버 설정
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5 // 50% 이상 보일 때 감지
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // 터치 이벤트 리스너도 추가 (모바일용)
    const handleTouch = () => {
      if (!hasInteractedRef.current && !isPlayingRef.current) {
        hasInteractedRef.current = true

        if (audioRef.current) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true)
              isPlayingRef.current = true
            })
            .catch((error) => {
              console.error('Failed to play after touch:', error)
            })
        }

        document.removeEventListener('touchstart', handleTouch)
      }
    }

    document.addEventListener('touchstart', handleTouch)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('touchstart', handleTouch)

      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handlePlayPause = () => {
    const audio = audioRef.current

    if (!audio) return

    if (!isPlaying) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          isPlayingRef.current = true
        })
        .catch((error) => {
          console.error('Failed to play audio:', error)
        })
    } else {
      audio.pause()
      setIsPlaying(false)
      isPlayingRef.current = false
    }
  }

  return (
    <section className="information-where" ref={sectionRef}>
      <div className="info-music-area">
        <div className="info-music-area">
          <img
            src={isPlaying ? pauseButton : playButton}
            alt="플레이버튼"
            className="info-play-btn audio-control"
            onClick={handlePlayPause}
            style={{cursor: 'pointer'}}
          />
          <img src={loveSong} alt="러브송" className="info-lovesong-img" />
        </div>
      </div>
      <div className="info-media-area">
        <img src={frame10Img} alt="장소 이미지" className="info-main-img" />
      </div>
      <div className="info-family-area">
        <div className="info-emoji">
          <span>🤵🏻</span>
          <span>🤍</span>
          <span>👰🏻‍♀️</span>
        </div>
        <div className="info-family-text">
          <div className="family-row">
            <span className="parents">임중섭 · 신계림</span>
            <span className="of">의</span>
            <span className="role">아들</span>
            <span className="name">임재민</span>
          </div>
          <div className="family-row">
            <span className="parents">전인수 · 송덕순</span>
            <span className="of">의</span>
            <span className="role">&emsp;딸</span>
            <span className="name">전주현</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InformationWhere
