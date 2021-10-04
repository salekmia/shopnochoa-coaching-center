import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import slide1 from '../../images/slide1.jpeg';
import slide2 from '../../images/slide2.jpeg';
import slide3 from '../../images/slide3.jpeg';
import stu1 from '../../images/stu1.jpg';
import stu2 from '../../images/stu2.jpg';
import stu3 from '../../images/stu3.jpg';
import stu4 from '../../images/stu4.jpg';
import stu5 from '../../images/stu5.jpg';
import stu6 from '../../images/stu6.jpg';
import stu7 from '../../images/stu7.jpg';
import './Students.css';

const Student = () => {
    return (
        <div>
            <Header></Header>
            
            <div className="bg-black text-white py-5">
                <div className="container">
                    <div id="carouselExampleCaptions" className="carousel slide mb-5" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={slide1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={slide3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="row row-cols-2 g-0 img-galary">
                        <div className="col">
                            <img className="w-100" src={stu1} alt="" />
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Effective goal-setting</h4>
                                <p>A good teacher is the possession of our society. He is sincere in his work. He should have a pleasing personality.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Clear communication</h4>
                                <p>He must be honest, dutiful, punctual, sincere, hardworking and a talented person, efficient in teaching or presenting his subject, amiable with the students, caring help, enterprising and rich with current knowledge.</p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="w-100" src={stu2} alt="" />
                        </div>
                        <div className="col">
                            <img className="w-100" src={stu3} alt="" />
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Acting as a role model</h4>
                                <p>A good teacher must always encourage learners to develop their latent talents. He also helps the students to understand their lessons and to develop their creativeness.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Preparation</h4>
                                <p>A good teacher discovers the treasure hidden inside each student. He also wants the students useful and happy. He must be a dedicated soul.</p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="w-100" src={stu4} alt="" />
                        </div>
                        <div className="col">
                            <img className="w-100" src={stu5} alt="" />
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Self-reflection</h4>
                                <p>A good teacher is he who can attract the attention of the students to his personal character. He is, in fact, a friend, a philosopher and a guide to the students. </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Life-long learning</h4>
                                <p>Teaching is a noble profession and Bertrand Russell calls such kind of teachers as the guardians of civilization. He is honoured and respected by all.</p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="w-100" src={stu6} alt="" />
                        </div>
                        <div className="col">
                            <img className="w-100" src={stu7} alt="" />
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="ms-5">
                                <h4>Promoting a love of learning</h4>
                                <p>A man or a woman who teaches the students in any educational institution is called a teacher. A good teacher is one of the most important people in the country.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default Student;