import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCotsHWQ48x4qkqB6uAv-r4yktuhz5LgPU",
  authDomain: "fir-authentication-ca637.firebaseapp.com",
  databaseURL: "https://fir-authentication-ca637-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-authentication-ca637",
  storageBucket: "fir-authentication-ca637.appspot.com",
  messagingSenderId: "591229707599",
  appId: "1:591229707599:web:4163d0bbdbee6b241b913a",
  measurementId: "G-WW0FXJSWBR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
      
export const auth = getAuth();