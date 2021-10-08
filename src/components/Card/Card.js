import React, {useState} from 'react';
import ButtonPrimary from '../Buttons/Buttons'
import "./Card.css"

const Card = ({ image , name , canti}) => {

    const handleOnClick = () => {
        alert(`le diste clii`);
    };

    const [counter, setCounter]= useState(0);

    const handleIncrement = () => {       
            setCounter(counter + 1)
    }

    const handleDecrement = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
       
    }


    return (
        <div className="card-container">
            <figure className="caja-imagen-landing">
                <img src= {image} alt="" />
            </figure>
            <div className="card-content">
                <span className="card-span">{name}</span>
            </div>
            
            <div className="card-button-container">
                <ButtonPrimary button_string="Agregar al carrito" className="boton-estilo"  onClick={handleOnClick}/>
            </div>
            <div className="caja-cantidad">
                <button className="mas" onClick={handleIncrement}>+</button>
                <h2>{counter}</h2>
                <button className="menos" onClick={handleDecrement}>-</button>
            </div>
        </div>
    )
}

export default Card
