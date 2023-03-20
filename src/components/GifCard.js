import React from "react";

export default function GifCard(props) {
  const { url } = props.gif.images.original;
  const { title, rating } = props.gif;
  return (
    <div className="gif-card">
      <h2>Title: {title}</h2>
      <img src={`${url}`} />
      <h3>Rating: {rating}</h3>
    </div>
  );
}
