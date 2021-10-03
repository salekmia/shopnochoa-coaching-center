import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import WhyBest from '../../components/WhyBest/WhyBest';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <WhyBest></WhyBest>
        </div>
    );
};

export default Home;