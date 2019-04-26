import React from 'react';
import clock from '../../images/clock-card-img.png';

const Card = () => {
    return (
        <div className="card">
            <div className="card-top">
                <div className="sale-icon">sale</div>
                <button className="favorite-btn"/>

            </div>

            <div className="card__img-wrapper">
                <img className="card__img" src={clock} alt=""/>
            </div>

            <p className="card__text text-default">
                Asus ZenFone Go ZB452KG (black and white)
            </p>

            <div className="stars card__star">
                <button className="star"/>
                <button className="star"/>
                <button className="star"/>
                <button className="star star_half"/>
                <button className="star star_empty"/>
                <p className="stars__count">12</p>
            </div>

            <div className="card-price">
                <p className="card-price__text">$ 384.4</p>
                <button className="shopping-cart-btn"/>
            </div>
        </div>
    );
};

export default Card;