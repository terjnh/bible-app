import { Deflate } from "zlib";
import {
    EsvDispatchTypes,
    EsvType,
    ESV_SUCCESS,
    ESV_FAIL,
    ESV_LOADING,
} from "../actions/EsvActionTypes";

interface DefaultStateI {
    loading: boolean;
    esv?: EsvType;
}

const defaultState: DefaultStateI = {
    loading: false,
}

const esvReducer = (
    state: DefaultStateI = defaultState,
    action: EsvDispatchTypes
): DefaultStateI => {
    switch (action.type) {
        case ESV_FAIL:
          return {
            loading: false,
          };
        case ESV_LOADING:
          return {
            loading: true,
          };
        case ESV_SUCCESS:
          return {
            loading: false,
            esv: action.payload,
          };
        default:
            return state;
      }
};


export default esvReducer;