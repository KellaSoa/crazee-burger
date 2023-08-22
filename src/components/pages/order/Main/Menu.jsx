import { styled } from "styled-components";
import Product from "./Product";

export default function Menu() {
  return (
    <MenuStyled>
      <Product />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;
