
import { ServiceAccount } from "firebase-admin";
import {
  initializeApp,
  cert,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

/* FireBase Keys */
import serviceAccountKeys from "./serviceAccountKeys.json";

/* Initialize the app with the Service Account's credentials */
initializeApp({
  credential: cert(serviceAccountKeys as unknown as ServiceAccount),
});

const db = getFirestore();
export default db;
