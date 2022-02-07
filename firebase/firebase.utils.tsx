import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
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

import {
  TeamType,
  SignInType,
  SignUpType,
  CartItemType,
  ProductType,
} from "../interfaces/index";
import { getDisplayName } from "next/dist/shared/lib/utils";

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
    let data: TeamType[] = [];
    querySnapshot.forEach((each) => data.push(each.data() as TeamType));
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
      return docSnapshot.data() as TeamType;
    } else {
      throw "No doc found";
    }
  } catch (error) {
    throw error;
  }
};

const createUserInFirestore = async (displayName: string, email: string) => {
  await setDoc(doc(db, "users", auth.currentUser?.uid as string), {
    user: { displayName: displayName, email: email },
    cartItems: [],
  });
};

export const updateUserCartFirestore = async (newProduct: ProductType) => {
  try {
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const docSnap = await getDoc(currentUserRef);
    if (docSnap.exists()) {
      const currentUser = docSnap.data();
      let cartItems: CartItemType[] = currentUser.cartItems;
      let newCartItem: CartItemType = { product: newProduct, count: 1 };
      for (const cartItem of cartItems) {
        if (cartItem.product.name === newProduct.name) {
          cartItems.splice(cartItems.indexOf(cartItem), 1);
          const newItem = {
            product: newProduct,
            count: cartItem.count + 1,
          };
          newCartItem = newItem;
          break;
        }
      }
      cartItems.push(newCartItem);
      await updateDoc(currentUserRef, {
        cartItems: cartItems,
      });
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
    const result = await signInWithPopup(auth, provider);
    const { displayName, email } = result.user;
    await createUserInFirestore(displayName as string, email as string);
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmailAndPassword = async (signUpInfo: SignUpType) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await createUserWithEmailAndPassword(
      auth,
      signUpInfo.email,
      signUpInfo.password
    );
    await updateProfile(auth.currentUser as User, {
      displayName: signUpInfo.displayName,
    });
    await createUserInFirestore(signUpInfo.displayName, signUpInfo.email);
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
