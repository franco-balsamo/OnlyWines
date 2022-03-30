import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo4I9tkSgikhwuZKX0MctONvaUhCMg04o",
  authDomain: "onlywines-francobalsamo.firebaseapp.com",
  projectId: "onlywines-francobalsamo",
  storageBucket: "onlywines-francobalsamo.appspot.com",
  messagingSenderId: "373584755246",
  appId: "1:373584755246:web:639335cb1ef36bb1cfbdbf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
