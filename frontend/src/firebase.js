import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABLOA42GvyloX7v-17NsITgW-ozKiVkvk",
    authDomain: "clone-fec19.firebaseapp.com",
    projectId: "clone-fec19",
    storageBucket: "clone-fec19.appspot.com",
    messagingSenderId: "836614329622",
    appId: "1:836614329622:web:e12db4f37fb801f77f6c37"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};