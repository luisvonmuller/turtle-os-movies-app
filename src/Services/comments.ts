import {
  getDoc,
} from "firebase/firestore";

import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../Services/firestore";

import { Comment } from '../Types';
export async function listComments(movieId: string): Promise<Comment[]> {
  const docRef = doc(db, "comments", movieId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().comments as Comment[];
  }

  return [] as Comment[]; // No Cooments found, empty array then.

}

export async function pushComment(movieId: string, comment: string): Promise<void> {
  const commentRef = doc(db, "comments", movieId); // Doc Reference to push comment into.
  // Update the doc pushing pushing into the array.
  await updateDoc(commentRef, {
    comments: arrayUnion({ content: comment })
  });

}