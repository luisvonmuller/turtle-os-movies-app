import {
  onSnapshot,
  doc, updateDoc, arrayUnion
} from "firebase/firestore";

import { db } from "../Services/firestore";
import { Comment } from '../Types';

interface listCommentsArgs {
  movieId: string,
  setComments(arg: Comment[]): void
}

export async function listComments({ movieId, setComments }: listCommentsArgs) {
  onSnapshot(doc(db, "comments", movieId), (doc) => {
    setComments(doc.data()?.comments);
  });
}

export async function pushComment(movieId: string, comment: string): Promise<void> {
  const commentRef = doc(db, "comments", movieId); // Doc Reference to push comment into.
  // Update theoc pushing pushing into the array.
  await updateDoc(commentRef, {
    comments: arrayUnion({ content: comment })
  });

}