import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { BOOKS, CHAPTERS } from "../assets/definestrings";
import { Button } from "@mui/material";

var filteredSearchQ = [];

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
    {/* <IconButton
      aria-label="search"
      onClick={() => {
        console.log("Search clicked");
      }}
    >
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton> */}
  </form>
);


const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    filteredSearchQ = data.filter((d) => d.toLowerCase().includes(query.toLowerCase()))
    console.log("filteredSearchQ:", filteredSearchQ.length)
    return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
  }
};

const data = [
  // Law
  BOOKS.GENESIS,
  BOOKS.EXODUS,
  BOOKS.LEVITICUS,
  BOOKS.NUMBERS,
  BOOKS.DEUTERONOMY,
  BOOKS.JOSHUA,
];

const getMaxChapter = (book) => {
  switch (book) {
    // Law
    case BOOKS.GENESIS:
      return CHAPTERS.GENESIS;
    case BOOKS.EXODUS:
      return CHAPTERS.EXODUS;
    case BOOKS.LEVITICUS:
      return CHAPTERS.LEVITICUS;
    case BOOKS.NUMBERS:
      return CHAPTERS.NUMBERS;
    case BOOKS.DEUTERONOMY:
      return CHAPTERS.DEUTERONOMY;
  }
};

export default function BookSelectorSearch({ testProp, updateBook2 }) {
  // console.log("testProp:", testProp);
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);
  const [isOneBookChosen, setIsOneBookChosen] = useState(false);

  const [selectedBook, setSelectedBook] = useState("");
  const [maxChapter, setMaxChapter] = useState(0);

  useEffect(() => {
    console.log("selectedBook changed");
    var maxChapNum = getMaxChapter(selectedBook);
    setMaxChapter(maxChapNum);
  }, [selectedBook]);

  useEffect(() => {
    console.log("selected book:", selectedBook, " | max chapter:", maxChapter);
    updateBook2(selectedBook, maxChapter);
  }, [maxChapter]);

  useEffect(() => {
    if(filteredSearchQ.length !== 1) {
      setIsOneBookChosen(false);
      console.log("search not narrowed down to 1 book yet")
    } else if(filteredSearchQ.length === 1) {
      setIsOneBookChosen(true);
      console.log("search narrowed to 1 book!")
    }
  }, [filteredSearchQ])

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Button
        variant="contained"
        sx={{ display: "flex", mt: 2, ml: 12, mr: 12 }}
        disabled={!isOneBookChosen}
        onClick={() => {
          // console.log("dataFiltered:", dataFiltered[0]);
          setSelectedBook(dataFiltered[0]);
        }}
      >
        Confirm
      </Button>
      <div style={{ padding: 2 }}>
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
