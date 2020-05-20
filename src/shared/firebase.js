import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDfev_GZTnvHiagf_hhFnssZCV9W0V5nfw",
    authDomain: "travis-meetnewfriends.firebaseapp.com",
    databaseURL: "https://travis-meetnewfriends.firebaseio.com",
    projectId: "travis-meetnewfriends",
    storageBucket: "travis-meetnewfriends.appspot.com",
    messagingSenderId: "34155896062",
    // appId: "1:34155896062:web:36d0f8b4d5ca94abc899af",
    // measurementId: "G-WC91Q8GSP0",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {firebase, storage};
