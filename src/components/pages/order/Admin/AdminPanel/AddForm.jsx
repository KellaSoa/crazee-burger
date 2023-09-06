import React, { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../enums/product';
import Form from './Form';
import ButtonMessage from './ButtonMessage';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage';


export default function AddForm() {
  //state
  const {handleAdd,newProduct,setNewProduct} = useContext(OrderContext)
  const {isSubmit, displaySuccessMessage} = useSuccessMessage()
  
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

  
 
  //render
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <ButtonMessage isSubmit={isSubmit}/>
    </Form>
  )
}

