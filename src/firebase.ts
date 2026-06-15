import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAItkhaneSuhQqJPZ8Hp3sVBoZqmsSM8Js",
  authDomain: "game-edukasi-sdn1jainghilir.firebaseapp.com",
  projectId: "game-edukasi-sdn1jainghilir",
  storageBucket: "game-edukasi-sdn1jainghilir.firebasestorage.app",
  messagingSenderId: "81545208561",
  appId: "1:81545208561:web:d6b52b429640edd3d13f50"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);