import { createContext } from "react";

export default createContext({
    isModeAdmin:false,
    setIsModeAdmin: ()=>{},

    isCollapsed:false,
    setIsCollapsed: ()=>{},
    tabActive:"",
    setTabActive: ()=>{},
    tabCurrentName:"",
    setTabCurrentName: () =>{},

    menu:[],
    handleAdd: () => {},
    handleDelete: () => {},
    handleReset: () => {}
});