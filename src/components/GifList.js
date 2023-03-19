import React from "react";
import GifCard from "./GifCard";

export default function GifList(props) {
  const { gifs } = props;
  return gifs.map((gif) => <GifCard gif={gif} />);
}
