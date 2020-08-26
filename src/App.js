import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
   const response = await  youtube.get('/search', {
      params: {
        q: term
      }
    })

    setVideos(response.data.items)
  };

 const onVideoSelect = (video) => {
  console.log('from the app ', video)
 }

  return (
    <div className="ui container">
      {" "}
      <SearchBar onSubmit={onTermSubmit} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
}

export default App;
