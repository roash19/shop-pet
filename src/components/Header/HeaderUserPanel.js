import React from 'react';
import user from '../../images/account_icon.svg';

const HeaderUserPanel = () => {
    return (
        <ul className="header-user-panel">
            <li className="header-user-panel__item text-default">
                <i className="shopping-cart-btn header-user-panel__icon"/>
                2 Items
            </li>
            <li className="header-user-panel__item text-default">
                <i className="favorite-btn header-user-panel__icon"/>
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