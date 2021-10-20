import React from 'react'
import "./Landing.css"
import {data} from "../../assets/db/data.json"
import Card from '../Card/Card'


const Landing = () => {
    return (
        <div className="landing">
            <h2>Nuestros productos</h2>
            <div className="Container landing-container ">
                {data.map((data)=>(
                    <Card  image ={data.image} name={data.name} key={data.id} canti={data.canti}/>
                    

                ))}
                
            </div>
        </div>
    )
}

export default Landing
