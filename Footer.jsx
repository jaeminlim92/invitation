import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f5f5f5', // 옅은 회색 배경
      padding: '40px 20px',
      marginTop: '60px',
      textAlign: 'center',
      borderTop: '1px solid #e0e0e0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{
          color: '#666',
          fontSize: '14px',
          margin: '0'
        }}>
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
