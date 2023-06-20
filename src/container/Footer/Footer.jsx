import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">83 Larson St, Ipswich, MA 01938, USA</p>
        <p className="p__opensans">+1 978-816-2246</p>
        <p className="p__opensans">+1 978-816-2139</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.sb_logo} alt="footer_logo" style={{marginTop: '-10px'}}/>
        <p className="p__opensans">&quot;The path to all you've ever desired begins with loving service to others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">04:00 pm - 11:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Sea Breeze Kitchen. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
