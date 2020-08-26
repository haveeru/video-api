import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

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
  setSelectedVideo(video)
 }

  return (
    <div className="ui container">
      {" "}
      <SearchBar onSubmit={onTermSubmit} />
      <VideoDetail video={selectedVideo}/>
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
}

export default App;
