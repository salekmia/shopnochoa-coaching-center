import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import about1 from '../../images/about-card1.jpg';
import about2 from '../../images/about-card2.jpg';
import gurdian1 from '../../images/gurdian1.jpg';
import gurdian2 from '../../images/gurdian2.jpg';
import gurdian3 from '../../images/gurdian3.jpg';
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

            {/* Why we best */}
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

            {/* Testimonial */}
            <div className="guardian-says container my-5">
                <h1 className="text-center text-success">Guardians Says</h1>
                <div class="row">
                    <div class="col-md-4">
                        <div class="shadow-lg h-100">
                            <img class="img-fluid d-flex mx-auto testimonial-img" src={gurdian1} alt=""/>
                            <div class="card-body">
                                <div className="card-text text-center">
                                Thank you Shopnochoa coaching center. You are the best because of this charecter. We are vary happy to get you in the right time. Pray for our children so that they will be big in thier life.
                                </div>
                            </div>
                            <div class="card-footer"> <span id="name">Micheal Smith<br/></span> <span id="position">Banker</span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="shadow-lg h-100">
                            <img class="img-fluid d-flex mx-auto testimonial-img" src={gurdian2}alt=""/>
                            <div class="card-body">
                                <div className="card-text text-center">
                                When I was tryign to get a coaching center near by my village. Then I got you shopnochoa coaching center. Thank you so very much for your amazing teaching to our child.
                                </div>
                            </div>
                            <div class="card-footer"> <span id="name">Angellia Miller<br/></span> <span id="position">Housewife</span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="shadow-lg h-100">
                            <img class="img-fluid d-flex mx-auto testimonial-img" src={gurdian3}alt=""/>
                            <div class="card-body">
                                <div className="card-text text-center">
                                You all teacher all realy good. Because you are vary carefull about our children. I pray for you and your coaching center. Thanks a log. Thats prety cool! right?
                                </div>
                            </div>
                            <div class="card-footer"> 
                            <span id="name">Christina Williams<br/></span> 
                            <span id="position">Teacher</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;