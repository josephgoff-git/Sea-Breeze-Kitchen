import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg3 app__wrapper section__padding">
    
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.sb_chef} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">Our Values</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Every dish we serve at our restaurant tells a story of passion, creativity, and love for food.</p>
        </div>
        <p className="p__opensans"> Chef James has been a master in the culinary industry for over two decades. His commitment to excellence and innovative approach to cuisine have enabled him to work in some of the most prestigious restaurants in the world, including Michelin-starred establishments. Today, Chef James continues to innovate and push the boundaries of traditional cuisine, delivering unforgettable dining experiences to his guests.

        </p>
      </div>

      <div className="app__chef-sign">
        <p>James Connor</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.signature} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
