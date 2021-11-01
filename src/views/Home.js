import React from 'react'
import Portada from '../components/Portada/Portada'
import Pie from '../components/PiePagina/Pie'
import FormComponent from "../components/FormComponent/FormComponent"


const Home = () => {
    return (
        <div>
            <Portada/>
            <Pie/>
            <FormComponent/>
   
        </div>
    )
}

export default Home
