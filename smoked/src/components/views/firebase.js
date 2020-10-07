import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIrimfHe0GKeXo23wVVsfaxDNIC3Cbspo",
  authDomain: "smoked-1a60a.firebaseapp.com",
  databaseURL: "https://smoked-1a60a.firebaseio.com",
  projectId: "smoked-1a60a",
  storageBucket: "smoked-1a60a.appspot.com",
  messagingSenderId: "489315074506",
  appId: "1:489315074506:web:ae3d375dd557816d14cf33",
});

var db = firebaseApp.firestore();

export { db };
