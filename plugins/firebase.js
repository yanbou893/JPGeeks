import firebase from "firebase/app"
import "firebase/auth"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDpoR_k0-iLYwG49FdL5OFhx0faEEuCX9E",
    authDomain: "jpgeeks-2a0a5.firebaseapp.com",
    databaseURL: "https://jpgeeks-2a0a5.firebaseio.com",
    projectId: "jpgeeks-2a0a5",
    storageBucket: "jpgeeks-2a0a5.appspot.com",
    messagingSenderId: "148103585640",
    appId: "1:148103585640:web:4c34e49e1a2ce6379d40dd",
    measurementId: "G-Y7X8G32LQ3"
  })
}

export default firebase