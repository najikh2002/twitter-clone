// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKz4s0WG5S3ajftp8FHo2P615G_r71BWs",
  authDomain: "twitter-yt-1109b.firebaseapp.com",
  projectId: "twitter-yt-1109b",
  storageBucket: "twitter-yt-1109b.appspot.com",
  messagingSenderId: "894796157304",
  appId: "1:894796157304:web:8fb344fc34ef3d6199b88d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
