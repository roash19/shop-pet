import React from 'react';
import desktop_windows from '../../images/desktop_windows_icon.svg';
import desktop_mac from '../../images/desktop_mac_icon.svg';
import laptop from '../../images/laptop_icon.svg';
import keyboard from '../../images/keyboard_icon.svg';
import memory from '../../images/memory_icon.svg';
import speaker from '../../images/speaker_icon.svg';
import phone_iphone from '../../images/phone_iphone_icon.svg';
import tv from '../../images/tv_icon.svg';
import videogame_asset from '../../images/videogame_asset_icon.svg';
import watch from '../../images/watch_icon.svg';


const categories = [
    {
        name: 'Computers',
        img: desktop_windows
    },
    {
        name: 'Apple Computers',
        img: desktop_mac
    },
    {
        name: 'Laptops',
        img: laptop
    },
    {
        name: 'Friends',
        img: keyboard
    },
    {
        name: 'Computer Components',
        img: memory
    },
    {
        name: 'Accessories',
        img: speaker
    },
    {
        name: 'Cell Phones',
        img: phone_iphone
    },
    {
        name: 'TV & Video',
        img: tv
    },
    {
        name: 'Game consoles',
        img: videogame_asset
    },
    {
        name: 'Watches',
        img: watch
    }
];

const renderCategories = (categories) => {
  return  categories.map(category => (
      <li className="categories__item" key={category.name}>
          <div className="categories__item-img-wrapper">
              <img className="categories__item-img" src={category.img} alt=""/>
          </div>
          <p className="categories__item-text text-default">{category.name}</p>
      </li>
  ))
};

const Categories = () => {
    return (
        <aside className="products-categories">
            <ul className="categories">
                {renderCategories(categories)}
            </ul>
        </aside>
    );
};

export default Categories;