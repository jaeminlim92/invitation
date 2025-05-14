import React, {useContext, useEffect, useRef, useState} from 'react'
import copy from '../assets/images/copy.png'
import '../css/Dropdown.css'
import {ToastContext} from './Transfer'

const Dropdown = ({title, accounts = [], variant = ''}) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef()
  const toastContext = useContext(ToastContext)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px'
    }
  }, [isOpen])

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber)
    if (toastContext && toastContext.displayToast) {
      toastContext.displayToast(accountNumber)
    }
  }

  return (
    <div className={`common-dropdown-wrapper ${variant} ${isOpen ? 'open' : ''}`}>
      <div className="common-dropdown-label" onClick={toggleDropdown}>
        {title}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div
        className="common-dropdown-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
          overflow: 'hidden'
        }}
      >
        {accounts.map((account, index) => (
          <div className="account-info" key={index}>
            <div className="account-details">
              <div className="account-header">
                <strong>{account.role}</strong>
                <span className="owner">{account.owner}</span>
              </div>
              <div className="account-bank">{account.bank}</div>
              <div className="account-number">{account.number}</div>
            </div>
            <button onClick={() => handleCopy(account.bank + ' ' + account.number)}>
              <img src={copy} alt="복사" className="copy-icon" />
              복사
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
