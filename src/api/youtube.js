import axios from "axios";

const KEY = "AIzaSyAdx6bmHFrISm7bfVZ3xbrs005PQLdu8H0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
