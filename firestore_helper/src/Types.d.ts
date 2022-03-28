/* Movie Common Data Structure */
export type Movie = {
  id: string,
  year: string,
  votes: string,
  title: string,
  titleKeywords: string[],
  runtime: string,
  revenue: string,
  rating: string,
  rank: string,
  metascore: string,
  genre: string[],
  director: string,
  description: string,
  actors: string[],
  comments: string[],
};

export type Genre = string;