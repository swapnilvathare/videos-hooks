import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const videoInfo = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="ui card horizontal">
      <div className="image">
        <img src={videoInfo.thumbnails.medium.url} alt="" />
      </div>
      <div className="content">
        <div className="header">{videoInfo.title}</div>
        <div className="meta">
          <span className="date">{videoInfo.publishTime}</span>
        </div>
        {/* <div className="description">{videoInfo.description}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
