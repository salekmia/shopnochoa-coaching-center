import React from 'react';
import './Hero.css';
const Hero = () => {
    return (
        <div className="mb-5">
            <div className="hero-image">
                <div className="hero-text">
                    <h1 style={{fontSize: '50px', color: 'white'}}>Shopnochoa Coaching Center</h1>
                    <p>In order to fulfill the dream</p>
                    <button>Get admitted</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;