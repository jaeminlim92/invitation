import Dropdown from './Dropdown'
import '../css/Transfer.css'

function Transfer() {
  return (
    <>
      <div className="title">
        <ul>마음 전하실 곳</ul>
      </div>
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
            title="신부측"
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
