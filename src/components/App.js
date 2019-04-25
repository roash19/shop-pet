import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProductsNews from "./ProductsNews";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <ProductsNews/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
