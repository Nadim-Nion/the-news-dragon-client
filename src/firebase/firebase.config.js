// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmiALOq6dOGW8-37JIqVXtJ0eRWkRmxpw",
    authDomain: "the-news-dragon-client-f66c9.firebaseapp.com",
    projectId: "the-news-dragon-client-f66c9",
    storageBucket: "the-news-dragon-client-f66c9.appspot.com",
    messagingSenderId: "518166022357",
    appId: "1:518166022357:web:5e240f9d7041cc9eb13a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;