import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const imgWidth = document.getElementById('carousel-card').clientWidth;

    if (direction === 'left') {
      current.scrollLeft -= imgWidth + 25;
    } else {
      current.scrollLeft += imgWidth + 25;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Follow Our Journey</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Keep up to date with our latest creations and find out more about how we prepare our incredible seafood tasting menu! </p>
        <a href="instagram.com"><button type="button" className="custom__button">View Our Instagram</button></a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.insta_img1, images.insta_img3, images.insta_img2, images.insta_img4, images.insta_img5, images.insta_img7, images.insta_img6].map((image, index) => (
            <a href="www.instagram.com"><div id="carousel-card" className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div></a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
