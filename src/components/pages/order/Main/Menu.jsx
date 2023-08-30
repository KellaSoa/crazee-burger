import { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import { formatPrice } from "../../../../utils/maths"
import Card from "../../../reusable-ui/Card"
import OrderContext from "../../../context/OrderContext"
import { TiDelete } from "react-icons/ti";

export default function Menu() {
  const {menu,isModeAdmin} = useContext(OrderContext)

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
