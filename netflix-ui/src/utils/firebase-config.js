import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB8EY1-X6MmopTC-eMhZiyj3DxeUkBU59g",
    authDomain: "netflix-clone-app-2906d.firebaseapp.com",
    projectId: "netflix-clone-app-2906d",
    storageBucket: "netflix-clone-app-2906d.appspot.com",
    messagingSenderId: "864093397072",
    appId: "1:864093397072:web:1d53a3998a16d125ad3155",
    measurementId: "G-163H5PDBZY"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
