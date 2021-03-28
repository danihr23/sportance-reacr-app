
import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyCWJTaKcMST2E3t6HnOEMDHw1eZEAYY90o",
    authDomain: "sportance-react-app.firebaseapp.com",
    projectId: "sportance-react-app",
    storageBucket: "sportance-react-app.appspot.com",
    messagingSenderId: "316661392319",
    appId: "1:316661392319:web:dde0f3e55686c5f592770a"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db= firebaseApp.firestore();
   const auth = firebase.auth();
  const storage = firebase.storage();