import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDLHxWr6uKGm0OKi_WOjMiDGoY3YEn7yMs',
  authDomain: 'tienda-17455.firebaseapp.com',
  projectId: 'tienda-17455',
  storageBucket: 'tienda-17455.appspot.com',
  messagingSenderId: '753285014236',
  appId: '1:753285014236:web:69f00dc2a5eff967278a19',
}; // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
