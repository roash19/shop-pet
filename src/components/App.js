import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductsNews from "./ProductsNews/ProductNews";
import Products from "./Products/Products";
import MainSlider from "./MainSlider";


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <MainSlider/>
            <ProductsNews/>
            <Products/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
