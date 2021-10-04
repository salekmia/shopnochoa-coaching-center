import React from 'react';
import './Item.css';
const Item = (props) => {
    const {name, img, subject, teacher, seats, description, fee} = props.item
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><strong>Total Seats: </strong>{seats}</p>
                    <p><strong>Monthly fee: </strong>{fee}TK</p>
                    <p><strong>Teacher: </strong>{teacher}</p>
                    <p><strong>Subject: </strong>{subject}</p>
                    <p className="card-text lead"><strong>Description:</strong> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;