import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhyj0If8Okn3lmGetp5SvAjjG4MqJY4e0',
  authDomain: 'datn-spa.firebaseapp.com',
  projectId: 'datn-spa',
  storageBucket: 'datn-spa.appspot.com',
  messagingSenderId: '937754482343',
  appId: '1:937754482343:web:65f72fa3d8b928214bed82',
  measurementId: 'G-C5KEQYHBRZ',
};

firebase.initializeApp(firebaseConfig);

/** login with google */
export const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () =>
  auth.signInWithPopup(providerGoogle).catch((error) => {
    console.log('failure');
    return error;
  });

/** login with facebook */
const providerFaceBook = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => {
  auth.signInWithPopup(providerFaceBook).catch((error) => {
    console.log('failure');
    return error;
  });
};

export default firebase;
