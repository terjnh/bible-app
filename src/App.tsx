import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootStore } from "./Store";
import { GetVerse } from "./actions/BibleActions";
import { GetEsvVerse } from "./actions/EsvActions";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  CHAPTERS,
  BOOKS,
  COPYRIGHT_TEXT_LN1,
  COPYRIGHT_TEXT_LN2,
} from "./assets/definestrings";
import BookSelector from "./components/BookSelector";
import ChapterSelector from "./components/ChapterSelector";
import CustomizedSnackbars from "./components/CustomizedSnackbars";
import VerseSelector from "./components/VerseSelector";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import BookSelectorSearch from "./components/BookSelectorSearch";

function App() {
  const dispatch = useDispatch();

  const [bibleName, setBibleName] = useState("");
  const [isLoadingBible, setIsLoadingBible] = useState(false);
  const bibleState = useSelector((state: RootStore) => state.bible);
  const esvState = useSelector((state: RootStore) => state.esv);

  const [book, setBook] = useState("");
  const [chapters, setChapters] = useState(0);
  const [verses, setVerses] = useState<any>(0);
  const [isBookChosen, setIsBookChosen] = useState(false);
  const [isChapterChosen, setIsChapterChosen] = useState(false);
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);

  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentVerses, setCurrentVerses] = useState<any>([]);
  const [isInvalidChapter, setIsInvalidChapter] = useState(false);

  const [esvDisplayVerses, setEsvDisplayVerses] = useState<string>("");

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

  const updateChapter = (chapter: number) => {
    setIsInvalidChapter(false);
    if (chapter > chapters) {
      console.log("Invalid chapter -> higher than max chapter for this book");
      console.log("TODO: implement error toast here..");
      setIsInvalidChapter(true);
    }
    setCurrentChapter(chapter);
    setIsChapterChosen(true);
    var getChapterAndBook = book + "+" + chapter;
    dispatch(GetVerse(getChapterAndBook));
    console.log("Current book: ", book, "| Current chapter:", chapter);

    // dispatch(GetEsvVerse(getChapterAndBook))

    // Reset displayVerse to ""
    setEsvDisplayVerses("Please SELECT verses");
  };
  const chapterChanged = () => {
    setIsChapterChosen(false);
    setEsvDisplayVerses("Chapter changed, please confirm chapter...");
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
    setEsvDisplayVerses("Book changed, please re-select chapter...");
    setIsChapterChosen(false);
  }, [book]);

  useEffect(() => {
    console.log("current book: ", book);
    console.log("current chapter: ", currentChapter);
    console.log("current verses:", currentVerses);
    var reformatVerses = currentVerses[0] + "-" + currentVerses[1];
    var queryBookChapterVerses =
      book + "+" + currentChapter + ":" + reformatVerses;
    dispatch(GetEsvVerse(queryBookChapterVerses));
  }, [currentVerses]);

  useEffect(() => {
    console.log("API get:", bibleState.bible?.reference);
    // Get number of verses from book+chapter selected
    setVerses(bibleState.bible?.verses.length);
    if (!bibleState.bible?.reference) {
      console.log("set-loading-FALSE");
      setIsLoadingVerses(false);
    } else if (bibleState.bible?.reference) {
      console.log("set-loading-TRUE");
      setIsLoadingVerses(true);
    }
    console.log("isLoadingVerses:", isLoadingVerses);
  }, [bibleState]);

  useEffect(() => {
    const selectedEsvVerses = esvState.esv?.passages[0];
    // console.log("selectedEsvVerses:", selectedEsvVerses);
    selectedEsvVerses
      ? setEsvDisplayVerses(selectedEsvVerses)
      : setEsvDisplayVerses("");
  }, [esvState]);

  return (
    <div className="App">
      <Box sx={{ margin: "auto", width: "100%", maxWidth: 800 }}>
        <Typography sx={{ mt: 6 }} variant="h3" component="div" gutterBottom>
          ESV App
        </Typography>

        <Grid
          item
          xs={12}
          sm={12}
          sx={{ display: "flex", mt: 2 }}
          justifyContent="center"
        >
          <ResponsiveAppBar />
        </Grid>

        <Typography sx={{ mt: 4 }} variant="h5" component="div" gutterBottom>
          Please select book and chapter as needed
        </Typography>

        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", mt: 8 }}
            justifyContent="center"
          >
            <BookSelector
              book={book}
              updateBook={updateBook}
              setChapters={setChapters}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", mt: 4 }}
            justifyContent="center"
          >
            <ChapterSelector
              maxChapter={chapters}
              updateChapter={updateChapter}
              isBookChosen={isBookChosen}
              chapterChanged={chapterChanged}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{ display: "flex", mt: 4 }}
            justifyContent="center"
          >
            <VerseSelector
              verses={verses}
              updateVerses={updateVerses}
              isChapterChosen={isChapterChosen}
              isLoadingVerses={isLoadingVerses}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", mt: 8 }}
            justifyContent="center"
          >
            <BookSelectorSearch 
              testProp="testProp123"
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          sx={{ display: "flex", mt: 4 }}
          justifyContent="center"
        >
          <CustomizedSnackbars isInvalidChapter={isInvalidChapter} />
        </Grid>

        <Box m={2} pt={3}>
          {bibleState.bible && (
            <div>
              <br />
              <Typography variant="body1" component="div">
                {esvDisplayVerses}
              </Typography>
            </div>
          )}
        </Box>

        <Box
          id="temporarySpacer1"
          sx={{ width: "100%", height: "150px" }}
        ></Box>

        <Box m={2} pt={2}>
          {bibleState.bible && (
            <div>
              <br />
              <Typography variant="body2" component="div">
                {COPYRIGHT_TEXT_LN1}
                {COPYRIGHT_TEXT_LN2}
              </Typography>
            </div>
          )}
        </Box>

        <Box
          id="temporarySpacer2"
          sx={{ width: "100%", height: "500px" }}
        ></Box>
      </Box>
    </div>
  );
}

export default App;
