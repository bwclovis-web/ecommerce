import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCjCm5TTU3cC84LVR_S1AVSs0vbLpXQOBI",
    authDomain: "crwn-db-fc021.firebaseapp.com",
    databaseURL: "https://crwn-db-fc021.firebaseio.com",
    projectId: "crwn-db-fc021",
    storageBucket: "crwn-db-fc021.appspot.com",
    messagingSenderId: "181445219164",
    appId: "1:181445219164:web:7555e597b7f02d43fb2799"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;