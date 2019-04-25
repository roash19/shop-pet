import React from 'react';
import visa from '../../images/visa_icon.svg';
import masterCard from '../../images/mastercard_icon.svg';
import paypal from '../../images/paypal_icon.svg';
import amazon from '../../images/amazon_icon.svg';

const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="footer-top">
                <div className="container footer-top__container">
                    <a href="#" className="logo footer__logo header-top__logo">QUANTUM</a>
                    
                    <ul className="footer-nav">
                        <li className="footer-nav__item">
                            <a className="footer-nav__link" href="#">Shop</a>
                        </li>
                        <li className="footer-nav__item">
                            <a className="footer-nav__link" href="#">Journal</a>
                        </li>
                        <li className="footer-nav__item">
                            <a className="footer-nav__link" href="#">About</a>
                        </li>
                        <li className="footer-nav__item">
                            <a className="footer-nav__link" href="#">Contacts</a>
                        </li>
                    </ul>

                    <ul className="footer-social social-block">
                        <li className="social-block__item">
                            <a className="social-block__link social-block__link_facebook" href="#"/>
                        </li>
                        <li className="social-block__item">
                            <a className="social-block__link social-block__link_twitter" href="#"/>
                        </li>
                        <li className="social-block__item">
                            <a className="social-block__link social-block__link_instagram" href="#"/>
                        </li>
                        <li className="social-block__item">
                            <a className="social-block__link social-block__link_youtube" href="#"/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom__container">
                    <div className="footer-copyright">
                        <p className="footer-copyright__text text-default">© {new Date().getFullYear()}. Quantum UI kit</p>
                        <a className="footer-copyright__link text-default" href="#">Privacy Policy</a>
                        <a className="footer-copyright__link text-default" href="#">Terms of Use</a>
                    </div>

                    <div className="footer-payment">
                        <p className="footer-payment__text text-default">Accepted payment methods</p>
                        <div className="payment-card">
                            <img className="payment-card__item visa" src={visa} alt="Visa"/>
                            <img className="payment-card__item master-card" src={masterCard} alt="MasterCart"/>
                            <img className="payment-card__item visa" src={paypal} alt="PayPal"/>
                            <img className="payment-card__item visa" src={amazon} alt="Amazon"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;