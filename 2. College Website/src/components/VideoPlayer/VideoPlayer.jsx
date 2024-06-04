import React, { useRef } from 'react'
import './videoPlayer.css'
import video from '../../assets/video.mp4'

const VideoPlayer = (props) => {

    const sideSpace = useRef();

    const removeVideo = (e) => {
        if(e.target == sideSpace.current){
            props.setPlay(false);
        }
    }

  return (
    <div ref={sideSpace} onClick={removeVideo} className={`video-player ${props.play ? '' : 'hide-video'}`}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
