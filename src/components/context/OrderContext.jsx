import { createContext } from "react";

export default createContext({
    isCollapsed:false,
    setIsCollapsed: ()=>{},
    isModeAdmin:false,
    setIsModeAdmin: ()=>{},
    tabActive:"",
    setTabActive: ()=>{},
    tabCurrentName:"",
    setTabCurrentName: ()=>{},
});