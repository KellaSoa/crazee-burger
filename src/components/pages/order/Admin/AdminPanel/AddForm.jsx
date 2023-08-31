import React, { useContext, useState } from 'react'
import TextInput from '../../../../reusable-ui/TextInput'
import UrlInput from '../../../../reusable-ui/UrlInput'
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from '../../../../reusable-ui/Button';
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';


const EMPTY_PRODUCT ={
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  //state
  const {handleAdd} = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmit, setIsSubmit] = useState(false)

  //components
  const newProductAdd ={
    ...newProduct,//add new product in form after handleChange input
    id: crypto.randomUUID(),
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    //add dinamically name object with [name] ie {title: newValue,imageSource: newValue,price: newValue}
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


  //render
  return (
    <AddFormStyled action="action" onSubmit={handleSubmit}>
      <div className='image-preview'>
        { newProductAdd.imageSource ? <img src={newProductAdd.imageSource} alt={newProductAdd.title} /> : <div> Aucune image</div>}
      </div>
      <div className='input-fields'>
        <TextInput
          value={newProduct.title}
          onChange={handleChange}
          placeholder={"Nom du produit (ex: Super Burger) "}
          Icon={<FaHamburger className="icon" />}
          name="title"
          version="minimalist"
        />
        <TextInput
          value={newProduct.imageSource}
          onChange={handleChange}
          placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png) "}
          Icon={<BsFillCameraFill className="icon" />}
          name="imageSource"
          version="minimalist"
        />
        <TextInput
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
          name="price"
          version="minimalist"
        />
          
      </div>
      <div className="submit-button">
        <Button version= "success"
          label={"Ajouter un nouveau produit au menu"}          
        />
        {isSubmit &&  (       
          <div className='submit-message'>
            <FiCheck/>
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4,1fr);
width: 70%;
height: 100%;
grid-column-gap: 20px;
grid-row-gap: 8px;

.image-preview{
  grid-area: 1 / 1 / 4 / 2;
  padding: 20px;
  border: 1px solid ${theme.colors.greyLight};
  border: ${theme.borderRadius.subtle};
  margin-right: 20px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  div{
    margin:0px auto;
  }
}
.input-fields{
  grid-area: 1 / 2 / 4 / -2 ;  
  display: grid;
  grid-row-gap: 8px;
}
.submit-button{
  grid-area: 4 / 2 / 5 / -1;
  display:flex;
  align-items: center;
}
`;
