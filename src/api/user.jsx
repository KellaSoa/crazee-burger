import {doc, getDoc,setDoc} from "firebase/firestore"
//import { db } from "./firebase-config"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser);
    const docSnapShot = await getDoc(docRef);
    
    if (docSnapShot.exists()) {
        const userReceived = docSnapShot.data();
        return userReceived
    } else {
    console.log("No such document!");
    }
    
};


export const createUser = async (idUser) => { 
    const docRef = doc(db,"users",idUser)

    const newUser = {
        username: idUser,
        menu:fakeMenu.LARGE
    }
    await setDoc(docRef,newUser)
    return newUser
}

export const authenticateUser = async (idUser) => { 
    const existUser = await getUser(idUser)
    if(!existUser){
        return await createUser(idUser)
    }
    return existUser
}