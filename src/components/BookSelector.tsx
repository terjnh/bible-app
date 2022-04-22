import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { BOOKS, CHAPTERS } from "../assets/definestrings";

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
    setAnchorEl(null);
    setSelectedBook(selected);
  };

  const getMaxChapter = (book: string) => {
    switch (book) {
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
      case BOOKS.JOSHUA:
        return CHAPTERS.JOSHUA;
      case BOOKS.JUDGES:
        return CHAPTERS.JUDGES;
      case BOOKS.RUTH:
        return CHAPTERS.RUTH;
      case BOOKS.SAMUEL1:
        return CHAPTERS.SAMUEL1;
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
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
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
      </Menu>
    </div>
  );
};

export default BookSelector;
