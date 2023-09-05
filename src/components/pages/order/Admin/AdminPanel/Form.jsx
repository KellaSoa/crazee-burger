import React from 'react'
import styled from 'styled-components';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import { getInputTextsConfig } from './getInputTextsConfig';
import Button from '../../../../reusable-ui/Button';
import SubmitMessage from './SubmitMessage';

export default function Form({onSubmit,onChange,product,isSubmit}) {

    const inputTexts = getInputTextsConfig(product)

    return (
        <FormStyled onSubmit={onSubmit}>
          <ImagePreview imageSource={product.imageSource} title={product.title}/>
          <div className='input-fields'>
            {inputTexts.map((input)=>{
              return <TextInput
              key={input.id}
              {...input}
              onChange={onChange}
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
        </FormStyled>
      )
    }
    
    const FormStyled = styled.form`
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
