import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootStore } from "./Store";
import { GetPokemon } from "./actions/PokemonActions";
import { GetVerse } from "./actions/BibleActions";

import BookSelector from "./components/BookSelector";
import ChapterSelector from "./components/ChapterSelector";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { CHAPTERS, BOOKS } from "./assets/definestrings";
import VerseSelector from "./components/VerseSelector";

function App() {
  const dispatch = useDispatch();

  const [bibleName, setBibleName] = useState("");
  const [isLoadingBible, setIsLoadingBible] = useState(false);
  const bibleState = useSelector((state: RootStore) => state.bible);

  const [book, setBook] = useState("");
  const [chapters, setChapters] = useState(0);
  const [verses, setVerses] = useState<any>(0);
  const [isBookChosen, setIsBookChosen] = useState(false);
  const [isChapterChosen, setIsChapterChosen] = useState(false);
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);

  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentVerses, setCurrentVerses] = useState<any>([]);
  const [displayVerses, setDiplayVerses] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBibleName(event.target.value);
  };
  const handleSubmit = () => {
    try {
      setIsLoadingBible(true);
      dispatch(GetVerse(bibleName));
    } catch (e) {
      console.log("error loading verse");
    } finally {
      setIsLoadingBible(false);
    }
  };

  const updateBook = (book: string, maxChapter: number) => {
    setIsBookChosen(true);
    setBook(book);
    setChapters(maxChapter);
    console.log("book:", book, ", maxChapter:", maxChapter);
    // updateMaxChapter(book);
  };
  // const updateMaxChapter = (book: string) => {
  //   switch (book) {
  //     case BOOKS.GENESIS:
  //       return setChapters(CHAPTERS.GENESIS);
  //     case BOOKS.EXODUS:
  //       return setChapters(CHAPTERS.EXODUS);
  //     default:
  //       return setChapters(0);
  //   }
  // };

  const updateChapter = (chapter: number) => {
    setCurrentChapter(chapter);
    setIsChapterChosen(true);
    var getChapterAndBook = book + "+" + chapter;
    dispatch(GetVerse(getChapterAndBook));
    console.log("Current book: ", book, "| Current chapter:", chapter);

    // Reset displayVerse to ""
    setDiplayVerses("Please SELECT verses");
  };
  const chapterChanged = () => {
    setIsChapterChosen(false);
    setDiplayVerses("Chapter changed, please confirm chapter...");
  };

  const updateVerses = (verses: number[]) => {
    setCurrentVerses(verses);
  };

  const resetSetBookAndSetChapterButtons = () => {
    setIsBookChosen(false);
    setIsChapterChosen(false);
  };

  // Page refresh
  useEffect(() => {
    resetSetBookAndSetChapterButtons();
  }, []);

  useEffect(() => {
    setDiplayVerses("Book changed, please re-select chapter...");
    setIsChapterChosen(false);
  }, [book]);

  useEffect(() => {
    console.log(
      "min verse:",
      bibleState.bible?.verses[currentVerses[0] - 1].verse
    );
    console.log(
      "max verse:",
      bibleState.bible?.verses[currentVerses[1] - 1].verse
    );
    const fromVerse = bibleState.bible?.verses[currentVerses[0] - 1].verse;
    const toVerse = bibleState.bible?.verses[currentVerses[1] - 1].verse;
    if (fromVerse && toVerse) {
      const rangeVerse = toVerse - fromVerse;
    }
    let versesString: string = "";
    if (fromVerse && toVerse) {
      for (let i = fromVerse - 1; i < toVerse; i++) {
        let verseNum = i + 1;
        versesString =
          versesString +
          verseNum +
          " " +
          bibleState.bible?.verses[i].text +
          "\n";
      }
    }
    setDiplayVerses(versesString);
  }, [currentVerses]);

  useEffect(() => {
    console.log("API get:", bibleState.bible?.reference);
    // Get number of verses from book+chapter selected
    setVerses(bibleState.bible?.verses.length);
    if(!bibleState.bible?.reference){
      console.log("set-loading-FALSE")
      setIsLoadingVerses(false)
    } else if(bibleState.bible?.reference) {
      console.log("set-loading-TRUE")
      setIsLoadingVerses(true)
    }
    console.log("isLoadingVerses:", isLoadingVerses)
  }, [bibleState]);

  return (
    <div className="App">
      <Box sx={{ margin: "auto", width: "100%", maxWidth: 800 }}>
        <Typography sx={{ mt: 6 }} variant="h3" component="div" gutterBottom>
          World English Bible App
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Please select book and chapter as needed
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} sx={{ display: "flex", mt: 4 }} justifyContent="center">
            <BookSelector
              book={book}
              updateBook={updateBook}
              setChapters={setChapters}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex", mt: 4 }} justifyContent="center">
            <ChapterSelector
              maxChapter={chapters}
              updateChapter={updateChapter}
              isBookChosen={isBookChosen}
              chapterChanged={chapterChanged}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex", mt: 4 }} justifyContent="center">
            <VerseSelector
              verses={verses}
              updateVerses={updateVerses}
              isChapterChosen={isChapterChosen}
              isLoadingVerses={isLoadingVerses}
            />
          </Grid>
        </Grid>

        <Box m={2} pt={3}>
          {bibleState.bible && (
            <div>
              <br />
              <Typography variant="body1" component="div">
                {displayVerses}
              </Typography>
            </div>
          )}
        </Box>

        <Box id="temporarySpacer" sx={{ width: "100%", height: "500px" }}></Box>

        {/* DEBUGGING */}
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <p>Used for debugging:</p>
            <TextField
              fullWidth
              id="bibleverse-search-field"
              label="Type here"
              variant="filled"
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={3} sx={{ mt: 6 }}>
            <Button
              sx={{ margin: "auto", mt: 1.5 }}
              variant="contained"
              onClick={handleSubmit}
            >
              {isLoadingBible ? "Searching..." : "Search"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
