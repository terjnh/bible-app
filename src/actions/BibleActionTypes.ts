export const BIBLE_LOADING = "BIBLE_LOADING";
export const BIBLE_FAIL = "BIBLE_FAIL";
export const BIBLE_SUCCESS = "BIBLE_SUCCESS";

export type BibleType = {
  reference: string;
  verses: BibleVerse[];
  text: string;
};

export type BibleVerse = {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
};

export interface BibleLoading {
  type: typeof BIBLE_LOADING;
}

export interface BibleFail {
  type: typeof BIBLE_FAIL;
}

export interface BibleSuccess {
  type: typeof BIBLE_SUCCESS;
  payload: {
    reference: string;
    verses: BibleVerse[];
    text: string;
  };
}

export type BibleDispatchTypes = BibleLoading | BibleFail | BibleSuccess