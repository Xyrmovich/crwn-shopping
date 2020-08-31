import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6qALlQIcO1IolqU_LMht0ZZrfOgn1voY",
    authDomain: "crown-db-test-kh.firebaseapp.com",
    databaseURL: "https://crown-db-test-kh.firebaseio.com",
    projectId: "crown-db-test-kh",
    storageBucket: "crown-db-test-kh.appspot.com",
    messagingSenderId: "354245229361",
    appId: "1:354245229361:web:269d26eaa65d3872358e10",
    measurementId: "G-33NEMF8FM9"
  };


firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
