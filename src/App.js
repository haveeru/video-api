import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

function App() {
  const onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  };

  return (
    <div className="ui container">
      {" "}
      <SearchBar onSubmit={onTermSubmit} />
    </div>
  );
}

export default App;
