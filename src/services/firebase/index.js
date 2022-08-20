import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcW2NLBTF4o9VlAIFKQFwG5RkPjguh12E",
  authDomain: "ecommercecoder-lucas.firebaseapp.com",
  projectId: "ecommercecoder-lucas",
  storageBucket: "ecommercecoder-lucas.appspot.com",
  messagingSenderId: "379189697270",
  appId: "1:379189697270:web:d62b93b5312ab0a0bf2ad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
