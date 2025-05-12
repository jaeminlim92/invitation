import React from 'react'
import playButton from '../assets/images/wedding-info/play_button.png'
import loveSong from '../assets/media/love_song_component.gif'
import frame10Img from '../assets/images/wedding-info/wedding-info-carmera.png' // Frame 10의 이미지로 교체 필요
import pauseButton from '../assets/images/wedding-info/pause_button.png'
import '../css/InformationWhere.css'

function InformationWhere() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef(new Audio(require('../assets/media/Flower.mp3')))

  const handleVisibilityChange = () => {
    const audio = audioRef.current
    audio.volume = 0.5
    if (document.hidden) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true))
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange)

  React.useEffect(() => {
    const audio = audioRef.current
    audio.loop = true

    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Autoplay blocked:', err)
        })
    }

    // Allow playback on user interaction
    const unlockAudio = () => {
      tryPlay()
      window.removeEventListener('click', unlockAudio)
    }

    window.addEventListener('click', unlockAudio)

    return () => {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
      window.removeEventListener('click', unlockAudio)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error)
    } else {
      audio.pause()
      setIsPlaying(false)
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
          🤵🏻
          <br />
          🤍
          <br />
          👰🏻‍♀️
        </div>
        <div className="info-family-text">
          임중섭 · 신계림 의 아들 임재민
          <br />
          전인수 · 송덕순 의 딸 전주현
        </div>
      </div>
    </section>
  )
}

export default InformationWhere
