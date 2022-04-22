import {
  BibleDispatchTypes,
  BibleType,
  BIBLE_SUCCESS,
  BIBLE_FAIL,
  BIBLE_LOADING,
} from "../actions/BibleActionTypes";

interface DefaultStateI {
  loading: boolean;
  bible?: BibleType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const bibleReducer = (
  state: DefaultStateI = defaultState,
  action: BibleDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case BIBLE_FAIL:
      return {
        loading: false,
      };
    case BIBLE_LOADING:
      return {
        loading: true,
      };
    case BIBLE_SUCCESS:
      return {
        loading: false,
        bible: action.payload,
      };
    default:
        return state;
  }
};

export default bibleReducer;
