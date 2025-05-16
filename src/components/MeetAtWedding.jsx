import React from 'react'
import '../css/MeetAtWedding.css'
import heartFrame from '../assets/images/heart_frame.jpg' // 배경 이미지 직접 가져오기

function MeetAtWedding() {
  return (
    <div className="meet-at-wedding-container">
      <div className="text-area">
        <div className="meet">
          Meet <span className="at">at</span>
        </div>
        <div className="wedding">Wedding day</div>
      </div>
      <div className="follow-wedding-container">
        <div
          className="follow-wedding"
          style={{
            backgroundImage: `url(${heartFrame})`
          }}
        >
          <div className="wedding-info-text">본 예식은 전통혼례 식순을 따라 진행될 예정입니다.</div>
        </div>
      </div>
    </div>
  )
}

export default MeetAtWedding
