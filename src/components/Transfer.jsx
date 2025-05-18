import Dropdown from './Dropdown'
import '../css/Transfer.css'
import React, {createContext, useState} from 'react'
import duckImage from '../assets/images/duck.jpg'

// Toast Context 생성
export const ToastContext = createContext()

function Transfer() {
  const [showToast, setShowToast] = useState(false)
  const [copiedAccount, setCopiedAccount] = useState('')

  const displayToast = (accountNumber) => {
    setCopiedAccount(accountNumber)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <ToastContext.Provider value={{displayToast}}>
      <div style={{position: 'relative'}}>
        <div className="account-title">Account Info</div>
        <div className="account-notice">축하해주시는 따뜻한 마음, 감사히 받겠습니다.</div>

        {showToast && (
          <div className="toast-message">{copiedAccount ? `${copiedAccount} 복사되었습니다.` : '복사되었습니다.'}</div>
        )}

        <div className="transfer-container">
          <div className="account-section">
            <Dropdown
              title="신랑 측 계좌번호"
              accounts={[
                {role: '신랑', owner: '임재민', bank: '하나', number: '010-566353-46707', className: 'account-card'},
                {
                  role: '신랑 아버지',
                  owner: '임중섭',
                  bank: 'SC제일은행',
                  number: '358-20-256772',
                  className: 'account-card'
                },
                {
                  role: '신랑 어머니',
                  owner: '신계림',
                  bank: '우리은행',
                  number: '124-07-144218',
                  className: 'account-card'
                }
              ]}
              variant="groom"
            />
          </div>
          <div className="account-section">
            <Dropdown
              title="신부 측 계좌번호"
              accounts={[
                {
                  role: '신부',
                  owner: '전주현',
                  bank: '카카오뱅크',
                  number: '3333-01-4297264',
                  className: 'account-card'
                },
                {
                  role: '신부 어머니',
                  owner: '송덕순',
                  bank: '농협',
                  number: '603032-52-050697',
                  className: 'account-card'
                }
              ]}
              variant="bride"
            />
          </div>
        </div>

        <div className="duck-container">
          <img src={duckImage} alt="Duck" className="duck-image" />
        </div>
      </div>
    </ToastContext.Provider>
  )
}

export default Transfer
