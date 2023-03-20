import { testData } from "../testData";
import { FETCH_START, FETCH_SUCCESS } from "../Actions";

const initialGifs = testData.data;

const initialState = {
  gifs: initialGifs,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        gifs: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
