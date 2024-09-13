import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (idUser, menuUpdated) => {
  const cachette = doc(db, "users", idUser);
  const nourriture = {
    username: idUser,
    menu: menuUpdated,
  };
  setDoc(cachette, nourriture);
};

export const getMenu = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapShot = await getDoc(docRef);
  console.log("docSnapShot", docSnapShot);
  if (docSnapShot.exists()) {
    const { menu } = docSnapShot.data(); //I wanna only the value of menu
    return menu;
  }
};
