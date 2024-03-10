import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (

// const [imgVisible, setImgVisible] = useState(true)
    <div className="app__about_bg app__aboutus flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img style={{opacity: '0.2', marginRight: '10px'}} src={images.logo_img} alt="logo_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">We have created a stunning menu of the most fresh and delicious seafood dishes, centered around locally sourced and sustainable ingredients. We invite you to join us and savor the flavors of the sea with an incredible view right on the Ipswich waterfront!</p>
          <a href="#home"><button type="button" className="custom__button">Learn More</button></a>
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Sea Breeze Kitchen has been a beloved fixture of the community since we first opened in 1963. Over the years, we have maintained a firm commitment to providing an exceptional dining experiences to all guests, made posssible by the dedication and creativity of our team.</p>
          <a href="#home"><button type="button" className="custom__button">Learn More</button></a>
        </div>
      </div>
    </div>
);
// };

export default AboutUs;
