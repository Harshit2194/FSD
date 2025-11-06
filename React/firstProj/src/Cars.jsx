import React from "react";
import './Card.css';

function Cars(props){
    return(
        <div className="card">
            <img src={props.images} alt= {props.title} className="card-imgae" />
            <h3 className = "card-title">{props.title}</h3>
            <p className = "card-description">{<props.description}</p>
        </div>
    );
}
export default Card;