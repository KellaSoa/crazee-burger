import React, { useContext, useState } from 'react'
import TextInput from '../../../../reusable-ui/TextInput'
import Button from '../../../../reusable-ui/Button';
import { styled } from 'styled-components';
import OrderContext from '../../../../context/OrderContext';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './getInputTextsConfig';

const EMPTY_PRODUCT ={
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
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
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const displaySuccessMessage = () =>{
    setIsSubmit(true)
    setTimeout(()=>{
      setIsSubmit(false)
    },2000)
  }

  const inputTexts = getInputTextsConfig(newProduct)

  //render
  return (
    <AddFormStyled action="action" onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
      <div className='input-fields'>
        {inputTexts.map((input)=>{
          return <TextInput
          key={input.id}
          {...input}
          onChange={handleChange}
          version="minimalist"
          />
        })}
        {/* <TextInput
          value={newProduct.title}
          onChange={handleChange}
          placeholder={"Nom du produit (ex: Super Burger) "}
          Icon={<FaHamburger className="icon" />}
          name="title"
          version="minimalist"
        />
         */}
          
      </div>
      <div className="contain-button">
        <Button version= "success"
          label={"Ajouter un nouveau produit au menu"}          
        />
        {isSubmit &&  <SubmitMessage/>}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4,1fr);
//width: 70%;
height: 100%;
grid-column-gap: 20px;
grid-row-gap: 8px;

.input-fields{
  grid-area: 1 / 2 / 4 / -2 ;  
  display: grid;
  grid-row-gap: 8px;
}
.contain-button{
  grid-area: 4 / 2 / 5 / -1;
  display:flex;
  align-items: center;
}
`;
