import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOBFNr572qHREyxaO_x6xM6YhLTyopXWM",
  authDomain: "axiospost-529cc.firebaseapp.com",
  projectId: "axiospost-529cc",
  storageBucket: "axiospost-529cc.appspot.com",
  messagingSenderId: "862873255172",
  appId: "1:862873255172:web:5c0c1073115c58f3fba451",
  measurementId: "G-PTNMGHB3FE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
