
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAHl2LVyjLhnmaFh3BSjHdgOvqH8DP1AHA",
    authDomain: "fir-crud-2b6a1.firebaseapp.com",
    projectId: "fir-crud-2b6a1",
    storageBucket: "fir-crud-2b6a1.appspot.com",
    messagingSenderId: "428612632214",
    appId: "1:428612632214:web:7fe33b84a7efc872124cb7"
  };

  const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app)
 export const db= getFirestore(app)
 export default (app)