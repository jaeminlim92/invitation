import Dropdown from './Dropdown'
import '../css/Transfer.css';

function Transfer() {
  return (
    <>
      <div className="title" style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px', marginBottom: '5px' }}>
        <ul>마음 전하실 곳</ul>
      </div>
      <div className="transfer-container">
        <div className="account-section">
          <Dropdown
            title="신랑측 계좌번호 확인하기"
            accounts={[
              { owner: '신랑 임재민', bank: '하나', number: '010-566353-46707' },
            ]}
            variant="groom"
          />
        </div>
        <div className="account-section">
          <Dropdown
            title="신부측 계좌번호 확인하기"
            accounts={[
              { owner: '신부 전주현', bank: '우리', number: '1002-345-678901' },
            ]}
            variant="bride"
          />
        </div>
      </div>
    </>
  );
}

export default Transfer;
