import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Webcam from "react-webcam"

const StyledCard = withStyles({
    root: {
        background: "white",
        border: '2',
        height: '30%',
        padding: '20px 5px 5px 5px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Card);

const constraints = {
    audio: true,
    video: {
        width: 1920, height: 1080, facingMode: 'user'
    }
}

// async function getVideo() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         handleSuccess(stream)
//     }
//     catch (e) {
//         alert(e.toString())
//     }
// }
// function handleSuccess(stream) {
//     window.stream = stream;
// }
// getVideo();


function Preview() {
    return (
        <Container maxWidth="sm">
            <StyledCard variant="outlined">
                <Webcam
                    audio="true"
                    videoConstraints={{
                        video: {
                            width: 1920, height: 1080
                        }
                    }}> </Webcam>
            </StyledCard>
        </Container >
    );
}

export default Preview;