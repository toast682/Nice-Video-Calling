import React from "react";
import io from 'socket.io-client'

function VideoCall() {
    const socket = io('http://localhost:5000/');
    socket.emit("join-videocall")
    return (
        <div>
            <h1>Video Call commencing...</h1>
            <p></p>
        </div>
    );
}

export default VideoCall;