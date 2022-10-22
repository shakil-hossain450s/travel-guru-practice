// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGtA-xYhpl9VtjOKmnL57Tsqa3X4FLdA8",
    authDomain: "travel-guru-client-3fce4.firebaseapp.com",
    projectId: "travel-guru-client-3fce4",
    storageBucket: "travel-guru-client-3fce4.appspot.com",
    messagingSenderId: "424370173079",
    appId: "1:424370173079:web:cf00d3cd726a1ef329a5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;