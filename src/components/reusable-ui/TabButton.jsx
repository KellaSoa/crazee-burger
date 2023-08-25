import { styled } from "styled-components";
import { theme } from "../../theme";
import { useContext } from "react";
import IsActiveContext from "../context/IsActiveTabContext";

export default function TabButton({ id,label, Icon,isActive,onClick }) {
  const infoActive = useContext(IsActiveContext);
  console.log(infoActive);
  return (
    <TabButtonStyled className={` ${isActive ? "activeBtn" : "inActiveBtn"}`} onClick={onClick} id={id}>
      {Icon && Icon}
      <span>{label}</span>
    </TabButtonStyled>
  );
}

const TabButtonStyled = styled.button`
  font-family: initial;
  color: ${theme.colors.greyDark};
  background-color: ${theme.colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  border: none; 
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  .activeBtn {
  }
  &:active {
    color: white;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white}
  }

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.greyLight};
    border: 2px solid ${theme.colors.greyLight};
  }
  span {
    padding: 9px 9px;
  }
`;
