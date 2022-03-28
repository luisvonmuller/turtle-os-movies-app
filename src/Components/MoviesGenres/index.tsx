import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { listGenres, Genre } from "../../Services/genres";
import AppContext from "../../AppContext";

export default function MoviesGenres() {
  const [genre, setGenre] = useState<Genre[]>([]); // Component State to handle Change.
  const { query, setQuery } = React.useContext(AppContext); // Global Context...

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
        defaultValue="all"
        labelId="select-movie-genre-label"
        id="select-movie-genre"
        label="Search by Movie Genre"
        onChange={handleChange}
      >
        <MenuItem selected={true} id="All" value={"all"}>
          All Genres
        </MenuItem>
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
