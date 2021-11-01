import React,{ useState , useEffect} from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'
import CardProduct from '../CardProduct/CardProduct';
import "./ProductDetail.css"

const ProductDetail = ({match}) => {
   console.log(`MATCH` , match)

   let productID = match.params.id;
    const [productMatch, setProductMatch] = useState ([]);

    useEffect(()=>{
        
        axios(`https://fakestoreapi.com/products/${productID}`)
        .then((response)=> setProductMatch(response.data))
        
         }, [productID]);

         console.log(productMatch)
         const { id, image, category, price, title }= productMatch;
         
    return (
            <div className="estructura-deproductos contenedor-cardlist">        
            <h1>productos</h1>
        
                   
                
                <Card className="card-container" key={id}>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{category}</span>
                        </Card.Meta>
                        <Card.Description>
                            {price}
                        </Card.Description>
                        </Card.Content>

                    </Card>
             
               

        </div>
        )

}

export default ProductDetail
