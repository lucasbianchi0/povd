import React,{ useState , useEffect} from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'
import CardProduct from '../CardProduct/CardProduct';
import "./ProductDetail.css"

const ProductDetail = ({match}) => {
   console.log(`MATCH` , match)

   let productID = match.params.id;
    const [productMatch, setMatch] = useState ([]);

    useEffect(()=>{
        
        axios(`https://fakestoreapi.com/products/${productID}`).then((json)=>
        setMatch(json.data)
        )
         }, [productID]);
    /*
         fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setRproducts(json))
    }, [productId])
      */  

         console.log(productMatch)
    return (
            <div className="estructura-deproductos contenedor-cardlist">        
            <h1>hola</h1>
             
             { productMatch.map((data) => {
                    return (
            
                
                <Card className="card-container" key={data.id}>
                        <Image src={data.image} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{data.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{data.category}</span>
                        </Card.Meta>
                        <Card.Description>
                            {data.price}
                        </Card.Description>
                        </Card.Content>

                    </Card>
                   
               
                    )
                })}                    
            
        </div>
    )
}

export default ProductDetail
