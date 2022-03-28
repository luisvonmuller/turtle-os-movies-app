import {
  collectionGroup,
  query as queryFn,
  where,
  getDocs,
  limit,
} from "firebase/firestore";

import { Movie, Query } from "../Types";
import { db } from "./firestore";

/* Common Search Function */
export const firestoreMoviesQuery = async (query: Query): Promise<Movie[]> => {
  /* Create Query Structure */
  const moviesDataQuery = queryFn(
    collectionGroup(db, "movies"),
    where('titleKeywords', 'array-contains', ((query.title?.toLowerCase() === "" ? null : query.title?.toLowerCase()) ?? "*")),
    limit(5)
  );

  console.log(query.title == "");
  /* Get the Collection Snapshot */
  const querySnapshot = await getDocs(moviesDataQuery);
  const movieSet: Movie[] = [];

  /* O(n) - better then iterating over the keywords... */
  querySnapshot.forEach((doc) => {
    if (query.genre !== "all") {
      if (doc.data().genre.includes(query.genre)) {
        movieSet.push({ id: doc.id, ...doc.data() } as Movie);
      }
    } else {
      movieSet.push({ id: doc.id, ...doc.data() } as Movie);
    }
  });

  return movieSet;
}