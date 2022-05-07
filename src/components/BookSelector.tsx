import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Divider from '@mui/material/Divider';

import { BOOKS, CHAPTERS } from "../assets/definestrings";
import { ClickAwayListener } from "@mui/material";

interface SelectorProps {
  book: string;
  updateBook: (...args: any) => void;
  setChapters: (arg: number) => void;
}

const BookSelector: React.FC<SelectorProps> = ({
  book,
  updateBook,
  setChapters,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedBook, setSelectedBook] = useState("");
  const [maxChapter, setMaxChapter] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selected: any) => {
    console.log("selected:", selected);
    setAnchorEl(null);
    setSelectedBook(selected);
  };

  const getMaxChapter = (book: string) => {
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
      // Wisdom Literature
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
      default:
        return 0;
    }
  };

  useEffect(() => {
    console.log("selectedBook changed");
    var maxChapNum: number = getMaxChapter(selectedBook);
    setMaxChapter(maxChapNum);
  }, [selectedBook]);

  useEffect(() => {
    updateBook(selectedBook, maxChapter);
  }, [maxChapter]);

  return (
    <div>
      <Button
        id="basic-button"
        variant="outlined"
        color="success"
        endIcon={<MenuBookIcon />}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selectedBook === "" ? "Select a book" : selectedBook}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          handleClose(selectedBook);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* Law */}
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.GENESIS);
          }}
        >
          Genesis
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.EXODUS);
          }}
        >
          Exodus
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.LEVITICUS);
          }}
        >
          Leviticus
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.NUMBERS);
          }}
        >
          Numbers
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.DEUTERONOMY);
          }}
        >
          Deuteronomy
        </MenuItem>
        <Divider />
        {/* Old Testament Narrative */}
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.JOSHUA);
          }}
        >
          Joshua
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.JUDGES);
          }}
        >
          Judges
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.RUTH);
          }}
        >
          Ruth
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.SAMUEL1);
          }}
        >
          1 Samuel
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.SAMUEL2);
          }}
        >
          2 Samuel
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.KINGS1);
          }}
        >
          1 Kings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.KINGS2);
          }}
        >
          2 Kings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.CHRONICLES1);
          }}
        >
          1 Chronicles
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.CHRONICLES2);
          }}
        >
          2 Chronicles
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.EZRA);
          }}
        >
          Ezra
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.NEHEMIAH);
          }}
        >
          Nehemiah
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.ESTHER);
          }}
        >
          Esther
        </MenuItem>
        <Divider />
        {/* Wisdom Literature */}
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.JOB);
          }}
        >
          Job
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.PSALMS);
          }}
        >
          Psalms
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.PROVERBS);
          }}
        >
          Proverbs
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.ECCLESIASTES);
          }}
        >
          Ecclesiastes
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.SONGOFSOLOMON);
          }}
        >
          Song Of Solomon
        </MenuItem>
        <Divider />
        {/* Major Prophets */}
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.ISAIAH);
          }}
        >
          Isaiah
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.JEREMIAH);
          }}
        >
          Jeremiah
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.LAMENTATIONS);
          }}
        >
          Lamentations
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.EZEKIEL);
          }}
        >
          Ezekiel
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(BOOKS.DANIEL);
          }}
        >
          Daniel
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BookSelector;
