import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
        <footer>
            <div className="footer">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <a className="logo_footer" href="/home"><img src="https://i.ibb.co/2390WH5/logo.png" alt="#"/></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="">
                            <h3>Our Partner</h3>
                            <ul className="opening">
                                <li>◉ Chinabd Shop</li>
                                <li>◉ Fresh Fruits Everyday</li>
                                <li>◉ Norsendi Fruits</li>
                                <li>◉ britannica.com</li>
                                <li>◉ Imported from US/China</li>
                                <li>◉ Khusi.com</li>
                                <li>◉ Fruity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="">
                            <h3>Opening time</h3>
                            <ul className="opening">
                            <li>Monday <span>8am – 10pm</span></li>
                            <li>Tuesday <span>8am – 10pm</span></li>
                            <li>Wednesday<span>8am – 10pm</span></li>
                            <li>Thursday  <span>8am – 10pm</span></li>
                            <li>Friday   <span>8am – Midnight</span></li>
                            <li>Suturday   <span>8am – 10pm</span></li>
                            <li>Suturday   <span>8am – 10pm</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="headimg_fooh3">
                            <h3>Contact Us</h3>
                            <ul className="opening">
                            <li>Call +01 1234567890</li>
                            <li><a href="#"> marjanbintaaziz@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Copyright &copy; {year} <a href="https://github.com/Marjan-Binta-Aziz"> Marjan Binta Aziz</a></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;