import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config={
    apiKey: "AIzaSyAeybsca79ShlSLpjNPVWVixjkAgba-AMU",
    authDomain: "collate-581db.firebaseapp.com",
    databaseURL: "https://collate-581db.firebaseio.com",
    projectId: "collate-581db",
    storageBucket: "collate-581db.appspot.com",
    messagingSenderId: "492791963264",
    appId: "1:492791963264:web:80ef9a8347b9de8c299065",
    measurementId: "G-M8SL4GB3FN"
}

const fire=firebase.initializeApp(config);

export const auth=firebase.auth();
const firestore=firebase.firestore();

// const provider=new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'})
// export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export { firebase, firestore }
export default fire;