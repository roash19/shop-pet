import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderUserPanel from './HeaderUserPanel';

const HeaderTop = () => {
    return (
        <div className="header-top container-fluid">
            <div className="container header-top__container">
                <a href="#" className="logo header-top__logo">QUANTUM</a>
                <HeaderSearch/>
                <HeaderUserPanel/>
            </div>
        </div>
    );
};

export default HeaderTop;