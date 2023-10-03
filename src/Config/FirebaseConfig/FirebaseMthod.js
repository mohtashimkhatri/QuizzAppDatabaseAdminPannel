import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "./Firebaseconfig";
import { red } from "@mui/material/colors";
let auth = getAuth(app);
const db = getDatabase(app);

export let Signupfb = (body) => {
  return new Promise((resolve, reject) => {
    if (!body.Email || !body.Password) {
      alert("data Not Found");
    } else {
      createUserWithEmailAndPassword(auth, body.Email, body.Password)
        .then((res) => {
          resolve("user Created Succesfuly");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

export const Loginfb = (body) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, body.Email, body.Password)
      .then((res) => {
        resolve("User Login Succesfully");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const fbAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        resolve(uid);
        // ...
      } else {
        reject("user Not Login");
      }
    });
  });
};
export let FbDataSend = (body, nodeName, id) => {
  return new Promise((resolve, reject) => {
    let keyReference = push(ref(db, `${nodeName}`)).key;
    body.id = keyReference;
    let reference = ref(db, `${nodeName}/${body.id}`);
    set(reference, body)
      .then(() => {
        resolve("okay");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const GetData = (nodeName, id) => {
  return new Promise((resolve, reject) => {
    const referencedb = ref(db, `${nodeName}/${id ? id : ""}`);
    onValue(referencedb, (data) => {
      if (data.exists()) {
        resolve(data.val());
      } else {
        reject("not Found Data");
      }
    });
  });
};
export const LogoutoftheYear = () => {
  return signOut(auth);
};
