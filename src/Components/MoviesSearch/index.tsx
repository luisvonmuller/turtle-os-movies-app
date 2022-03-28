import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import { Query } from "../../Types";

interface MoviesSearchArgs {
  setQuery(query: Query): void;
  query: Query;
}

export default function MoviesSearch({ setQuery, query }: MoviesSearchArgs) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({ title: event.target.value, genre: query.genre });
  };

  return (
    <FormControl fullWidth>
      <TextField
        id="outlined-basic"
        label="Search Movie"
        placeholder="Search Movie By Title"
        value={query.title}
        variant="outlined"
        onChange={handleChange}
      />
    </FormControl>
  );
}
