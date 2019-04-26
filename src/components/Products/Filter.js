import React from 'react';

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter-type">
                <button className="filter-type__btn ">Popular products</button>
                <button className="filter-type__btn active">Low price</button>
                <button className="filter-type__btn">High price</button>
            </div>

            <div className="filter-view">
                <button className="filter-view__btn filter-view__btn_grid"/>
                <button className="filter-view__btn filter-view__btn_row"/>
            </div>
        </div>
    );
};

export default Filter;