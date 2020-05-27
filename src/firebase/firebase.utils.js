import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcM6nHc6VvCTOlkjN7fGcIykZP3L_LJF4",
    authDomain: "crwn-store-8480c.firebaseapp.com",
    databaseURL: "https://crwn-store-8480c.firebaseio.com",
    projectId: "crwn-store-8480c",
    storageBucket: "crwn-store-8480c.appspot.com",
    messagingSenderId: "665010364904",
    appId: "1:665010364904:web:9c5a7c0891510cb0f5845d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
