import React, {useState, useEffect} from 'react'
import CardProduct from '../CardProduct/CardProduct'
import "./CardList.css"



const CardList = () => {

    const [ products, setProducts] = useState ([]);

    console.log(products)

    useEffect(() => {
        /*fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setProducts(json))*/

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])


    return (
        <div>
            <h2>Otros productos</h2>


            <div className="estructura-deproductos contenedor-cardlist">
                {products.map((product)=>{
                    return (
                        <div className="produc">
                            <CardProduct data={product}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default CardList
