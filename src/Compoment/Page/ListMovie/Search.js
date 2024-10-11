import React, { useEffect, useState } from "react";
import PageMovie from "./PageMovie";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    const query = path.split("/search/")[1]; // lấy phần sau '/search/'
    setSearchQuery(query);
  }, []);
  return (
    <>
      <div className="headline">
        <h3>ONLINE STREAMING</h3>
        <h2>Search Movie: {searchQuery}</h2> 
      </div>
      <PageMovie></PageMovie>
    </>
  );
};

export default Search;
