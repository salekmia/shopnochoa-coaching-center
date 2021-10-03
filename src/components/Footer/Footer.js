import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer  mt-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="map col-md-6">
                    
                    </div>
                    <div className="address col-md-6 ps-5">
                        <h3>Address</h3>
                        <div className="d-flex align-items-center p-0 m-0">
                            <i class="fas fa-map-marker-alt me-2 pb-3"></i>
                            <p><strong>Address:</strong> Tearirchor, Bhairab, Kishoregonj</p>
                        </div>
                        <div className="d-flex align-items-center p-0 m-0">
                            <i class="fas fa-phone me-2 pb-3"></i>
                            <p><strong>Phone:</strong> 01859650251</p>
                        </div>
                        <div className="d-flex align-items-center p-0 m-0">
                            <i class="far fa-envelope me-2 pb-3"></i>
                            <p><strong>Email:</strong> bhairabbari330@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="container" />
            <div className="container text-center">
                <p>Copyright &copy; Abu Salek 2021</p>
            </div>
            <div>

            </div>
        </div>
        </div>
    );
};

export default Footer;