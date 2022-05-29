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
    filteredSearchQ = data.filter((d) =>
      d.toLowerCase().includes(query.toLowerCase())
    );
    console.log("filteredSearchQ:", filteredSearchQ.length);
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
  // Old Testament Narrative
  BOOKS.JOSHUA,
  BOOKS.JUDGES,
  BOOKS.RUTH,
  BOOKS.SAMUEL1,
  BOOKS.SAMUEL2,
  BOOKS.KINGS1,
  BOOKS.KINGS2,
  BOOKS.CHRONICLES1,
  BOOKS.CHRONICLES2,
  BOOKS.EZRA,
  BOOKS.NEHEMIAH,
  BOOKS.ESTHER,
  // Wisdom Literature / "Poetry"
  BOOKS.JOB,
  BOOKS.PSALMS,
  BOOKS.PROVERBS,
  BOOKS.ECCLESIASTES,
  BOOKS.SONGOFSOLOMON,
  // Major Prophets
  BOOKS.ISAIAH,
  BOOKS.JEREMIAH,
  BOOKS.LAMENTATIONS,
  BOOKS.EZEKIEL,
  BOOKS.DANIEL,
  // Minor Prophets
  BOOKS.HOSEA,
  BOOKS.JOEL,
  BOOKS.AMOS,
  BOOKS.OBADIAH,
  BOOKS.JONAH,
  BOOKS.MICAH,
  BOOKS.NAHUM,
  BOOKS.HABAKKUK,
  BOOKS.ZEPHANIAH,
  BOOKS.HAGGAI,
  BOOKS.ZECHARIAH,
  BOOKS.MALACHI,

  // NEW TESTAMENT
  // Gospels
  BOOKS.MATTHEW,
  BOOKS.MARK,
  BOOKS.LUKE,
  BOOKS.JOHN,
  // History
  BOOKS.ACTS,
  // Pauline Epistles
  BOOKS.ROMANS,
  BOOKS.CORINTHIANS1,
  BOOKS.CORINTHIANS2,
  BOOKS.GALATIANS,
  BOOKS.EPHESIANS,
  BOOKS.PHILIPPIANS,
  BOOKS.COLOSSIANS,
  BOOKS.THESSALONIANS1,
  BOOKS.THESSALONIANS2,
  BOOKS.TIMOTHY1,
  BOOKS.TIMOTHY2,
  BOOKS.TITUS,
  BOOKS.PHILEMON,
  // General Epistles
  BOOKS.HEBREWS,
  BOOKS.JAMES,
  BOOKS.PETER1,
  BOOKS.PETER2,
  BOOKS.JOHN1,
  BOOKS.JOHN2,
  BOOKS.JOHN3,
  BOOKS.JUDE,
  // Apocalyptic Writings (Prophecy)
  BOOKS.REVELATION,
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
    // Old Testament Narrative
    case BOOKS.JOSHUA:
      return CHAPTERS.JOSHUA;
    case BOOKS.JUDGES:
      return CHAPTERS.JUDGES;
    case BOOKS.RUTH:
      return CHAPTERS.RUTH;
    case BOOKS.SAMUEL1:
      return CHAPTERS.SAMUEL1;
    case BOOKS.SAMUEL2:
      return CHAPTERS.SAMUEL2;
    case BOOKS.KINGS1:
      return CHAPTERS.KINGS1;
    case BOOKS.KINGS2:
      return CHAPTERS.KINGS2;
    case BOOKS.CHRONICLES1:
      return CHAPTERS.CHRONICLES1;
    case BOOKS.CHRONICLES2:
      return CHAPTERS.CHRONICLES2;
    case BOOKS.EZRA:
      return CHAPTERS.EZRA;
    case BOOKS.NEHEMIAH:
      return CHAPTERS.NEHEMIAH;
    case BOOKS.ESTHER:
      return CHAPTERS.ESTHER;
    // Wisdom Literature / "Poetry"
    case BOOKS.JOB:
      return CHAPTERS.JOB;
    case BOOKS.PSALMS:
      return CHAPTERS.PSALMS;
    case BOOKS.PROVERBS:
      return CHAPTERS.PROVERBS;
    case BOOKS.ECCLESIASTES:
      return CHAPTERS.ECCLESIASTES;
    case BOOKS.SONGOFSOLOMON:
      return CHAPTERS.SONGOFSOLOMON;
    // Major Prophets
    case BOOKS.ISAIAH:
      return CHAPTERS.ISAIAH;
    case BOOKS.JEREMIAH:
      return CHAPTERS.JEREMIAH;
    case BOOKS.LAMENTATIONS:
      return CHAPTERS.LAMENTATIONS;
    case BOOKS.EZEKIEL:
      return CHAPTERS.EZEKIEL;
    case BOOKS.DANIEL:
      return CHAPTERS.DANIEL;
    // Minor Prophets
    case BOOKS.HOSEA:
      return CHAPTERS.HOSEA;
    case BOOKS.JOEL:
      return CHAPTERS.JOEL;
    case BOOKS.AMOS:
      return CHAPTERS.AMOS;
    case BOOKS.OBADIAH:
      return CHAPTERS.OBADIAH;
    case BOOKS.JONAH:
      return CHAPTERS.JONAH;
    case BOOKS.MICAH:
      return CHAPTERS.MICAH;
    case BOOKS.NAHUM:
      return CHAPTERS.NAHUM;
    case BOOKS.HABAKKUK:
      return CHAPTERS.HABAKKUK;
    case BOOKS.ZEPHANIAH:
      return CHAPTERS.ZEPHANIAH;
    case BOOKS.HAGGAI:
      return CHAPTERS.HAGGAI;
    case BOOKS.ZECHARIAH:
      return CHAPTERS.ZECHARIAH;
    case BOOKS.MALACHI:
      return CHAPTERS.MALACHI;

    // NEW TESTAMENT
    // Gospels
    case BOOKS.MATTHEW:
      return CHAPTERS.MATTHEW;
    case BOOKS.MARK:
      return CHAPTERS.MARK;
    case BOOKS.LUKE:
      return CHAPTERS.LUKE;
    case BOOKS.JOHN:
      return CHAPTERS.JOHN;
    // History
    case BOOKS.ACTS:
      return CHAPTERS.ACTS;
    // Pauline Epistles
    case BOOKS.ROMANS:
      return CHAPTERS.ROMANS;
    case BOOKS.CORINTHIANS1:
      return CHAPTERS.CORINTHIANS1;
    case BOOKS.CORINTHIANS2:
      return CHAPTERS.CORINTHIANS2;
    case BOOKS.GALATIANS:
      return CHAPTERS.GALATIANS;
    case BOOKS.EPHESIANS:
      return CHAPTERS.EPHESIANS;
    case BOOKS.PHILIPPIANS:
      return CHAPTERS.PHILIPPIANS;
    case BOOKS.COLOSSIANS:
      return CHAPTERS.COLOSSIANS;
    case BOOKS.THESSALONIANS1:
      return CHAPTERS.THESSALONIANS1;
    case BOOKS.THESSALONIANS2:
      return CHAPTERS.THESSALONIANS2;
    case BOOKS.TIMOTHY1:
      return CHAPTERS.TIMOTHY1;
    case BOOKS.TIMOTHY2:
      return CHAPTERS.TIMOTHY2;
    case BOOKS.TITUS:
      return CHAPTERS.TITUS;
    case BOOKS.PHILEMON:
      return CHAPTERS.PHILEMON;
    // General Epistles
    case BOOKS.HEBREWS:
      return CHAPTERS.HEBREWS;
    case BOOKS.JAMES:
      return CHAPTERS.JAMES;
    case BOOKS.PETER1:
      return CHAPTERS.PETER1;
    case BOOKS.PETER2:
      return CHAPTERS.PETER2;
    case BOOKS.JOHN1:
      return CHAPTERS.JOHN1;
    case BOOKS.JOHN2:
      return CHAPTERS.JOHN2;
    case BOOKS.JOHN3:
      return CHAPTERS.JOHN3;
    case BOOKS.JUDE:
      return CHAPTERS.JUDE;
    // Apocalyptic Writings (Prophecy)
    case BOOKS.REVELATION:
      return CHAPTERS.REVELATION;
    default:
      return 0;
  }
};

export default function BookSelectorSearch({ testProp, bookUpdate }) {
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
    bookUpdate(selectedBook, maxChapter);
  }, [maxChapter]);

  useEffect(() => {
    if (filteredSearchQ.length !== 1) {
      setIsOneBookChosen(false);
      console.log("search not narrowed down to 1 book yet");
    } else if (filteredSearchQ.length === 1) {
      setIsOneBookChosen(true);
      console.log("search narrowed to 1 book!");
    }
  }, [filteredSearchQ]);

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
    </div>
  );
}
