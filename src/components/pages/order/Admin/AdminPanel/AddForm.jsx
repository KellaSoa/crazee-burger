import React, { useContext, useState } from 'react'
import TextInput from '../../../../reusable-ui/TextInput'
import UrlInput from '../../../../reusable-ui/UrlInput'
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from '../../../../reusable-ui/PrimaryButton';
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../context/OrderContext';

export default function AddForm() {

    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState("");

    const {handleAdd} = useContext(OrderContext)

    const newProduct ={
      id: 2,
      title: "Burger 2",
      imageSource: imageSource,
      price: price
    }

    const handeChange = (event) => {
        setTitle(event.target.value);
        setImageSource(event.target.value);
        setPriceName(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      handleAdd(newProduct)
    }

  return (
    <AddFormStyled action="action" onSubmit={handleSubmit}>
      <div className='image-preview'><img src="" alt="Aucune image" /></div>
      <div className='input-fields'>
        <TextInput
          value={title}
          onChange={handeChange}
          placeholder={"Nom du produit (ex: Super Burger) "}
          Icon={<FaHamburger className="icon" />}
          className = "textInputAdd" 
          name=""
        />
        <UrlInput
          value={imageSource}
          onChange={handeChange}
          placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png) "}
          Icon={<BsFillCameraFill className="icon" />}
          className = "textInputAdd"
        />
        <TextInput
          value={price}
          onChange={handeChange}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
          className = "textInputAdd"
        />
          
      </div>
      <PrimaryButton
        label={"Ajouter un nouveau produit au menu"}
        className="submit-button"
      />
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4,1fr);
width: 70%;
height: 100%;

.image-preview{
  grid-area: 1 / 1 / 4 / 2;
}
.input-fields{
  grid-area: 1 / 2 / 4 / -2 ;
  
  display: grid;
}
.submit-button{
  grid-area: 4 / 2 / 5 / -1;
  width: 75%;
  background-color: ${theme.colors.green};
  padding: 10px 20px;
  border: 1px solid ${theme.colors.green};
}

.textInputAdd{
    background-color: ${theme.colors.greyLight};    
    padding: 5px 20px;
    margin-top:0px;
    margin-bottom: 20px;
    border-radius: 0px;
}
.textInputAdd:hover:not(:disabled){
    border: none;
}
.textInputAdd input{
    background-color: ${theme.colors.greyLight};
}

.add-product:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    transition: all 200ms ease-out;
}
.image-preview{
    padding: 20px;
    border: 1px solid ${theme.colors.greyLight};
    border: ${theme.borderRadius.subtle};
    margin-right: 20px;

    img{
    margin:0px auto;
    }
}

`;
