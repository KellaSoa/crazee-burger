import React, { useContext } from 'react'
import { styled } from 'styled-components';
import HintMessage from './HintMessage';
import OrderContext from '../../../../context/OrderContext';
import ImagePreview from './ImagePreview';
import TextInput from '../../../../reusable-ui/TextInput';
import { getInputTextsConfig } from './getInputTextsConfig';

export default function EditForm() {

  const {productSelected,setProductSelected,handleEdit} = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected)

  //components
  const handleChange = (event) => {
    const {name, value} = event.target
    //add dinamically name object with [name] ie {title: newValue,imageSource: newValue,price: newValue}
    //get newProduct object and add newValue by form   
    setProductSelected({...productSelected, [name]: value}) 
    handleEdit(productSelected)
  };

  return (
    <EditFormStyled>
      <HintMessage/>
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
      <div className='input-fields'>
        {inputTexts.map((input)=>{
          return <TextInput
          key={input.id}
          {...input}
          onChange={handleChange}
          version="minimalist"
          />
        })}                  
      </div>
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
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
`;