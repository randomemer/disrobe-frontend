import { getApps, initializeApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

let app: FirebaseApp;

if (typeof window !== "undefined" && !getApps().length) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    ...(process.env.NODE_ENV === "production" && {
      measurementId: process.env.MEASUREMENT_ID,
    }),
  };

  app = initializeApp(firebaseConfig);
}

export { app };
