import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ServicesItem from '../../components/ServicesItem/ServicesItem';
import './Services.css';
const Services = () => {
    const [items, setItems] = useState([])
    useEffect(()=> {
        fetch('fakedataall.JSON')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container my-5">
                <h1 className="text-center text-success">Services</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        items.map(item => <ServicesItem item={item} key={item.id}></ServicesItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;