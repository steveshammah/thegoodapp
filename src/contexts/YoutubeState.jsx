import { useReducer, useEffect, useState } from "react";
import YoutubeContext from "./youtube-context";
import YoutubeReducer from "../reducers/YoutubeReducer";

// youtube API config
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // SR-Key
const channelID = process.env.REACT_APP_CHANNEL_ID; //TGC
const videoCount = 50;
const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

const YoutubeState = (props) => {
  const [Videos, setVideos] = useState([]);

  const initialState = {
    allVideos: [],
  };
  const [state, dispatch] = useReducer(YoutubeReducer, initialState);

  useEffect(() => {
    fetchData().catch((error) => {
      console.log("The Following Error Occurred", error.message);
      return;
    });

    return () => {};
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // set allVideos Initial state
    state.allVideos = data.items;
    setVideos(state.allVideos);
  };

  const filterVideos = (show) => {
    dispatch({ type: "FILTER VIDEO", payload: show });
  };
  return (
    <YoutubeContext.Provider
      value={{
        allVideos: Videos,
        filterVideos,
      }}>
      {props.children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeState;