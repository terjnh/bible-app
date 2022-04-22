import { Dispatch } from "redux";
import {
  BIBLE_FAIL,
  BIBLE_LOADING,
  BIBLE_SUCCESS,
  BibleDispatchTypes,
} from "./BibleActionTypes";
import axios from "axios";

export const GetVerse =
  (verse: string) => async (dispatch: Dispatch<BibleDispatchTypes>) => {
    try {
      dispatch({
        type: BIBLE_LOADING,
      });

      const res = await axios.get(`https://bible-api.com/${verse}`);

      dispatch({
        type: BIBLE_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: BIBLE_FAIL,
      });
    }
  };


// export const GetVerses =
//   (verses: object[])
