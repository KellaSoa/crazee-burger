import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import { TiDelete } from "react-icons/ti";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

const IMAGE_DEFAULT = "/images/coming-soon.png";


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
    titleEditRef
  } = useContext(OrderContext);

  const handleClick = async(idProductSelected) => {
    if(!isModeAdmin) return
    await setIsCollapsed(false)
    await setTabCurrentName("edit")
    await setTabActive("edit");
    //find product selected
    const productClicked = menu.find(
      (product) => product.id === idProductSelected
    );
    await setProductSelected(productClicked);
    //onFucus in titleForm
    titleEditRef.current.focus()
  };
  const checkProductSelected = (id, productSelected) => {
    return id === productSelected.id;
  };

  const handleCardDelete = (event,idProductDelete) => { 
    event.stopPropagation() 
    handleDelete(idProductDelete)
    idProductDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
    titleEditRef.current.focus()
  }


  //render
  if (menu.length === 0) {
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
            imageSource={imageSource ? imageSource : IMAGE_DEFAULT}
            leftDescription={formatPrice(price)}
            onDelete={(event) => handleCardDelete(event,id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
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
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3,1fr);
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
