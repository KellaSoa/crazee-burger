import { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import { TiDelete } from "react-icons/ti";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

export default function Menu() {
  //state
  const [isSelected, setIsSelected] = useState(false);
  const {
    menu,
    isModeAdmin,
    handleDelete,
    handleReset,
    setProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleClick = (idProductSelected) => {
    //find product selected
    const productClicked = menu.find(
      (product) => product.id === idProductSelected
    );
    setProductSelected(productClicked);
    setIsSelected(idProductSelected === productSelected.id);
  };
  const checkProductSelected = (id, productSelected) => {
    return id === productSelected.id;
  };

  //render
  if (menu.length === 0) {
    return (
      <>
        {isModeAdmin ? (
          <EmptyMenuAdmin onReset={handleReset} />
        ) : (
          <EmptyMenuClient />
        )}
      </>
    );
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
            onClick={() => handleClick(id)}
            version={isModeAdmin ? "admin" : "client"}
            isSelected={checkProductSelected(id, productSelected)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;

  .icon {
    width: 100%;
    height: 100%;
  }
  .is-clicked {
    background-color: ${theme.colors.primary};
  }
`;
