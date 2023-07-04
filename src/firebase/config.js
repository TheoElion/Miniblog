import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGs6lXce8u-L42r4Ytc6RrdrQHh_7qaTA",
  authDomain: "mini-blog-31a70.firebaseapp.com",
  projectId: "mini-blog-31a70",
  storageBucket: "mini-blog-31a70.appspot.com",
  messagingSenderId: "678799827859",
  appId: "1:678799827859:web:6b0cdf1fb13c2d79bbbe66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }