import React from 'react';
import Header from '../../components/Header/Header';
import about1 from '../../images/about-card1.jpg';
import about2 from '../../images/about-card2.jpg';
import './About.css';
const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-bg d-flex align-items-center mb-5">
                <div className="container p-5">
                    <h1 className="text-white">About Us</h1>
                </div>
            </div>

            {/* proccess */}
            <div className="process container">
                <div className="row">
                    <div className="col-md-5 lh-4">
                        <p><small>Why our coaching center?</small></p>
                        <h3 className="lh-base">Best Teaching system by our Professionals.</h3>
                        <p className="lead">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great.</p>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src={about1} alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Awesome teaching</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <div class="card">
                            <img src={about2} alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Teaching with fun</h5>
                                <p class="card-text">Our Teacher are very funny. All the student are vary happy to get an awesome teacher.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;