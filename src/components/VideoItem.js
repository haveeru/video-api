import React from 'react';
import './VideoItem.css'

const VideoItem = ({video: {id, snippet}}) => {
    const {title, thumbnails} = snippet;
    console.log(id.videoId)

    return (
        <div className="video-item item">
            <img src={thumbnails.medium.url} alt="" className="ui image"/>
            <div className="content">
                <div className="header">{title}</div>
            </div>
            
        </div>
    );
};

export default VideoItem;