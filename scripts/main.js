import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCnXoqep7H8_NBWywgSZBV-9uTGquMXxLQ",
  authDomain: "legitab-audio.firebaseapp.com",
  projectId: "legitab-audio",
  storageBucket: "legitab-audio.appspot.com",
  messagingSenderId: "666084265823",
  appId: "1:666084265823:web:6b9063797707322d63b0ea",
  measurementId: "G-2YC2HT27K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Access storage
const storage = getStorage()
