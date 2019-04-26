import React from 'react';
import Slider from 'react-slick';
import img from '../images/slider-img.png';

const sliders = [
    {
        img: img,
        title: "The Universe Through A Child S Eyes",
        text: 'Start sales'
    },
    {
        img: img,
        title: "The Universe Through A Child S Eyes",
        text: 'Start sales'
    },
    {
        img: img,
        title: "The Universe Through A Child S Eyes",
        text: 'Start sales'
    }
];

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const renderSliders = (sliders) => {
        return sliders.map((slider, index) => (
            <div className="main-slider__item" key={index}>
                <img className="main-slider__img" src={slider.img} alt=""/>
                <h2 className="main-slider__title">{slider.title}</h2>
                <p className="main-slider__text">{slider.text}</p>
            </div>
        ))
    };

    return (
        <div className="main-slider">
            <Slider {...settings}>
                {renderSliders(sliders)}
            </Slider>
        </div>
    );
};

export default MainSlider;