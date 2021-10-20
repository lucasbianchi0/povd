import React, {useState, useEffect} from 'react'
import { Spinner } from 'react-bootstrap';
import CardProduct from '../CardProduct/CardProduct';
import "./CardList.css";





const CardList = ({title}) => {

    const [ products, setProducts] = useState ([]);
    const [isLoading, setIsLoading]= useState(false)

    console.log(products)

    useEffect(() => {
        /*fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setProducts(json))*/
        setIsLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))

        setTimeout(()=>{ setIsLoading(false);}, 5000)
    }, [])


    return (
        <div>
            
            <h2 className="tituloo">{title}</h2>

            { isLoading ? <Spinner/> : <div className="estructura-deproductos contenedor-cardlist">
                {products.map((product)=>{
                    return (
                        <div className="produc">
                            <CardProduct data={product}/>
                        </div>
                    )
                })}
        </div>}
           
            
        </div>
    )
}

CardList.defaultProps ={
    title:`Productos proximamente`,
}

export default CardList
