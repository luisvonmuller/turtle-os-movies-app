import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { firestoreMoviesQuery } from "../../Services/movies";
import { Movie, Query } from "../../Types";
import collumStyles from "./DataGridStyles";
import AppContext from "../../AppContext";

interface MoviesDataGrid {
  setMovieId(movieId: string): void;
  setOpen(open: boolean): void;
}

export default function MoviesTable({ setMovieId, setOpen }: MoviesDataGrid) {
  const [rows, setRows] = useState<Movie[]>([]);
  const { query } = React.useContext(AppContext); // Global Context...

  const getMovies = async (query: Query) => {
    setRows(await firestoreMoviesQuery(query));
  };

  useEffect(() => {
    getMovies(query);
  }, [query]);

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={collumStyles}
        columnVisibilityModel={{
          id: false,
        }}
        pageSize={20}
        rowsPerPageOptions={[20]}
        onSelectionModelChange={(ids) => {
          const selectedId = ids[0] as unknown as string; // Get the Selected Row Id.
          rows.filter((row) => {
            if (selectedId === row.id.toString()) {
              setMovieId(ids[0] as unknown as string);
              setOpen(true);
            }
            return true;
          });
        }}
      />{" "}
    </div>
  );
}
