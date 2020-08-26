import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video: { id, snippet }, onVideoSelect, video }) => {
  const { title, thumbnails } = snippet;

  return (
    <div div onClick={() => onVideoSelect(video)} className="video-item item">
      <img src={thumbnails.medium.url} alt="" className="ui image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
