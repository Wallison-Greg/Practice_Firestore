import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBhhk9ZoU-igGiXBGJSRbO-4OdRa6Fd6w",
  authDomain: "pratica-38525.firebaseapp.com",
  projectId: "pratica-38525",
  storageBucket: "pratica-38525.appspot.com",
  messagingSenderId: "215585651174",
  appId: "1:215585651174:web:17d2d1853f5b61a647be27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}