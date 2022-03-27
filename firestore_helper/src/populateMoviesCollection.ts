/* Dataset and DataSet type ✌️ */
import moviesDataSet from './Data/movies.json';
import { Movie } from './Types';

/* Firestore DB connection */
import db from './firestoreDb';

/* Firestore funcitons to write Data to the Collection */
import { generateKeyword } from './helpers';


const processMovies = (): Movie[] => {
  /* Type who need to be typed (just to assure things) */
  let movies: Movie[] = moviesDataSet as Movie[];

  /* Rearrange and fill gaps on the Data Structure (And generate the Keywords to perform the Like SQL statement on the FireStore) */
  movies = movies.map((movie: Movie) => {
    return {
      ...movie,
      titleKeywords: generateKeyword(movie.title as unknown as string), // Create the Keyword array to simulate a substr.
      comments: [],
      genres: [...movie.genre, "*"] // Add wildcard operator to search later when no actual genre is provided. 
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
    totalCounter = number;
  });

  console.log("🍻 Finished writing: " + totalCounter + " movies to the Collection");
}


export { populateMoviesCollection };