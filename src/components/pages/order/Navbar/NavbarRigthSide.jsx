import { styled } from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRigthSide() {
  return (
    <NavbarRigthSideStyled>
      <ToggleButton 
        labelIfChecked = "Désactiver le mode admin"
        labelIfUnchecked = "Activer le mode admin"
      />
      <Profile />
    </NavbarRigthSideStyled>
  );
}

const NavbarRigthSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`;
