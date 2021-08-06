import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBngtb7K7z9S0EBMvlZYBccsKHc-xUmUi8",
    authDomain: "reifen-999bb.firebaseapp.com",
    projectId: "reifen-999bb",
    storageBucket: "reifen-999bb.appspot.com",
    messagingSenderId: "769279778744",
    appId: "1:769279778744:web:fb5114fd059f945fb2f94d",
    measurementId: "G-D5EV8PBBV9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();