import { styled } from "styled-components";
import Profile from "./Profile";

export default function NavbarRigthSide({ username }) {
  return (
    <NavbarRigthSideStyled>
      <div className="admin-btn">admin btn</div>
      <Profile username={username} />
    </NavbarRigthSideStyled>
  );
}

const NavbarRigthSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`;
