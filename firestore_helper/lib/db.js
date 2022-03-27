"use strict";
// const serviceAccount = require("../serviceAccountKey.json");
//
// /* Initialize the credentials */
// initializeApp({
//   credential: cert(serviceAccount),
// });
//
Object.defineProperty(exports, "__esModule", { value: true });
const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();
exports.default = db;
