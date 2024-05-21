import { useState } from "react";
import { deepClone } from "../utils/collection";
import { fakeMenu } from "../fakeData/fakeMenu";
import { syncBothMenus } from "../api/product";

export const useMenu = () => { 

    const [menu, setMenu] = useState();

    //comportement
    const handleAdd = (newProduct,userName) => {
        const menuCopy = deepClone(menu);
        const menuUpdated = [newProduct, ...menuCopy];
        setMenu(menuUpdated);
        syncBothMenus(userName,menuUpdated)
    };
    const handleDelete = (idProduct, userName) => {
        //copy state
        const menuCopy = deepClone(menu);
        //update state
        const menuUpdated = menuCopy.filter((product) => product.id !== idProduct);
        setMenu(menuUpdated);
        console.log(menuUpdated)
        syncBothMenus(userName,menuUpdated)
    };
    const handleReset = (userName) => {
        console.log('ici reset')
        setMenu(fakeMenu.LARGE);
        syncBothMenus(userName,fakeMenu.LARGE)
    };

    const handleEdit = (productBeingSelected) => {
        //copy state deep clone
        const menuCopy = deepClone(menu);
        //get index product to edit
        const indexToEditProduct = menu.findIndex(
        (product) => product.id === productBeingSelected.id
        );
        //update state
        menuCopy[indexToEditProduct] = productBeingSelected;
        setMenu(menuCopy);
    };
    return {menu,setMenu,handleAdd,handleDelete,handleEdit,handleReset}
 }