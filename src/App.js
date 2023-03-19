import React from "react";
import "./App.css";
import { connect } from "react-redux";
import GifList from "./components/GifList";
const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
    loading: state.loading,
  };
};

function App(props) {
  console.log(props);
  const { gifs, loading } = props;
  return (
    <div className="App">
      Async Redux Project
      <GifList gifs={gifs} />
    </div>
  );
}

export default connect(mapStateToProps)(App);
