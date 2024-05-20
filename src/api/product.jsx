import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (idUser,menuUpdated) => { 
    const cachette = doc(db,"users",idUser)
    const nourriture ={
        username: idUser,
        menu: menuUpdated
    }
    setDoc(cachette,nourriture)
 }