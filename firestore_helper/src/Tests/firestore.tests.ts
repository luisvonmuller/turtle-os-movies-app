// // import moviesDataSet from '../Data/movies.json';
// // import { Movie } from '../Types';
// // 
// 
// import { ServiceAccount } from "firebase-admin";
// import {
//   initializeApp,
//   cert,
// } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
// 
// /* FireBase Keys */
// import serviceAccountKeys from "../serviceAccountKeys.json";
// 
// 
// 
// describe("🔥 Firestore Integration Tests", () => {
// 
//   test("🎬 Check Movies", async () => {
//     /* Initialize the app with the Service Account's credentials */
//     initializeApp({
//       credential: cert(serviceAccountKeys as unknown as ServiceAccount),
//     });
// 
//     const db = getFirestore();
// 
//     /* I'll check just for the Length to check if everyone was pushed */
//     const moviesCollectionRef = db.collection('movies');
//     const snapshot = await moviesCollectionRef.get();
//     var totalMoviesCount = 0;
//     /* @ts-ignore */
//     snapshot.forEach((_doc: any) => {
//       totalMoviesCount++
//     });
//     console.log(totalMoviesCount);
// 
//     expect(totalMoviesCount).toBe(1000);
// 
//   });
// })