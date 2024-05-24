import React from 'react'
import styled from 'styled-components';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import Select from '../../../../reusable-ui/Select';
import { getInputTextsConfig, getSelectsConfig } from './inputConfig';



const Form = React.forwardRef(
  ({product,onSubmit,onChange,onFocus,onBlur,children},ref) => {

    const inputTexts = getInputTextsConfig(product)
    const selects = getSelectsConfig(product)

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title}/>
        <div className='input-fields'>
          {inputTexts.map((input)=>( 
            <TextInput
            key={input.id}
            {...input}
            onChange={onChange}
            version="minimalist"
            ref={ref && input.name === "title"  ? ref : null}
            onFocus= {onFocus }
            onBlur={onBlur}
            />
          ))}
  
          {selects.map((select)=> (
            <Select {...select} key={select.id} onChange={onChange}  onFocus= {onFocus }
            onBlur={onBlur}/>
          ))}
          {/*<Select name="isAvalaible" className="is-avalaible" id="3" options={isAvalaibleOptions}/> */}
 
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
          {children}
        </div>
      </FormStyled>
    )
  })

export default Form 
  const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4,1fr);
  width: 80%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  
  
  .input-fields{
    grid-area: 1 / 2 / -2 / 3 ;  
    display: grid;
    grid-template-columns:repeat(3fr 1fr);
    grid-template-rows: repeat(3,1fr);
    grid-row-gap: 8px;
    grid-gap: 10px;

    .title{
      grid-area: 1/1/2/4;
    }
    .imagesource{
      grid-area: 2/1/3/4;
    }
    .price{
      grid-area: 3/1/4/2;
      gap: 2px;
    }
    /*.is-avalaible{
      grid-area: 3/2/3/3;
      gap: 2px;
    }
    .is-publicised{
      grid-area: 3/3/4/4;
    }*/

  }
  .contain-button{
    grid-area: 4 / 2 / 5 / -1;
    display:flex;
    align-items: center;
  }
  
`;
