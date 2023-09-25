import {doc, getDoc,setDoc} from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async(idUser) => { 

    // const docRef = doc(CHEMIN) path data in firebase store
    const docRef = doc(db,"users",idUser)
    const docSnapShot = await getDoc(docRef)
    if (docSnapShot.exists()){
        const userReceived = docSnapShot.data();
        console.log("userReceived: ", userReceived)
    }
}


export const createUser = (idUser) => { 
    const docRef = doc(db,"users",idUser)

    const newUser = {
        username: idUser,
        menu:fakeMenu.SMALL
    }
    setDoc(docRef,newUser)
}