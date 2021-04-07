import firebase from 'firebase';
import '../fireBase.css';

 var firebaseConfig = {
    apiKey: "AIzaSyAHlWljxfXUOlTLmwfjzAyQCzayqKmzfxw",
    authDomain: "login-69369.firebaseapp.com",
    projectId: "login-69369",
    storageBucket: "login-69369.appspot.com",
    messagingSenderId: "456857943146",
    appId: "1:456857943146:web:eeb0e4f1d47460fdfd1e13"
  };

    const fire = firebase.initializeApp(firebaseConfig);
    export default fire;