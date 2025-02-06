import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAMn2WQgQ_z91kZ-ygxIwDPnXwiyCgztvs",
  authDomain: "fir-demo-f7ee3.firebaseapp.com",
  projectId: "fir-demo-f7ee3",
  storageBucket: "fir-demo-f7ee3.firebasestorage.app",
  messagingSenderId: "916210166729",
  appId: "1:916210166729:web:d46771ca8fb4eb0c3c9618"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)