import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#6493A8' }}>{title}</p>
      <p className="p__opensans" style={{ fontSize: 'calc(0.5vw + 8px)' }}>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg_awards app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info awards">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Culinary Awards</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    {/* <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div> */}
  </div>
);

export default Laurels;
