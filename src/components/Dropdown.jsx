import React, { useState, useRef, useEffect } from 'react';
import '../css/Dropdown.css';

const Dropdown = ({ title, accounts = [], variant ='' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState('');
  const [showToast, setShowToast] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // 2초 후 사라짐
  };

  return (
    <div className={`common-dropdown-wrapper ${variant} ${isOpen ? 'open' : ''}`}>
      <div className="common-dropdown-label" onClick={toggleDropdown}>
        {title}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {showToast && (
        <div className="toast-message">
          계좌번호가 복사되었습니다.<br/>
          ({copiedAccount})
        </div>
      )}
      <div
        className="common-dropdown-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
          padding: isOpen ? '16px' : '0 16px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, padding 0.3s ease, opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        {accounts.map((account, index) => (
          <div className="gift-info-content" key={index}>
            <div className="owner-info">
              <strong>{account.owner}</strong>
            </div>
            <div className="account-info">
              <div className="account-number">{account.bank} {account.number}</div>
              <button onClick={() => handleCopy(account.number)}>계좌번호 복사</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
