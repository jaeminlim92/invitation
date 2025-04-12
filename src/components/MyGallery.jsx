import 'photoswipe/dist/photoswipe.css'

import {Gallery, Item} from 'react-photoswipe-gallery'
import images from './image.ts'
import 'photoswipe/style.css'

const options = {
  zoom: false
}

const MyGallery = () => {

  const smallItemStyles: React.CSSProperties = {
    objectFit: 'cover',
    width: '100px',
    height: '100px'
  }

  return (
    <Gallery options={options}>
      <div className="title">
        <ul>갤러리</ul>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 0fr)',
          gridGap: 2,
          justifyContent: 'center',
          margin: '0 auto 100px'
        }}
      >
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              original={image.source}
              thumbnail={image.source}
              cropped={true}
              width={image.width}
              height={image.height}>
              {({ref, open}) => (
                <img style={smallItemStyles}
                     ref={ref}
                     onClick={open}
                     src={image.source}
                />
              )}
            </Item>
          )
        })}
      </div>
    </Gallery>
  )
}

export default MyGallery
