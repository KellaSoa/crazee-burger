import React, { useContext, useState } from 'react';
import OrderContext from '../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../enums/product';
import Form from './Form';

export default function AddForm() {
  //state
  const {handleAdd,newProduct,setNewProduct} = useContext(OrderContext)
  const [isSubmit, setIsSubmit] = useState(false)

  
  const newProductAdd ={
    ...newProduct,//add new product in form after handleChange input
    id: crypto.randomUUID(),
  }
//components
  const handleChange = (event) => {
    const {name, value} = event.target
    //add dinamically name object with [name] ie {title: newValue,imageSource: newValue,price: newValue}
    //get newProduct object and add newValue by form   
    setNewProduct({...newProduct, [name]: value}) 
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    handleAdd(newProductAdd)
    setNewProduct(EMPTY_PRODUCT )

    displaySuccessMessage()
  }

  const displaySuccessMessage = () =>{
    setIsSubmit(true)
    setTimeout(()=>{
      setIsSubmit(false)
    },2000)
  }
 
  //render
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange} isSubmit={isSubmit}/>
  )
}

