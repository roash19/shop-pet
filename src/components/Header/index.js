import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    return (
        <header className="container-fluid header">
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    );
};

export default Header;