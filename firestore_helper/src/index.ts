// import { populateMoviesCollection } from './populateMoviesCollection';
import db from './firestoreDb';

const simulateSearchQuery = async (title: string) => {
  const moviesCollectionRef = db.collection('movies');
  console.log("Searching for: ");
  console.log(title.toLowerCase());
  const snapshot = await moviesCollectionRef.where('titleKeywords', 'array-contains', title.toLowerCase()).get();
  /* @ts-ignore */
  snapshot.forEach((doc) => console.log(doc.data()));
}


// import { populateMoviesCollection } from './populateMoviesCollection';
import { populateGenresCollection } from './populateGenresCollection';

(async () => {
  //! Uncomment the line below to populate all the desired Collections... 

  // await populateMoviesCollection();
  // await populateGenresCollection();

  // let query: string = "lone";
  // await simulateSearchQuery(query);
})();
