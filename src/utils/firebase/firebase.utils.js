import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  googleAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiBzaAoigyYFebw3R8aEyn7dpMC3hAhUc",
  authDomain: "ecommerce-spa-db.firebaseapp.com",
  projectId: "ecommerce-spa-db",
  storageBucket: "ecommerce-spa-db.appspot.com",
  messagingSenderId: "1069491932258",
  appId: "1:1069491932258:web:9ab74287230f862e39d53b",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //check if user data exists
  if (!userSnapshot.exists()) {
    //if false: create/set the document with the data from userAuth in my collection
    //thus, creating a user in the database
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  //if true: return user data
  return userDocRef;
};
