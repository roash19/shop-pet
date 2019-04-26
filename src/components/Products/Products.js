import React from 'react';
import Categories from "./Categories";
import Filter from "./Filter";
import Cards from "./Cards";

const Products = () => {
    return (
        <div className="products">
            <Categories/>
            <div className="products-body">
                <Filter/>
                <Cards/>
            </div>
        </div>
    );
};

export default Products;