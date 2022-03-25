import { OrderHistoryItemType } from "./../interfaces/index";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  onSnapshot,
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
  User,
} from "firebase/auth";

import { teams } from "../data/data";

import {
  TeamType,
  SignInType,
  SignUpType,
  CartItemType,
  ProductType,
  SnapshotFnType,
  CurrentUserFnType,
} from "../interfaces/index";
import moment from "moment";

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
      await setDoc(doc(db, "teams", team.id as string), team);
    }
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    // console.error("Error adding document: ", e);
  }
};
// uploadData();

//** Get data */
// Optimize with Graphql!!!!!
export const firestoreGetTeamsDocs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "teams"));
    let data: TeamType[] = [];
    querySnapshot.forEach((each) => data.push(each.data() as TeamType));
    return data;
  } catch (error) {
    throw error;
  }
};

export const firestoreGetTeamsDoc = async (id: string) => {
  try {
    const docRef = doc(db, "teams", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data() as TeamType;
    } else {
      throw Error("No doc found");
    }
  } catch (error) {
    throw error;
  }
};

export const firestoreGetAllProducts = async () => {
  try {
    const docsSnap = await getDocs(collection(db, "teams"));
    let allProducts: ProductType[] = [];
    docsSnap.forEach((doc) => {
      doc.data().productsList.map((product: ProductType) => {
        allProducts.push(product);
      });
    });
    return allProducts as ProductType[];
  } catch (error) {
    throw error;
  }
};

export const firestoreGetFeaturedProducts = async () => {
  try {
    const docSnapshot = await getDocs(collection(db, "teams"));
    let featuredProducts: ProductType[] = [];
    docSnapshot.forEach((doc) => {
      doc.data().productsList.map((product: ProductType) => {
        if (product.featured === true) {
          featuredProducts.push(product);
        }
      });
    });
    return featuredProducts as ProductType[];
  } catch (error) {
    throw error;
  }
};

const createUserInFirestore = async (displayName: string, email: string) => {
  try {
    await setDoc(doc(db, "users", auth.currentUser?.uid as string), {
      user: { displayName: displayName, email: email },
      cartItems: [],
      wishlistItems: [],
      orderHistoryItems: [],
    });
  } catch (error) {
    throw error;
  }
};

const getUserInFirestore = async (uid: string) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const updateUserCartFirestore = async (
  product: ProductType,
  action: string,
  count?: number
) => {
  try {
    if (!auth.currentUser) {
      throw Error("Please login first.");
    }
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const docSnap = await getDoc(currentUserRef);
    if (docSnap.exists()) {
      const currentUser = docSnap.data();
      let cartItems: CartItemType[] = currentUser.cartItems;
      const cartItem = cartItems.filter(
        (cartItem) => cartItem.product.id === product.id
      );
      switch (action) {
        case "ADD": {
          if (cartItem.length === 0) {
            // new item
            const newCartItem: CartItemType = { product: product, count: 1 };
            cartItems.push(newCartItem);
          } else {
            // existing item
            cartItems[cartItems.indexOf(cartItem[0])].count++;
          }
          break;
        }
        case "REMOVE": {
          if (cartItem.length === 0) {
            break;
          } else if (cartItem[0].count === 1) {
            cartItems.splice(cartItems.indexOf(cartItem[0]), 1);
          } else if (cartItem[0].count > 1) {
            cartItems[cartItems.indexOf(cartItem[0])].count--;
          }
          break;
        }

        case "SET": {
          if ((count as number) >= 0) {
            cartItems[cartItems.indexOf(cartItem[0])].count = count as number;
          } else {
            throw Error("Input amount not valid.");
          }
          break;
        }

        case "DELETE": {
          if (cartItem.length === 0) {
            break;
          } else {
            cartItems.splice(cartItems.indexOf(cartItem[0]), 1);
          }
          break;
        }

        default:
          break;
      }
      await updateDoc(currentUserRef, {
        cartItems: cartItems,
      });
    } else {
      throw Error("No doc found");
    }
  } catch (error) {
    throw error;
  }
};

export const updateWishlist = async (product: ProductType, action: string) => {
  try {
    if (!auth.currentUser) {
      throw Error("Please login first.");
    }
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const docSnap = await getDoc(currentUserRef);
    if (docSnap.exists()) {
      const currentUser = docSnap.data();
      let wishlistItems: ProductType[] = currentUser.wishlistItems;
      const wishlistItem = wishlistItems.filter(
        (item) => item.id === product.id
      );
      switch (action) {
        case "ADD":
          if (
            wishlistItem === undefined ||
            wishlistItem === null ||
            wishlistItem.length === 0
          ) {
            wishlistItems.push(product);
          } else {
            throw Error("Something went wrong!");
          }
          break;
        case "REMOVE":
          if (
            wishlistItem !== undefined &&
            wishlistItem !== null &&
            wishlistItem.length > 0
          ) {
            wishlistItems.splice(wishlistItems.indexOf(wishlistItem[0]), 1);
          } else {
            throw Error("Something went wrong!");
          }
          break;
      }
      await updateDoc(currentUserRef, {
        wishlistItems: wishlistItems,
      });
    } else {
      throw Error("No doc found");
    }
  } catch (error) {
    throw error;
  }
};

export const handleCheckoutSuccess = async () => {
  try {
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const docSnap = await getDoc(currentUserRef);
    if (docSnap.exists()) {
      await Promise.all([
        updateOrderHistory(),
        updateItemsSoldNum(),
        clearCartFirebase(),
      ]);
    } else {
      throw Error("No doc found");
    }
  } catch (error) {
    throw error;
  }
};

const clearCartFirebase = async () => {
  try {
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const docSnap = await getDoc(currentUserRef);
    if (docSnap.exists()) {
      await updateDoc(currentUserRef, {
        cartItems: [],
      });
    } else {
      throw Error("No doc found");
    }
  } catch (error) {
    throw error;
  }
};

const updateOrderHistory = async () => {
  try {
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const docSnap = await getDoc(currentUserRef);
    if (docSnap.exists()) {
      let orderHistory = docSnap.data().orderHistoryItems;
      const items = docSnap.data().cartItems;
      if (items && items.length > 0) {
        const currentTimeStamp = moment().format("LL");
        const found = orderHistory.find(
          (eachOrderHistory: OrderHistoryItemType, index: number) => {
            if (eachOrderHistory.timeStamp === currentTimeStamp) {
              orderHistory[index].items =
                orderHistory[index].items.concat(items);
              return true;
            }
          }
        );
        if (!found) {
          orderHistory.push({
            timeStamp: currentTimeStamp,
            items: items,
          });
        }
        await updateDoc(currentUserRef, {
          orderHistoryItems: orderHistory,
        });
      }
    } else {
      throw Error("No doc found");
    }
  } catch (error) {
    throw error;
  }
};

const updateItemsSoldNum = async () => {
  try {
    const currentUserRef = doc(db, "users", auth.currentUser?.uid as string);
    const userDocSnap = await getDoc(currentUserRef);
    if (userDocSnap.exists()) {
      const currentUser = userDocSnap.data();
      const cartItems: CartItemType[] = currentUser.cartItems;
      for (var cartItem of cartItems) {
        const teamRef = doc(db, "teams", cartItem.product.teamId);
        const teamDocSnap = await getDoc(teamRef);
        if (teamDocSnap.exists()) {
          const teamDoc = teamDocSnap.data() as TeamType;
          const { productsList } = teamDoc as TeamType;
          let foundProduct = productsList?.find(
            (product) => product.id === cartItem.product.id
          );
          productsList![productsList!.indexOf(foundProduct!)].sold +=
            cartItem.count;
          await updateDoc(teamRef, {
            productsList,
          });
        } else {
          throw Error("No team doc found");
        }
      }
    } else {
      throw Error("No user doc found");
    }
  } catch (error) {
    throw error;
  }
};

export const subscribeToCurrentUserData = (
  uid: string,
  snapshot: SnapshotFnType["snapshotfn"]
) => {
  const currentUserRef = doc(db, "users", uid);
  return onSnapshot(currentUserRef, snapshot);
};

//** Auth *****************************/
export const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // check if firestore already have this uid, if not create a new doc
    const { uid } = result.user;
    const exist = await getUserInFirestore(uid);
    if (!exist) {
      const { displayName, email } = result.user;
      await createUserInFirestore(displayName as string, email as string);
    }
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
      signUpInfo.password as string
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

export const sendChangePasswordEmail = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Error updating password: ", error);
    throw error;
  }
};

export const subscribeToAuthState = (cb: CurrentUserFnType["currentUser"]) => {
  return onAuthStateChanged(auth, cb);
};
