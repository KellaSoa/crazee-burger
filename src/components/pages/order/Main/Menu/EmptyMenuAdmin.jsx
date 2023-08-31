import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({onReset}) {
  return (
    <EmptyMenuAdminStyled>
        <span>Pas de produit</span>
        <button onClick={onReset}>Générer de nouveaux les produits</button>
    </EmptyMenuAdminStyled>
  )
}

const EmptyMenuAdminStyled = styled.div`
margin: 0 auto;
font-family: 'Courier New', Courier, monospace;
font-size: ${theme.fonts.size.P0};
color: ${theme.colors.greyLight};
button{
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
}
  
`;
