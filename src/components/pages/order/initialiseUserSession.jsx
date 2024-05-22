import { useEffect } from "react"
import { getMenu } from "../../../api/product"
import { getLocalStorage } from "../../../utils/window"

const initialiseMenu = async(username,setMenu) => { 
    const menuReceived = await getMenu(username)
    setMenu(menuReceived)
}
const initialiseBasket = (username,setBasket) => { 
    const basketReceived =  getLocalStorage(username) //localstorage synchron doesn't need await
    if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async(username,setMenu,setBasket)=>{
    await initialiseMenu(username,setMenu) // because need price,image from menu so we need to await it 
    initialiseBasket(username,setBasket) 
}   
    