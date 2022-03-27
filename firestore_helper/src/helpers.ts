/* Generates a Keyword oriented Array for querying movies title, to simulate a like %str% on FireBase */
const generateKeyword = (title: string): string[] => {
  const keywordsTitle: string[] = [];
  const lowerCasedTitle: string = title.toLowerCase(); /* Unless I want to get a O(nˆ3+(1)) i'll need to take it to lower case */
  keywordsTitle.push(lowerCasedTitle); // It should always have at least the full name... 😅

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
  return keywordsTitle;
}


export { generateKeyword };