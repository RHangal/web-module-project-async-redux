import React from "react";
import GifCard from "./GifCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
  };
};

function GifList(props) {
  const { gifs } = props;
  return gifs.map((gif) => <GifCard key={gif.import_datetime} gif={gif} />);
}

export default connect(mapStateToProps)(GifList);
