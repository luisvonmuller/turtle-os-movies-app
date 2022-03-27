
import db from './firestoreDb';
import moviesDataSet from './Data/movies.json';
import { Movie, Genre } from './Types';
import { generateGenresSet } from './helpers';

const populateGenresCollection = async (): Promise<void> => {
  const genres: Genre[] = generateGenresSet(moviesDataSet as Movie[]);

  console.log("We have a Set of " + genres.length + " Genres. Lets create a Collection with them 😊");

  genres.forEach(async (genre) => {
    console.log(`Adding movie genre: ${genre}`);
    const res = await db.collection('genres').add({ genre });
  });

  console.log("🍻 Finished writing the Genre set!");
}

export { populateGenresCollection };