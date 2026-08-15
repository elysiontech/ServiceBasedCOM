// ── Firebase setup ──────────────────────────────────────────────
// 1. Create a project at https://console.firebase.google.com
// 2. Add a Web App, copy its config into the object below
//    (or better: put these values in a .env file and read them via
//    import.meta.env.VITE_FIREBASE_API_KEY etc — see .env.example)
// 3. In Firestore, create a collection called "enquiries" (it will
//    also be created automatically on first submit)
// 4. Set Firestore security rules to allow create-only writes from
//    the public, e.g.:
//
//    match /enquiries/{doc} {
//      allow create: if true;
//      allow read, update, delete: if false;
//    }
//
// Until real keys are added, submitForm() below falls back to
// logging the enquiry locally so the form still "works" in the demo.

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "REPLACE_ME",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "REPLACE_ME",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "REPLACE_ME",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "REPLACE_ME",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "REPLACE_ME",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "REPLACE_ME",
};

const isConfigured = firebaseConfig.apiKey !== "REPLACE_ME";

let db = null;
if (isConfigured) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

/**
 * Writes an enquiry to the "enquiries" Firestore collection.
 * Any other site/app can read this same collection later via the
 * Firebase Admin SDK or REST API using your project credentials.
 */
export async function submitEnquiry(data) {
  const payload = {
    ...data,
    createdAt: isConfigured ? serverTimestamp() : new Date().toISOString(),
    source: "fourge-website",
  };

  if (!isConfigured) {
    console.warn(
      "[Firebase not configured] Enquiry captured locally only:",
      payload
    );
    return { ok: true, demo: true };
  }

  await addDoc(collection(db, "enquiries"), payload);
  return { ok: true, demo: false };
}

export { db, isConfigured };
