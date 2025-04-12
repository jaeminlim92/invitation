import '../css/Header.css';
import weddingImg from '../assets/images/wedding_title.jpg';

function HeaderIndex() {
  return (
    <section className="header-section">
      <div className="header-inner">
        <img src={weddingImg} alt="배경" className="header-bg" />
        <div className="header-content">
          <h1 className="header-title">Our Day</h1>
          <p className="header-subtitle">2025년 9월 20일 · 세종대왕기념관</p>
        </div>
      </div>
    </section>
  );
}

export default HeaderIndex;

