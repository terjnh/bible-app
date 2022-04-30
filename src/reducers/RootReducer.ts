import { combineReducers } from "redux";
import pokemonReducer from "./PokemonReducer";
import bibleReducer from "./BibleReducer";
import esvReducer from "./EsvReducer";

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    bible: bibleReducer,
    esv: esvReducer,
});

export default RootReducer;