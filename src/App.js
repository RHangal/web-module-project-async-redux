import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import GifList from "./components/GifList";
import GifSearchForm from "./components/GifSearchForm";
import { fetchStart, fetchSuccess } from "./Actions";
import axios from "axios";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=PPkyMBCwPXgztm52e8iMnSfxCgf9wrMg&q=dog&limit=10&offset=0&rating=g&lang=en";

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
  };
};

function App(props) {
  console.log(props);
  const { loading, error, fetchStart, fetchSuccess } = props;
  useEffect(() => {
    fetchStart();
    axios.get(URL).then((res) => {
      fetchSuccess(res.data.data);
    });
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
