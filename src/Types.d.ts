import React from "react";

/* Search Fields Data Structure */
export type Query = {
  genre?: string;
  title?: string;
};

export type QueryContext = {
  query: Query,
  setQuery: React.Dispatch<React.SetStateAction<Query>>
}


/* Movie Common Data Structure */
export type Movie = {
  id: string,
  year: string,
  votes: string,
  title: string,
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

type Comment = {
  content: string;
}


