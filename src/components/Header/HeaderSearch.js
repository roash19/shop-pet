import React from 'react';

const HeaderSearch = () => {
    return (
        <form className="header-search">
            <input type="text" className="header-search__input" placeholder="Search goods"/>
            <div className="select-wrapper">
                <select className="header-search__select">
                    <option value="category">category</option>
                </select>
            </div>
        </form>
    );
};

export default HeaderSearch;