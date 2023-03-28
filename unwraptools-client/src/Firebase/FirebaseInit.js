import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfic";
  

 const initializeFirebase = ()=>{
    initializeApp(firebaseConfig);
}
export default initializeFirebase;