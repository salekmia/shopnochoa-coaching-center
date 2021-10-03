import React from 'react';
import './WhyBest.css';
const WhyBest = () => {
    return (
        <div className="text-center">
            <h1 className="text-success">Why we are best?</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="p-4 m-4 best-item">
                        <i class="far fa-edit best-icon"></i>
                        <h4>Writing</h4>
                        <p>We train up our student with awesome writing skill. Writing is one of the main focus of our coaching.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 m-4 best-item">
                        <i class="fas fa-book-reader best-icon"></i>
                        <h4>Speaking</h4>
                        <p>We train up our student with awesome writing skill. Writing is one of the main focus of our coaching.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 m-4 best-item">
                        <i class="fas fa-microchip best-icon"></i>
                        <h4>Technology</h4>
                        <p>Add to the current addition of information technology. In addition, we help them to keep pace.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBest;