import React from 'react';
import burger from '../../images/burger_icon.svg';
import arrow from '../../images/arrow_13px_icon.svg';

const HeaderBottom = () => {
    return (
        <div className="header-bottom container">
            <div className="header-categories d-flex align-center">
                <img className="header-categories__img" src={burger} alt=""/>
                <p className="header-categories__text text-default text-overflow">All Categories</p>
            </div>

            <ul className="header-types">
                <li className="header-types__item">
                    <a className="header-types__link text-default" href="#">Super Deals</a>
                </li>
                <li className="header-types__item">
                    <a className="header-types__link text-default" href="#">Featured Brands</a>
                </li>
                <li className="header-types__item">
                    <a className="header-types__link text-default" href="#">Collections</a>
                </li>
                <li className="header-types__item">
                    <a className="header-types__link text-default" href="#">Bestselling</a>
                </li>
            </ul>

            <div className="header-bottom-select">
                <p className="header-bottom-select__text text-default">Help</p>
                <img className="header-bottom-select__img" src={arrow} alt=""/>
            </div>

            <div className="header-bottom-select">
                <p className="header-bottom-select__text text-default">USD</p>
                <img className="header-bottom-select__img" src={arrow} alt=""/>
            </div>

            <div className="header-bottom-select">
                <p className="header-bottom-select__text text-default">Language</p>
                <img className="header-bottom-select__img" src={arrow} alt=""/>
            </div>
        </div>
    );
};

export default HeaderBottom;