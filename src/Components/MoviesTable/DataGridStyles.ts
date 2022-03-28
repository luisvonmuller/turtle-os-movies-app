import { GridValueFormatterParams } from "@mui/x-data-grid";

/* Data Grid Display Configurations */
const columns = [
  { field: "id", headerName: "id", width: 100 },
  { field: "title", headerName: "Title", width: 400 },
  { field: "year", headerName: "Year", width: 150 },
  {
    field: "runtime",
    headerName: "Runtime",
    type: "number",
    width: 130,
    valueFormatter: (params: GridValueFormatterParams) => {
      let totalMin = params.value as number;
      return `${Math.floor(totalMin / 60)}h ${totalMin % 60}min`;
    },
  },
  {
    field: "revenue",
    type: "number",
    headerName: "Revenue",
    width: 130,
    valueFormatter: (params: GridValueFormatterParams) => {
      let totalRev = params.value as number;
      return `$${totalRev}M`;
    },
  },
  { field: "rating", headerName: "Rating", width: 130 },
  {
    field: "genre",
    headerName: "Genres",
    width: 250,
    valueFormatter: (params: GridValueFormatterParams) => {
      let allGenres = (params.value as string[]).join(", ");
      return `${allGenres}`;
    },
  },
];

export default columns;