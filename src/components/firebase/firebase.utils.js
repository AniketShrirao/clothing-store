import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5-xmXzS8_anCcvazRIBoRC--qfHgXvdI",
    authDomain: "clothing-store-db-6f680.firebaseapp.com",
    projectId: "clothing-store-db-6f680",
    storageBucket: "clothing-store-db-6f680.appspot.com",
    messagingSenderId: "572103248956",
    appId: "1:572103248956:web:1c9272b84b5a41bbba0739",
    measurementId: "G-79RBPK8YSY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;