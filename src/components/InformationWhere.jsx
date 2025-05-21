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
  // 페이지를 떠났다가 돌아왔는지 추적하는 ref
  const wasPlayingBeforeHiddenRef = React.useRef(false)
  const sectionRef = React.useRef(null)

  React.useEffect(() => {
    // Audio 객체를 useEffect 안에서 생성
    audioRef.current = new Audio(Flower)
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    // 1초 후에 자동 재생
    const autoPlayTimer = setTimeout(() => {
      if (audioRef.current && !isPlayingRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
            isPlayingRef.current = true
          })
          .catch((error) => {
            console.error('Failed to auto play:', error)
          })
      }
    }, 1000) // 1초 후 실행

    const handleVisibilityChange = () => {
      const audio = audioRef.current

      if (document.hidden) {
        // 화면이 숨겨질 때 재생 중이었다면 상태를 저장하고 일시정지
        if (isPlayingRef.current) {
          wasPlayingBeforeHiddenRef.current = true
          audio.pause()
          setIsPlaying(false)
          isPlayingRef.current = false
        }
      } else {
        // 화면이 다시 보일 때, 이전에 재생 중이었다면 다시 재생
        if (wasPlayingBeforeHiddenRef.current) {
          audio
            .play()
            .then(() => {
              setIsPlaying(true)
              isPlayingRef.current = true
              wasPlayingBeforeHiddenRef.current = false
            })
            .catch((error) => {
              console.error('Failed to resume play after visibility change:', error)
            })
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearTimeout(autoPlayTimer)
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
        <table className="family-table">
          <tbody>
            <tr className="family-row">
              <td className="emoji-cell">🤵🏻</td>
              <td className="text-cell">
                임중섭 · 신계림의 &emsp;&ensp;아들 &emsp;<b>임재민</b>
              </td>
            </tr>
            <tr className="family-row">
              <td className="emoji-cell">🤍</td>
              <td className="text-cell"></td>
            </tr>
            <tr className="family-row">
              <td className="emoji-cell">👰🏻‍♀️</td>
              <td className="text-cell">
                전인수 · 송덕순의 &emsp;&ensp;&ensp;&ensp;딸 &emsp;<b>전주현</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default InformationWhere
