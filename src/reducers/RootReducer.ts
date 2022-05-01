import { combineReducers } from "redux";
import bibleReducer from "./BibleReducer";
import esvReducer from "./EsvReducer";

const RootReducer = combineReducers({
    bible: bibleReducer,
    esv: esvReducer,
});

export default RootReducer;