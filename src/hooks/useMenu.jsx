import { useState } from "react";
import { deepClone } from "../utils/collection";
import { fakeMenu } from "../fakeData/fakeMenu";

export const useMenu = () => { 

    const [menu, setMenu] = useState(fakeMenu.LARGE);

    //comportement
    const handleAdd = (newProduct) => {
        const menuCopy = deepClone(menu);
        const menuUpdate = [newProduct, ...menuCopy];
        setMenu(menuUpdate);
    };
    const handleDelete = (idProduct) => {
        //copy state
        const menuCopy = deepClone(menu);
        //update state
        const menuUpdated = menuCopy.filter((product) => product.id !== idProduct);
        setMenu(menuUpdated);
    };
    const handleReset = () => {
        setMenu(fakeMenu.LARGE);
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