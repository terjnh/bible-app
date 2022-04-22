import { combineReducers } from "redux";
import pokemonReducer from "./PokemonReducer";
import bibleReducer from "./BibleReducer";

const RootReducer = combineReducers({
    pokemon: pokemonReducer,
    bible: bibleReducer
});

export default RootReducer;