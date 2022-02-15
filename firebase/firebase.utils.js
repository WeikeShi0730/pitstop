"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.subscribeToAuthState = exports.sendChangePasswordEmail = exports.signOutGoogle = exports.signInWithEmail = exports.signUpWithEmailAndPassword = exports.signInWithGoogle = exports.subscribeToCurrentUserCartItems = exports.updateUserCartFirestore = exports.firestoreGetTeamsDoc = exports.firestoreGetTeamsDocs = exports.auth = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
var data_1 = require("../data/data");
// Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVbMCYH6b034Pc5FS2hNdtQcFtKOXqFMw",
    authDomain: "pitstop-5ba13.firebaseapp.com",
    projectId: "pitstop-5ba13",
    storageBucket: "pitstop-5ba13.appspot.com",
    messagingSenderId: "471258244933",
    appId: "1:471258244933:web:0ab2756cf7458634eb802c",
    measurementId: "G-X8G5K34F0R"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
// Initialize firestore
var db = (0, firestore_1.getFirestore)();
// Initialize authentication
exports.auth = (0, auth_1.getAuth)();
//** Firestore *****************************/
// Uplaod data */
var uploadData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, teams_1, team, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                _i = 0, teams_1 = data_1.teams;
                _a.label = 1;
            case 1:
                if (!(_i < teams_1.length)) return [3 /*break*/, 4];
                team = teams_1[_i];
                return [4 /*yield*/, (0, firestore_1.setDoc)((0, firestore_1.doc)(db, "teams", team.id), team)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
uploadData();
//** Get data */
// Optimize with Graphql!!!!!
var firestoreGetTeamsDocs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var querySnapshot, data_2, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "teams"))];
            case 1:
                querySnapshot = _a.sent();
                data_2 = [];
                querySnapshot.forEach(function (each) { return data_2.push(each.data()); });
                return [2 /*return*/, data_2];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.firestoreGetTeamsDocs = firestoreGetTeamsDocs;
var firestoreGetTeamsDoc = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var docRef, docSnapshot, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                docRef = (0, firestore_1.doc)(db, "teams", id);
                return [4 /*yield*/, (0, firestore_1.getDoc)(docRef)];
            case 1:
                docSnapshot = _a.sent();
                if (docSnapshot.exists()) {
                    return [2 /*return*/, docSnapshot.data()];
                }
                else {
                    throw "No doc found";
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.firestoreGetTeamsDoc = firestoreGetTeamsDoc;
var createUserInFirestore = function (displayName, email) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, firestore_1.setDoc)((0, firestore_1.doc)(db, "users", (_a = exports.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid), {
                    user: { displayName: displayName, email: email },
                    cartItems: []
                })];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var getUserInFirestore = function (uid) { return __awaiter(void 0, void 0, void 0, function () {
    var docRef, docSnap;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                docRef = (0, firestore_1.doc)(db, "users", uid);
                return [4 /*yield*/, (0, firestore_1.getDoc)(docRef)];
            case 1:
                docSnap = _a.sent();
                if (docSnap.exists()) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
        }
    });
}); };
var updateUserCartFirestore = function (product, action, count) { return __awaiter(void 0, void 0, void 0, function () {
    var currentUserRef, docSnap, currentUser, cartItems, cartItem, newCartItem, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                currentUserRef = (0, firestore_1.doc)(db, "users", (_a = exports.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid);
                return [4 /*yield*/, (0, firestore_1.getDoc)(currentUserRef)];
            case 1:
                docSnap = _b.sent();
                if (!docSnap.exists()) return [3 /*break*/, 3];
                currentUser = docSnap.data();
                cartItems = currentUser.cartItems;
                cartItem = cartItems.filter(function (cartItem) { return cartItem.product.id === product.id; });
                switch (action) {
                    case "ADD": {
                        if (cartItem.length === 0) {
                            newCartItem = { product: product, count: 1 };
                            cartItems.push(newCartItem);
                        }
                        else {
                            // existing item
                            cartItems[cartItems.indexOf(cartItem[0])].count++;
                        }
                        break;
                    }
                    case "REMOVE": {
                        if (cartItem.length === 0) {
                        }
                        else if (cartItem[0].count === 1) {
                            cartItems.splice(cartItems.indexOf(cartItem[0]), 1);
                        }
                        else if (cartItem[0].count > 1) {
                            cartItems[cartItems.indexOf(cartItem[0])].count--;
                        }
                        break;
                    }
                    case "SET": {
                        if (count >= 0) {
                            cartItems[cartItems.indexOf(cartItem[0])].count = count;
                        }
                        // else if ((count as number) === 0) {
                        //   cartItems.splice(cartItems.indexOf(cartItem[0]), 1);
                        // } 
                        else {
                            throw "Input amount not valid.";
                        }
                        break;
                    }
                    case "DELETE": {
                        if (cartItem.length === 0) {
                            throw "No items found in your cart.";
                        }
                        else {
                            cartItems.splice(cartItems.indexOf(cartItem[0]), 1);
                        }
                        break;
                    }
                    // default:
                    //   {
                    //   }
                }
                return [4 /*yield*/, (0, firestore_1.updateDoc)(currentUserRef, {
                        cartItems: cartItems
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3: throw "No doc found";
            case 4: return [3 /*break*/, 6];
            case 5:
                error_3 = _b.sent();
                throw error_3;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.updateUserCartFirestore = updateUserCartFirestore;
var subscribeToCurrentUserCartItems = function (uid, snapshot) {
    var currentUserRef = (0, firestore_1.doc)(db, "users", uid);
    return (0, firestore_1.onSnapshot)(currentUserRef, snapshot);
};
exports.subscribeToCurrentUserCartItems = subscribeToCurrentUserCartItems;
//** Auth *****************************/
var signInWithGoogle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var provider, result, uid, exist, _a, displayName, email, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, (0, auth_1.setPersistence)(exports.auth, auth_1.browserLocalPersistence)];
            case 1:
                _b.sent();
                provider = new auth_1.GoogleAuthProvider();
                return [4 /*yield*/, (0, auth_1.signInWithPopup)(exports.auth, provider)];
            case 2:
                result = _b.sent();
                uid = result.user.uid;
                return [4 /*yield*/, getUserInFirestore(uid)];
            case 3:
                exist = _b.sent();
                if (!!exist) return [3 /*break*/, 5];
                _a = result.user, displayName = _a.displayName, email = _a.email;
                return [4 /*yield*/, createUserInFirestore(displayName, email)];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_4 = _b.sent();
                throw error_4;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.signInWithGoogle = signInWithGoogle;
var signUpWithEmailAndPassword = function (signUpInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, (0, auth_1.setPersistence)(exports.auth, auth_1.browserLocalPersistence)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, auth_1.createUserWithEmailAndPassword)(exports.auth, signUpInfo.email, signUpInfo.password)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, auth_1.updateProfile)(exports.auth.currentUser, {
                        displayName: signUpInfo.displayName
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, createUserInFirestore(signUpInfo.displayName, signUpInfo.email)];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                console.error("Error creating the profile: ", error_5);
                throw error_5;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.signUpWithEmailAndPassword = signUpWithEmailAndPassword;
var signInWithEmail = function (signInInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, auth_1.signInWithEmailAndPassword)(exports.auth, signInInfo.email, signInInfo.password)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error("Error signing: ", error_6);
                throw error_6;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.signInWithEmail = signInWithEmail;
var signOutGoogle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, auth_1.signOut)(exports.auth)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.error("Error signing out: ", error_7);
                throw error_7;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.signOutGoogle = signOutGoogle;
var sendChangePasswordEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, auth_1.sendPasswordResetEmail)(exports.auth, email)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                console.error("Error updating password: ", error_8);
                throw error_8;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendChangePasswordEmail = sendChangePasswordEmail;
var subscribeToAuthState = function (cb) {
    return (0, auth_1.onAuthStateChanged)(exports.auth, cb);
};
exports.subscribeToAuthState = subscribeToAuthState;
