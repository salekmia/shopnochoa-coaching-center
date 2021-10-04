import React from 'react';
import './ServicesItem.css';
const ServicesItem = (props) => {
    const {name, img, subject, teacher, seats, description} = props.item
    return (
        <div className="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p><strong>Total Seats: </strong>{seats}</p>
                    <p><strong>Teacher: </strong>{teacher}</p>
                    <p><strong>Subject: </strong>{subject}</p>
                    <p class="card-text lead"><strong>Description:</strong> {description}</p>
                </div>
            </div> 
        </div>
    );
};

export default ServicesItem;