import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Savory Seafood Dishes" />
      <h1 className="headtext__cormorant">Menu Specials</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Appetizers</p>
        <div className="app__specialMenu_menu_items">
          {data.appetizers.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
          ))}
        </div>   
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.special_menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Entrées</p>
        <div className="app__specialMenu_menu_items">
          {data.entrees.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
