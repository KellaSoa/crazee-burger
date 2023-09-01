import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import HintMessage from './HintMessage';
import OrderContext from '../../../../context/OrderContext';

export default function EditForm() {

  const {productSelected,setProductSelected} = useContext(OrderContext)
  console.log(productSelected)
  return (
    <EditFormStyled>
      <HintMessage/>
      { productSelected &&  productSelected.title}
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`

`;