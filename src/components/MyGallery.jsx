import React, { useState, useRef, useEffect } from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import images from './image.jsx';
import '../css/MyGallery.css';

const MyGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const expandableRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (expandableRef.current) {
      setMaxHeight(showAll ? `${expandableRef.current.scrollHeight}px` : '0px');
    }
  }, [showAll, images.length]);

  // 갤러리 옵션 설정
  const galleryOptions = {
    showHideAnimationType: 'fade',
    clickToCloseNonZoomable: true,
    closeOnVerticalDrag: true,
    spacing: 0.12,
    allowPanToNext: true,
    maxZoomLevel: 2,
    imageClickAction: 'zoom',
    tapAction: 'zoom',
    doubleTapAction: 'zoom',
    loop: true,
    pinchToClose: true,
    closeTitle: '닫기',
    zoomTitle: '확대',
    arrowPrevTitle: '이전 이미지',
    arrowNextTitle: '다음 이미지',
    errorMsg: '이미지를 불러올 수 없습니다.'
  };

  return (
    <div className="gallery-container">
      <div className="textPhoto">
        <div className="gallery">Gallery</div>
        <div className="photo">photo</div>
      </div>
      <div className="notice">
        사진을 클릭하면 전체화면 보기가 가능합니다.
      </div>
      <Gallery options={galleryOptions} withCaption={false}>
        <div className="gallery-grid">
          {images.slice(0, 6).map((image, index) => (
            <div key={index} className="gallery-item-wrapper">
              <Item
                original={image.source}
                thumbnail={image.source}
                width={image.width}
                height={image.height}
                alt={image.alt}
              >
                {({ ref, open }) => (
                  <img
                    className="gallery-item"
                    ref={ref}
                    onClick={open}
                    src={image.source}
                    alt={image.alt}
                  />
                )}
              </Item>
            </div>
          ))}
        </div>

        <div
          ref={expandableRef}
          style={{
            overflow: 'hidden',
            maxHeight: maxHeight,
            transition: 'max-height 0.5s ease'
          }}
        >
          <div className="gallery-grid" style={{ marginTop: 0 }}>
            {images.slice(6).map((image, index) => (
              <div key={index + 6} className="gallery-item-wrapper">
                <Item
                  original={image.source}
                  thumbnail={image.source}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                >
                  {({ ref, open }) => (
                    <img
                      className="gallery-item"
                      ref={ref}
                      onClick={open}
                      src={image.source}
                      alt={image.alt}
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
      {images.length > 6 && (
        <div className="more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'HIDDEN' : 'MORE'}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
