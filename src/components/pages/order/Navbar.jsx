import Logo from "../../reusable-ui/Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRigthSide from "./NavbarRigthSide";
import { refreshPage } from "../../../utils/window";

export default function Navbar({ userName }) {
  //state
  return (
    <NavStyles>
      <Logo className="logo-order-page" onClick={refreshPage} />
      <NavbarRigthSide username={userName} />
    </NavStyles>
  );
}

const NavStyles = styled.nav`
  background-color: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;

  .logo-order-page {
    cursor: pointer;
  }
`;
