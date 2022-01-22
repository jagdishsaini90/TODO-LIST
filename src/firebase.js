import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOuQoaCm2k4I6GdBO0P4kCJBqjy1Qrhd4",
  authDomain: "todo-app-95e06.firebaseapp.com",
  projectId: "todo-app-95e06",
  storageBucket: "todo-app-95e06.appspot.com",
  messagingSenderId: "362790886661",
  appId: "1:362790886661:web:15375169c7548d69752b6c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
