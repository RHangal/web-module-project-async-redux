import React, { useState } from "react";
import { connect } from "react-redux";
import { getGifs } from "../Actions";

function GifSearchForm(props) {
  const { getGifs } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    getGifs(searchTerm);
    setSearchTerm("");
  };

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={searchTerm} />
      <button>Search</button>
    </form>
  );
}

export default connect(null, { getGifs })(GifSearchForm);
