
import moviesDataSet from './Data/movies.json';
import { Movie } from './Types';
/* Firestore funcitons to write Data to the Collection */
import { collection, addDoc } from "firebase/firestore";
import { generateKeyword } from './helpers';

import db from './firestoreDb';



const processMovies = (): Movie[] => {
  /* Give the type */
  let movies: Movie[] = moviesDataSet as Movie[];

  /* Rearrange and fill gaps on the Data Structure (And generate the Keywords to perform the Like SQL statement on the FireStore) */
  movies = movies.map((movie: Movie) => {
    return {
      ...movie,
      titleKeywords: generateKeyword(movie.title as unknown as string),
      comments: [],
    }
  });

  return movies;

}

const populateMoviesCollection = async () => {
  const movies: Movie[] = processMovies();
  var totalCounter = 0;

  movies.forEach(async (movie, number) => {
    console.log(`Adding movie number: ${number + 1}`);
    const res = await db.collection('movies').add(movie);
    totalCounter++;
  });

  console.log("🍻 Finished writing: " + totalCounter + " movies to the Collection");
}


export { populateMoviesCollection };