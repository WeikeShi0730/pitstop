import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  User,
} from "firebase/auth";

import { teams } from "../data/data";

import { Team, SignInType, SignUpType } from "../interfaces/index";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVbMCYH6b034Pc5FS2hNdtQcFtKOXqFMw",
  authDomain: "pitstop-5ba13.firebaseapp.com",
  projectId: "pitstop-5ba13",
  storageBucket: "pitstop-5ba13.appspot.com",
  messagingSenderId: "471258244933",
  appId: "1:471258244933:web:0ab2756cf7458634eb802c",
  measurementId: "G-X8G5K34F0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize firestore
const db = getFirestore();
// Initialize authentication
export const auth = getAuth();

//** Firestore *****************************/
// Uplaod data */
const uploadData = async () => {
  try {
    for (const team of teams) {
      await setDoc(doc(db, "teams", team.id), team);
    }
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    // console.error("Error adding document: ", e);
  }
};
// uploadData();

//** Get data */
// Optimize with Graphql!!!!!
export const firestoreGetDocs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "teams"));
    let data: Team[] = [];
    querySnapshot.forEach((each) => data.push(each.data() as Team));
    return data;
  } catch (error) {
    throw error;
  }
};

export const firestoreGetDoc = async (id: string) => {
  try {
    const docRef = doc(db, "teams", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data() as Team;
    } else {
      throw "No doc found";
    }
  } catch (error) {
    throw error;
  }
};

//** Auth *****************************/
export const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmailAndPassword = async (signUpInfo: SignUpType) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      signUpInfo.email,
      signUpInfo.password
    );
    await updateProfile(auth.currentUser as User, {
      displayName: signUpInfo.displayName,
    });
    // const { password, ...signUpInfoWithoutPassword } = signUpInfo;
    // await createUserFirestore(signUpInfoWithoutPassword);
    // return signUpInfoWithoutPassword;
  } catch (error) {
    console.error("Error creating the profile: ", error);
    throw error;
  }
};

export const signInWithEmail = async (signInInfo: SignInType) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      signInInfo.email,
      signInInfo.password
    );
  } catch (error) {
    console.error("Error signing: ", error);
    throw error;
  }
};

export const signOutGoogle = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};
