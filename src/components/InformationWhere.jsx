import React from 'react'
import playButton from '../assets/images/wedding-info/play_button.png'
import loveSong from '../assets/media/love_song_component.gif'
import frame10Img from '../assets/images/wedding-info/wedding-info-carmera.png' // Frame 10의 이미지로 교체 필요
import pauseButton from '../assets/images/wedding-info/pause_button.png'
import Flower from '../assets/media/Flower.mp3'
import '../css/InformationWhere.css'

function InformationWhere() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef(null)
  const isPlayingRef = React.useRef(false) // isPlaying 상태를 추적하기 위한 ref

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

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
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
          // 에러가 발생해도 UI는 업데이트하지 않음
        })
    } else {
      audio.pause()
      setIsPlaying(false)
      isPlayingRef.current = false
    }
  }

  return (
    <section className="information-where">
      <div className="info-music-area">
        <div className="info-music-area">
          <img
            src={isPlaying ? pauseButton : playButton}
            alt="플레이버튼"
            className="info-play-btn"
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
            <span className="role">딸</span>
            <span className="name">전주현</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InformationWhere
