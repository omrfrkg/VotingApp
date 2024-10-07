import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication modülünü ekleyin

// Firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "voteapp-firebase-auth.firebaseapp.com",
  projectId: "voteapp-firebase-auth",
  storageBucket: "voteapp-firebase-auth.appspot.com",
  messagingSenderId: "901374694084",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); // Auth referansını oluşturun

export { auth }; // Auth'ı export edin ki diğer dosyalarda kullanabilesiniz
