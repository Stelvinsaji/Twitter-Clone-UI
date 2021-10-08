import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATXOnn5oIIuuCM9m3uVsv9CidsHpBp59Y",
    authDomain: "twitter-clone-7e1f5.firebaseapp.com",
    projectId: "twitter-clone-7e1f5",
    storageBucket: "twitter-clone-7e1f5.appspot.com",
    messagingSenderId: "1009666402850",
    appId: "1:1009666402850:web:b9e528453ab55b6823787b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;