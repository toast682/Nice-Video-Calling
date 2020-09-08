import React from "react";
import Box from "@material-ui/core/Box";
import Preview from "./Preview";
import User from "./User"
import io from "socket.io-client";


function Home() {
    const socket = io('http://localhost:5000/');
    socket.emit('join-home');
    return (
        <div>
            <Preview />
            <User />
        </div>
    )
};

export default Home;