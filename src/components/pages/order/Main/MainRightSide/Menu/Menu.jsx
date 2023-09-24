import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import { TiDelete } from "react-icons/ti";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
} from "../../../../../../enums/product";
import { findInArray, isEmpty } from "../../../../../../utils/collection";

export default function Menu() {
  //state
  const {
    menu,
    isModeAdmin,
    handleDelete,
    handleReset,
    setProductSelected,
    productSelected,
    setIsCollapsed,
    setTabCurrentName,
    setTabActive,
    titleEditRef,
    handleAddToBasket,
    handleDeleteProductBasket,
    handleProductSelected,
  } = useContext(OrderContext);

  const checkProductSelected = (id, productSelected) => {
    return id === productSelected.id;
  };

  const handleCardDelete = (event, idProductDelete) => {
    event.stopPropagation();
    handleDelete(idProductDelete);
    handleDeleteProductBasket(idProductDelete);
    idProductDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT);
  };

  const handleAdd = (event, idProductSelected) => {
    event.stopPropagation();

    handleAddToBasket(idProductSelected);
  };

  //render
  if (isEmpty(menu)) {
    return (
      <>
        {isModeAdmin ? (
          <EmptyMenuAdmin onClick={handleReset} />
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
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={isModeAdmin ? () => handleProductSelected(id) : null}
            isHoverable={isModeAdmin}
            isSelected={checkProductSelected(id, productSelected)}
            onAdd={(event) => handleAdd(event, id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
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
