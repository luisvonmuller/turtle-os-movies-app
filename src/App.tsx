import React, { useState, useEffect } from "react";
/* Custom Components */
import MoviesTable from "./Components/MoviesTable";
import MoviesGenres from "./Components/MoviesGenres";
import MoviesSearch from "./Components/MoviesSearch";
import CommentBox from "./Components/CommentBox";

/* Basic layout */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

/* App Context */
import { AppContextProvider } from "./AppContext";

function App() {
  /* Comment Box */
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState<string>(""); // This one is the default for debug propouses/tests.

  return (
    <AppContextProvider>
      <CommentBox open={open} setOpen={setOpen} movieId={movieId} />
      <Box sx={{ margin: 2 }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={6}>
            <MoviesSearch />
          </Grid>
          <Grid item xs={6}>
            <MoviesGenres />
          </Grid>
        </Grid>
      </Box>
      <MoviesTable setMovieId={setMovieId} setOpen={setOpen} />
    </AppContextProvider>
  );
}

export default App;
