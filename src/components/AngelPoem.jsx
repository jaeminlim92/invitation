import React from 'react'
import '../css/AngelPoem.css'
import angelPhoto from '../assets/images/wedding-info/angel_photo.jpg'

const AngelPoem = () => {
  return (
    <div className="angel-poem-main">
      <div className="angel-poem-main-overlap-group">
        <div className="poem-area">
          생각만으로
          <br />
          힘이 되는 사람을 만났습니다.
          <br />
          <br />
          서로를 떠올리는 마음이
          <br />
          계절을 지나 사랑이 되었고
          <br />
          그 사랑으로 평생을 약속하려 합니다.
          <br />
          <br />
          저희 두 사람의 삶을
          <br />
          다정히 비춰준 당신께,
          <br />
          <br />
          나란히 적은 이름 끝에
          <br />
          설렘을 담아 이 초대를 띄웁니다.
          <br />
          <br />
          햇살이 마음을 닮은 날,
          <br />
          임재민, 전주현 드림
        </div>
        <div className="angel-photo-container">
          <img
            src={angelPhoto}
            alt="Wedding"
            className="angel-photo"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
        <div className="all-forever">
          ALL<span className="sub-title">(the little)</span>Forever
        </div>
      </div>
    </div>
  )
}
export default AngelPoem
