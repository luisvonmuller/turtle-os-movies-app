import React, { useState, useEffect } from "react";
/* Custom Components */
import MoviesTable from "./Components/MoviesTable";
import MoviesGenres from "./Components/MoviesGenres";
import MoviesSearch from "./Components/MoviesSearch";
import CommentBox from "./Components/CommentBox";

/* Basic layout */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Query } from "./Types";

function App() {
  const [query, setQuery] = useState<Query>({
    genre: undefined,
    title: undefined,
  });

  /* Global States - I could use ImmerJs or Redux for it but, since it was just some, theres no need. */
  const [desiredGenre, setDesiredGenre] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  /* Comment Box */
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState<string>("02aKsn1bnq3whaBMNbk8"); // This one is the default for debug propouses/tests.

  useEffect(() => {
    setDesiredGenre(desiredGenre);
    setTitle(title);
  }, [desiredGenre, title, movieId]);

  return (
    <>
      <CommentBox open={open} setOpen={setOpen} movieId={movieId} />
      <Box sx={{ margin: 2 }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4}>
            <MoviesSearch setQuery={setQuery} query={query} />
          </Grid>
          <Grid item xs={4}>
            <MoviesGenres setQuery={setQuery} query={query} />
          </Grid>
        </Grid>
      </Box>
      <MoviesTable query={query} setMovieId={setMovieId} setOpen={setOpen} />
    </>
  );
}

export default App;
