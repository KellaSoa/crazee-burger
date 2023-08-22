import { styled } from "styled-components";
import Card from "./Card";

export default function Menu() {
  return (
    <MenuStyled>
      <Card />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;
