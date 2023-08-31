import { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable-ui/Card"
import OrderContext from "../../../../context/OrderContext"
import { TiDelete } from "react-icons/ti";
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"

export default function Menu() {
  //state
  const {menu,isModeAdmin,handleDelete,handleReset} = useContext(OrderContext)


  //render
  if(menu.length === 0){
    return(
      <>
        {isModeAdmin ? <EmptyMenuAdmin onReset={handleReset}/> : <EmptyMenuClient/> }
      </>  
    )    
  }
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            Icon={isModeAdmin && <TiDelete className="icon" />}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            onDelete={() => handleDelete(id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;

  .icon{
    width: 100%;
    height: 100%;
  }
`