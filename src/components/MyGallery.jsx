import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import images from './image.ts'

const MyGallery = () => {

  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100px',
    height: '150px'
  }

  return (
      <Gallery>
        <div className="title" style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px', marginBottom: '5px' }}>
          <ul>Gallery</ul>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 0fr)',
            gridGap: 2,
            justifyContent: 'center', // ✅ 전체 중앙 정렬
            alignItems: 'center',
            width: '100%', // ✅ 전체 폭 사용
            maxWidth: '600px', // ✅ 중앙 정렬 고정 크기 적용
            margin: '0 auto', // ✅ 부모 기준 가로 중앙 정렬
          }}>
          {images.map((image, index) => {
            return (
              <Item
                key={index}
                cropped
                original={image.source}
                thumbnail={image.source}
                width={image.width}
                height={image.height}>
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
            );
          })}
        </div>
      </Gallery>
  );
};

  export default MyGallery
