import React from 'react'
import "./Landing.css"
import {data} from "../../assets/db/data.json"
import Card from '../Card/Card'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <div className="landing">
            <h2>Nuestros productos</h2>
            <div className="Container landing-container ">
                {data.map((data)=>(

                    <div key={data.id}>

                    <Link to={`/detailproduct/${data.id}`}> 
                      <Card  image ={data.image} name={data.name} key={data.id} canti={data.canti}/>
                    </Link>
                    </div>

                ))}
                
            </div>
        </div>
    )
}

export default Landing
