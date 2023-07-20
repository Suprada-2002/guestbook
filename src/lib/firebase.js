import { initializeApp , getApps, getApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { browser } from "$app/environment";

const firebaseConfig = {
  apiKey: "AIzaSyAk75mry5zNB1BtwDhGd78DEnjgo0111F4",
  authDomain: "guestbook-28db0.firebaseapp.com",
  projectId: "guestbook-28db0",
  storageBucket: "guestbook-28db0.appspot.com",
  messagingSenderId: "742982306571",
  appId: "1:742982306571:web:5780a1d0516ae51ad9700e"
}


let app = initializeApp(firebaseConfig);
/*
if(browser){
if(getApps().length === 0){
  app = initializeApp(firebaseConfig);
}else {
  getApp();
}
}
*/

export const db = getFirestore(app);