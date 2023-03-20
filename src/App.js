import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import GifList from "./components/GifList";
import GifSearchForm from "./components/GifSearchForm";
import { fetchStart, fetchSuccess, getGifs } from "./Actions";

export const URL = (searchTerm) =>
  `https://api.giphy.com/v1/gifs/search?api_key=PPkyMBCwPXgztm52e8iMnSfxCgf9wrMg&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapActionsToProps = () => {
  return {
    fetchStart: fetchStart,
    fetchSuccess: fetchSuccess,
    getGifs: getGifs,
  };
};

function App(props) {
  console.log(props);
  const { loading, error, fetchStart, fetchSuccess, getGifs } = props;
  useEffect(() => {
    getGifs("cat");
  }, []);
  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <GifSearchForm />
      {error !== "" && <h3>{error}</h3>}
      {loading ? <h3>...Page is loading</h3> : <GifList />}
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps())(App);
