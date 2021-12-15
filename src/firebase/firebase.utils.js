import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBcbsMQWnkScNMr_jEl82S_AzEnoxEN5gk",
    authDomain: "linsky-clo-db.firebaseapp.com",
    projectId: "linsky-clo-db",
    storageBucket: "linsky-clo-db.appspot.com",
    messagingSenderId: "888646470835",
    appId: "1:888646470835:web:e1a59a9e7fac36299874c6",
    measurementId: "G-CW79SZK728"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
