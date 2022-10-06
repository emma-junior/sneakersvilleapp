import React from 'react'
import "../Styles/ActiveImage/activeimage.css"

interface Props {
  images?: string;
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  num: number;
}

const ActiveImage = ({currentImage, setCurrentImage, images, num}: Props) => {
  return (
    <div className='activeimage-container'>
      {currentImage === num ? (
            <div className="activeimage-wrapper">
              <img
                className="image"
                onClick={() => setCurrentImage(num)}
                src={images}
                alt="imageOne"
              />
            </div>
          ) : (
            <div className="image-wrapper">
              <img
                className="image"
                onClick={() => setCurrentImage(num)}
                src={images}
                alt="imageOne"
              />
            </div>
          )}
    </div>
  )
}

export default ActiveImage