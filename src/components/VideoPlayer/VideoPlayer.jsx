import React, { useRef } from "react";
import "./VideoPlayer.css";
import campus_video from "../../assets/campus-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = () => {
    if (event.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={campus_video} autoplay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
