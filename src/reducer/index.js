import { testData } from "../testData";

const initialGifs = testData.data;

const initialState = {
  gifs: initialGifs,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
