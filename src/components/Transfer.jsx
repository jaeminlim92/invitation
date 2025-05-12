import Dropdown from './Dropdown'
import '../css/Transfer.css'
import bride from '../assets/images/bride.png'
import React from 'react'

function Transfer() {
  return (
    <>
      <div className="account-title">Account Info</div>
      <div className="account-notice">축하의 마음은 감사히 받겠습니다.</div>
      <div className="transfer-container">
        <div className="account-section">
          <Dropdown
            title="신랑 측"
            accounts={[
              {role: '신랑 ', owner: '임재민', bank: '하나', number: '010-566353-46707', className: 'account-card'},
              {
                role: '신랑 아버지',
                owner: '임재민',
                bank: '하나',
                number: '010-566353-46707',
                className: 'account-card'
              }
            ]}
            variant="groom"
          />
        </div>
        <div className="account-section">
          <Dropdown
            title={
              <>
                <img src={bride} alt={'신부 아이콘'} style={{width: '18px', height: '18px', marginRight: '6px'}} />
                신부 측
              </>
            }
            accounts={[
              {role: '신부 ', owner: '전주현', bank: '우리', number: '1002-345-678901', className: 'account-card'}
            ]}
            variant="bride"
          />
        </div>
      </div>
    </>
  )
}

export default Transfer
