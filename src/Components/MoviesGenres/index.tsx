import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { listGenres, Genre } from "../../Services/genres";
import { Query } from "../../Types";

interface MoviesGenresArgs {
  setQuery(query: Query): void;
  query: Query;
}

export default function MoviesGenres({ setQuery, query }: MoviesGenresArgs) {
  const [genre, setGenre] = useState<Genre[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setQuery({ title: query.title, genre: event.target.value as string });
  };

  const getGenres = async () => {
    const genres = await listGenres();
    setGenre(genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="select-movie-genre-label">Select Movie Genre</InputLabel>
      <Select
        labelId="select-movie-genre-label"
        id="select-movie-genre"
        label="Search by Movie Genre"
        onChange={handleChange}
      >
        {genre.map((genreElement) => {
          return (
            <MenuItem id={genreElement.genre} value={genreElement.genre}>
              {genreElement.genre}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
