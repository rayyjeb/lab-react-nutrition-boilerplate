import React from "react";

const Search = (props) => {
  const { setSearch } = props;
  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        style={{
          width: "400px",
          padding: "10px 40px",
          fontSize: "large",
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search food here"
      />
    </>
  );
};

export default Search;
