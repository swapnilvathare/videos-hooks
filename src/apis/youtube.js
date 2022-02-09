import axios from "axios";

const KEY = "AIzaSyA9y72Rfn7bswDkJ6n-Fbef163QStpxFMA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
