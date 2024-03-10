import React from 'react';
import { NavLink } from 'react-router-dom';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg5 app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '1.5rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">83 Larson St, Ipswich, MA 01938, USA</p>
        <p className="p__cormorant" style={{ color: '#6493A8', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 4:00 pm - 11:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 11:00 pm</p>
      </div>
      <NavLink to="login"><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Book Now</button></NavLink>
    </div>

    <div className="app__wrapper_img">
      <img src={images.outside2} style={{marginTop: '40px'}} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
