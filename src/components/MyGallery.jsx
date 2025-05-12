import React, { useState, useRef, useEffect } from 'react';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import images from './image.jsx'
import '../css/MyGallery.css'

const MyGallery = () => {

  const [showAll, setShowAll] = useState(false);

  const expandableRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (expandableRef.current) {
      setMaxHeight(showAll ? `${expandableRef.current.scrollHeight}px` : '0px');
    }
  }, [showAll, images.length]);

  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100px',
    height: '150px'
  }

  return (
    <Gallery>
      <div className="textPhoto">
        <div className="gallery">Gallery</div>
        <div className="photo">photo</div>
      </div>
      <div className="notice">
        사진을 클릭하면 전체화면 보기가 가능합니다.
      </div>
      <div className="gallery-grid">
        {images.slice(0, 6).map((image, index) => (
          <Item
            key={index}
            cropped
            original={image.source}
            thumbnail={image.source}
            width={image.width}
            height={image.height}
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                alt={image.alt}
                src={image.source}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
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
        <div className="gallery-grid">
          {images.slice(6).map((image, index) => (
            <Item
              key={index + 6}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          ))}
        </div>
      </div>
      {images.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? '접기' : '더보기'}
          </button>
        </div>
      )}
    </Gallery>
  );
}

export default MyGallery
