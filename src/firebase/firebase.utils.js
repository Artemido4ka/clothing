import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAg2wajZnONk1beuhPZ7leh9EsQqy68s2E",
    authDomain: "crwn-db-614d1.firebaseapp.com",
    projectId: "crwn-db-614d1",
    storageBucket: "crwn-db-614d1.appspot.com",
    messagingSenderId: "891465720644",
    appId: "1:891465720644:web:ab684cd73a6ea5ac442d11",
    measurementId: "G-RPM9S3V1NW"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompts: 'select_account'});
export const signInWIthGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;