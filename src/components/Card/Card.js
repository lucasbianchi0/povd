import React from 'react'
import ButtonPrimary from '../Buttons/Buttons'
import "./Card.css"

const Card = ({ image , name}) => {

    const handleOnClick = () => {
        alert(`le diste clii`)
    };

    return (
        <div className="card-container">
            <figure className="caja-imagen-landing">
                <img src= {image} alt="" />
            </figure>
            <div className="card-content">
                <span className="card-span">{name}</span>
            </div>
            <div className="card-button-container">
                <ButtonPrimary button_string="ver mas" onClick={handleOnClick}/>
            </div>
            
        </div>
    )
}

export default Card
