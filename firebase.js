import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDFBLleE0Vq8-oArkKlbeVphvVOJw6ZVd0",
  authDomain: "dic3chatapp.firebaseapp.com",
  projectId: "dic3chatapp",
  storageBucket: "dic3chatapp.appspot.com",
  messagingSenderId: "996224019376",
  appId: "1:996224019376:web:c8d5c85d1bc0c95f83c475"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
