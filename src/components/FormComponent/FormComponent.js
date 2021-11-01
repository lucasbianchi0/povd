import React, {useState} from 'react';

import TextField from '@mui/material/TextField';
import "./FormComponent.css"
import axios from 'axios';

import ProductCard from '../ProductCard/ProductCard';



 
const FormComponent = () => {
  const [inputValue, setInputValue] = useState(``);
  const [productData, setProductData]= useState([])

  const onChange =(e) =>{
    setInputValue(e.target.value)
  }
  
  const onSubmit = (e) =>{
    e.preventDefault();
  
    const productInput = inputValue.toLocaleLowerCase().replace(/ /g, ``);
    console.log(productInput)

    if(productInput){
      axios(`https://fakestoreapi.com/products/${productInput}`).then(res => console.log(res.data)
      )
    }
  }


  return (
    <>
        <form onSubmit={onSubmit}>
          
          <div className="Form-container">
              <TextField
              title="outlined-basic"
              label="Buscar usuario" 
              variant="outlined"
              onChange ={onChange}
              value= {inputValue} />
              <button>clickea </button>
          </div>
          
        </form>
      <ProductCard productData={productData}/>
    </>
  );
}

export default FormComponent;