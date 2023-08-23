import { styled } from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
//import {FaUserSecret} from "react-icons/fa"

export default function NavbarRigthSide() {   

  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const displayNotification = () =>{
      if(!isModeAdmin){
      toast.info("Mode admin activé", {
      //icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      }
      setIsModeAdmin(!isModeAdmin)
  }

  return ( 
    <NavbarRigthSideStyled>
      <ToggleButton 
        labelIfChecked = "Désactiver le mode admin"
        labelIfUnchecked = "Activer le mode admin"
        onToggle={displayNotification}
      />
      <ToastContainer/>
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
