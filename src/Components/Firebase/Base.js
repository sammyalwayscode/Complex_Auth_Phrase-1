import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCyuarNXFcyrCHUkIc1MGhKpxeP5snmhs0",
  authDomain: "complex-auth.firebaseapp.com",
  projectId: "complex-auth",
  storageBucket: "complex-auth.appspot.com",
  messagingSenderId: "466166066569",
  appId: "1:466166066569:web:a0146b3e9e27558b790558"
})