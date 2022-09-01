import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBQdWkGQFqw1F3ezohDp1zdKEHS3B10wAE",
    authDomain: "disneyplus-clone-676f3.firebaseapp.com",
    projectId: "disneyplus-clone-676f3",
    storageBucket: "disneyplus-clone-676f3.appspot.com",
    messagingSenderId: "539790089593",
    appId: "1:539790089593:web:62c8a5f72ad07a0dc163a8",
    measurementId: "G-23R1NJC47M"
  };
  
// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore(); // setup database in firebase app
const auth = firebase.auth(); // add authorization
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp); // store files, images, videos

export{auth, provider, storage}
export default db;

