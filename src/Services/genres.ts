import {
  collectionGroup,
  query,
  getDocs,
} from "firebase/firestore";

import { db } from "../Services/firestore";

export type Genre = {
  genre: string
};

export async function listGenres(): Promise<Genre[]> {
  const moviesDataQuery = query(
    collectionGroup(db, "genres"),
  );

  const querySnapshot = await getDocs(moviesDataQuery);
  const genreSet: Genre[] = [];

  querySnapshot.forEach((doc) => genreSet.push(doc.data() as Genre));

  return genreSet;
}