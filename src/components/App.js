import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("maharashtra");

  useEffect(() => {
    console.log(videos);
    setSelectedVideo(videos[0]);
  }, [videos]);
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // useEffect(() => {
  //   onTermSubmit("surfing");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   console.log(response.data.items);
  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  return (
    <div className="ui container">
      <div className="ui divider hidden"></div>
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ten wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="six wide column">
          <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};
export default App;
