import React from 'react';
import cart from '../../images/shopping_cart_icon.svg';
import heart from '../../images/heart_icon.svg';
import user from '../../images/account_icon.svg';

const HeaderUserPanel = () => {
    return (
        <ul className="header-user-panel">
            <li className="header-user-panel__item text-default">
                <img className="header-user-panel__icon" src={cart} alt="You cart"/>
                2 Items
            </li>
            <li className="header-user-panel__item text-default">
                <img className="header-user-panel__icon" src={heart} alt="You wish"/>
                Wish List
            </li>
            <li className="header-user-panel__item text-default">
                <img className="header-user-panel__icon" src={user} alt=""/>
                Sing in
            </li>
        </ul>
    );
};

export default HeaderUserPanel;