import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/*const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};*/
const firebaseConfig = {
  apiKey: "AIzaSyB2SdKfo0or09Z9W8ZMcD4nafbb6WZVpYI",
  authDomain: "app-crazee-burger.firebaseapp.com",
  projectId: "app-crazee-burger",
  storageBucket: "app-crazee-burger.appspot.com",
  messagingSenderId: "683526187850",
  appId: "1:683526187850:web:14c05b89113eb169c86fb3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
