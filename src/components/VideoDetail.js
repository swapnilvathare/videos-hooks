import "./VideoDetail.css";
import React from "react";

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoLink = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui card videoDetail">
      <div className="image">
        {/* <img src={video.snippet.thumbnails.high.url} alt="" /> */}
        <div className="ui embed">
          <iframe src={videoLink}></iframe>
        </div>
      </div>
      <div className="content">
        <a className="header">{video.snippet.title}</a>
        <div className="meta">
          <span className="date">{video.snippet.publishTime}</span>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  );
};

export default VideoDetail;
