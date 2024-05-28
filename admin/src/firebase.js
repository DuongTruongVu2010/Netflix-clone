import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzEzdrFGK5FhYkarkndcelEaF39EFnEUg",
  authDomain: "netflix-3b806.firebaseapp.com",
  projectId: "netflix-3b806",
  storageBucket: "netflix-3b806.appspot.com",
  messagingSenderId: "510805168545",
  appId: "1:510805168545:web:304a0fc3e7e35b6b7bfbe0",
  measurementId: "G-GX322THLTB",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
