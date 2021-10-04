import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Item from '../../components/Item/Item';
import WhyBest from '../../components/WhyBest/WhyBest';
import './Home.css';
const Home = () => {
    const [items, setItems] = useState([])
    useEffect(()=> {
        fetch('fakedata.JSON')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <WhyBest></WhyBest>
            <div className="my-5 container">
                <h1 className="text-center text-success">Services</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        items.map(item => <Item item={item} key={item.id}></Item>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;