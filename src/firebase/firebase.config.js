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

  export const createUserProfile = async (userAuth, data) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        } catch(err) {
            console.log('%c [err]', 'color:blue',err)
        }
    }

    return userRef;
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