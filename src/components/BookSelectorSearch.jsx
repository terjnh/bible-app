import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { BOOKS, CHAPTERS } from "../assets/definestrings";
import { Button } from "@mui/material";

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a book name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton
      aria-label="search"
      onClick={() => {
        console.log("Search clicked");
      }}
    >
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
  }
};

const data = [
  BOOKS.GENESIS,
  BOOKS.EXODUS,
  BOOKS.LEVITICUS,
  BOOKS.NUMBERS,
  BOOKS.DEUTERONOMY,
  BOOKS.JOSHUA,
];

export default function BookSelectorSearch({ testProp }) {
  // console.log("testProp:", testProp);
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Button
        variant="contained"
        sx={{ display: "flex", mt: 1, ml: 20, mr: 6}}
        onClick={() => {
          console.log("dataFiltered:", dataFiltered[0]);
        }}
      >
        Confirm
      </Button>
      <div style={{ padding: 3 }}>
        {dataFiltered.map((d) => (
          <div
            className="text"
            style={{
              padding: 2,
              justifyContent: "normal",
              fontSize: 16,
              color: "blue",
              margin: 1,
              width: "300px",
              BorderColor: "green",
              borderWidth: "10px",
            }}
            key={d.id}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
