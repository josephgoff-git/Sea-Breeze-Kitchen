import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="navspace">
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading id="sub1" title="Fresh flavors every day" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>A refined culinary experience awaits you at our seaside retreat, where we bring you expertly crafted dishes that elegantly combine the finest locally-sourced ingredients with the delicacies of the sea.</p>
        <a href="#menu"><button type="button" className="custom__button">Explore Menu</button></a>
      </div>

      <div className="app__wrapper1_img">
          <img src={images.main_side1} alt="header_img1" />
      </div>

    </div>
  </div>
);

export default Header;
