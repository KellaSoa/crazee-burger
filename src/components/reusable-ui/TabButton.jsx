import { styled } from "styled-components";
import { theme } from "../../theme";

export default function TabButton({ id,label, Icon,onClick }) {
  
  return (
    <TabButtonStyled onClick={onClick} id={id}>
      {Icon && Icon}
      <span>{label}</span>
    </TabButtonStyled>
  );
}

const TabButtonStyled = styled.button`
  box-shadow:${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;
  border:1px solid ${theme.colors.greyLight};
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  border: none; 
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  height: 43px;
  padding: 0px 22px;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greyDark};
  font-family: initial;
  position: relative;
  left: 50px;
  top: 1px;
  
  &:active {
    color: white;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white}
  }

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }
  span {
    padding: 9px 9px;
  }
`;
