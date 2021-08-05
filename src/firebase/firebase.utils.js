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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;