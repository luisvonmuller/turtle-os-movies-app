
import { generateGenresSet, generateKeyword } from "../helpers";
import moviesDataSet from '../Data/movies.json';
import { Movie } from '../Types';


describe("😊 Helpers Tests 👉", () => {
  test('😱 Title Keywords sample for mocked title: "Magic Mike XXL"', () => {
    expect(generateKeyword("Magic Mike XXL")).toStrictEqual([
      'magic mike xxl', 'm', 'ma',
      'mag', 'magi', 'magic',
      'a', 'ag', 'agi',
      'agic', 'g', 'gi',
      'gic', 'i', 'ic',
      'c', 'm', 'mi',
      'mik', 'mike', 'i',
      'ik', 'ike', 'k',
      'ke', 'e', 'x',
      'xx', 'xxl', 'x',
      'xl', 'l', '*'
    ]);
  });

  test('🍿 Tests genre array (This is a mocked up of the provided Genres from movies.json) ', () => {
    let movies: Movie[] = moviesDataSet as Movie[];

    expect(generateGenresSet(movies)).toStrictEqual([
      'Action', 'Adventure',
      'Sci-Fi', 'Mystery',
      'Horror', 'Thriller',
      'Animation', 'Comedy',
      'Family', 'Fantasy',
      'Drama', 'Music',
      'Biography', 'Romance',
      'History', 'Crime',
      'Western', 'War',
      'Musical', 'Sport'
    ])
  });

})

