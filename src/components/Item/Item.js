import React from 'react';
import './Item.css';
const Item = (props) => {
    const {name, img, subject, teacher, seats, description} = props.item
    console.log(img)
    return (
        <div class="col">
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

export default Item;