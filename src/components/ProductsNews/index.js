import React from 'react';
import headphones from '../../images/headphones.png';
import commercial from '../../images/commercial-img.png';
import mus_speaker from '../../images/mus-speaker.png';
import clock from '../../images/clock.png';

const ProductsNews = () => {
    return (
        <div className="products-news">
            <a href="#" className="news-sales">
                <p className="news-sales__title text-default">Astronomy Or Astrology</p>
                <p className="news-sales__subtitle">Start sales</p>
                <div className="news-sales__img-wrapper">
                    <img className="news-sales__img" src={headphones} alt=""/>
                </div>
            </a>

            <a href="#" className="news-commercial" style={{background: `url(${commercial})`}}>
                <p className="news-commercial__title">The Basics Of Buying A Telescope</p>
                <p className="news-commercial__subtitle">Astronomy Or Astrology</p>
            </a>

            <div className="news-new-product">
                <a href="#" className="new-product">
                    <div className="new-product__img-wrapper">
                        <img className="new-product__img" src={mus_speaker} alt=""/>
                    </div>
                    <div className="new-product__text-wrapper">
                        <p className="new-product__text text-default">Getting Free Publicity</p>
                        <p className="new-product__text text-default">For Your Business</p>
                    </div>
                </a>

                <a href="#" className="new-product">
                    <div className="new-product__img-wrapper">
                        <img className="new-product__img" src={clock} alt=""/>
                    </div>
                    <div className="new-product__text-wrapper">
                        <p className="new-product__text text-default">How Plasma Tvs And</p>
                        <p className="new-product__text text-default">Lcd Tvs Differ</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProductsNews;