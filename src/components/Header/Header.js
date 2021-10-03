import React from 'react';
import img from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="top-header d-flex justify-content-between container text-white mb-0">
                <div>
                    <h5>Phone: 01859650251</h5>
                </div>
                <div>
                    <ul className="social-container d-flex m-0 p-0">
                        <li><a href="https://www.facebook.com/salekalways"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/codersalek"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/salekalways/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/salekalways/"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <hr className="container"/>
            <div className="secod-header d-flex container justify-content-between justify-items-center">
                <div className="logo">
                    <img width="150px" src={img} alt="" />
                </div>
                <div className="navbar">
                    <ul className="d-flex m-0 p-0">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="services">Services</a></li>
                        <li><a href="/students">Sudents</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;