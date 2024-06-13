import React from 'react';
// @ts-ignore
import videopath from "../resources/Canva Design.mp4";
import {Box, Typography} from "@mui/material";

// @ts-ignore
import {LocationOn as Location} from '@mui/icons-material';

function Banner() {
    return (
        <div>
            <Box height={"100vh"}>
                <video autoPlay loop muted id={"video"}>
                    <source src={videopath}/>
                </video>
                <Box id={"logo"}>
                    <Typography variant="h1" color={"whitesmoke"} padding={5} fontFamily={"la belle aurore"}>Shruti
                        Yadav</Typography>
                    <Typography variant="h4" color={"whitesmoke"}>Full Stack Developer</Typography>
                    <Typography variant="h6" color={"whitesmoke"}>Java | React</Typography>
                    <Typography variant="h6" color={"whitesmoke"} padding={3}>Bachelors of Technology, Information
                        Technology</Typography>
                    <Typography variant="h6" color={"whitesmoke"} padding={3}><Location></Location>Oslo,
                        Norway</Typography>

                </Box>
            </Box>
        </div>
    );
}

export default Banner;