import React from 'react';
import playButton from '../assets/images/wedding-info/play_button.png';
import loveSong from '../assets/images/wedding-info/love_song_component.gif';
import frame10Img from '../assets/images/wedding-info/wedding-info-carmera.png'; // Frame 10의 이미지로 교체 필요
import '../css/InformationWhere.css';

function InformationWhere() {
  return (
    <section className="information-where">
        <div className="info-music-area">
            <img src={playButton} alt="플레이버튼" className="info-play-btn" />
            <img src={loveSong} alt="러브송" className="info-lovesong-img" />
        </div>
        <div className="info-media-area">
            <img src={frame10Img} alt="장소 이미지" className="info-main-img" />
        </div>
        <div className="info-family-area">
            <div className="info-emoji">🤵🏻<br />🤍<br />👰🏻‍♀️</div>
            <div className="info-family-text">
            임중섭 · 신계림 의 아들   임재민<br />
            전인수 · 송덕순 의 딸   전주현
            </div>
        </div>
    </section>
  );
}

export default InformationWhere; 