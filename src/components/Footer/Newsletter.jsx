import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Journal" />
      <h1 className="headtext__cormorant">Join Our Newsletter</h1>
      <p className="p__opensans">Get access to our weekly journal and never miss our latest deals to give you the best dining experience possible!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email" />
      <button type="button" className="custom__button">Join</button>
    </div>
  </div>
);

export default Newsletter;
