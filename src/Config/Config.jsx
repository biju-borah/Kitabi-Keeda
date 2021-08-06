import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB_jDbDh6-_mk_X7FDKdmk4RuDgEkLlCCU",
    authDomain: "book-fb96b.firebaseapp.com",
    projectId: "book-fb96b",
    storageBucket: "book-fb96b.appspot.com",
    messagingSenderId: "49549129195",
    appId: "1:49549129195:web:884d97cbc5810dc36fd5ae",
    measurementId: "G-WCHYT2BCJ2"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }