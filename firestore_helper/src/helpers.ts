import { Genre, Movie } from './Types';

/* Generates a Keyword oriented Array for querying movies title, to simulate a like %str% on FireBase */
const generateKeyword = (title: string): string[] => {
  const keywordsTitle: string[] = [];
  const lowerCasedTitle: string = title.toLowerCase(); /* Unless I want to get a O(nˆ3+(1)) i'll need to take it to lower case */
  keywordsTitle.push(lowerCasedTitle); // It should always have at least the full name... 😅

  /* To Create splitted like Keywords for Each word in the Movie Title */
  lowerCasedTitle.split(' ').forEach((word: string) => {
    const wordLength: number = word.length;
    for (let curr = 0; curr < wordLength; curr++) {
      let curName = '';
      word.slice(curr, wordLength).split('').forEach((letter: string) => {
        curName += letter;
        keywordsTitle.push(curName);
      });
    }
  });

  // I'll add a Wildcard selector to use later on. 😅 
  keywordsTitle.push("*");

  return keywordsTitle;
}



//TODO: Here I could just use the JS Set(), but I had no time to think better on what I were doing... 
const generateGenresSet = (movies: Movie[]): Genre[] => {
  const moviesGenres: any = []; // Creat a Set (will not allow duplicated values) 👀

  movies.forEach((movie) => {
    movie.genre.forEach((genre: string) => moviesGenres[genre] = 0) // Just to index em'
  });

  return Object.keys(moviesGenres) as Genre[];
}

export { generateKeyword, generateGenresSet };