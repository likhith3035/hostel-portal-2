// Centralized Firebase v9 Configuration
// This is an example file. Copy this to firebase-config.js and fill in your values.

import { initializeApp } from './js/firebase/firebase-app.js';
import { getAuth } from './js/firebase/firebase-auth.js';
import { getFirestore } from './js/firebase/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase app and services
export { app, auth, db };
