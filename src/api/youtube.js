import axios from "axios";

const KEY = "AIzaSyBg5VpORqbItkpjJB9q_P1SGYQ6cUA8o4c";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
