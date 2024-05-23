import React, { useContext } from 'react'
import EmptyBasket from './EmptyBasket'
import BasketProducts from './BasketProducts'
import { isEmpty } from '../../../../../utils/collection'
import styled from 'styled-components'
import OrderContext from '../../../../../context/OrderContext'

export default function Body() {
  const { basket, menu } = useContext(OrderContext);

  return (
    <>
        {isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined} /> : <BasketProducts />}
    </>
  )
}

const BodyStyled = styled.div`
  
`;
