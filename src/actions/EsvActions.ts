import { Dispatch } from "redux";
import {
  ESV_FAIL,
  ESV_LOADING,
  ESV_SUCCESS,
  EsvDispatchTypes,
} from "./EsvActionTypes";
import axios from "axios";

export const GetEsvVerse =
  (verse: string) => async (dispatch: Dispatch<EsvDispatchTypes>) => {
    const config = {
      headers: { Authorization: process.env.CROSSWAY_API_KEY },
    };

    try {
      dispatch({
        type: ESV_LOADING,
      });

      const crosswayApiKey = "Token " + process.env.REACT_APP_CROSSWAY_API_KEY
      const res = await axios
        .get(`https://api.esv.org/v3/passage/text/?q=${verse}`, {
          headers: {
            Authorization: crosswayApiKey,
          },
        })
        .then((response) => {
          // if request is good...
          console.log("if the request is good:", response.data);
          return response;
        })
        .catch((error) => {
          console.log("error " + error);
          return error;
        });

      dispatch({
        type: ESV_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: ESV_FAIL,
      });
    }
  };
