import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
// @ts-ignore
import img1 from "../resources/a7fd41dde51576ef.png";
// @ts-ignore
import img2 from "../resources/Tata_Consultancy_Services_Logo.svg.png";

function Companies() {
    return (
        <div>
            <Typography variant={"h4"} padding={2} fontFamily={"montserrat subrayada"}>Companies</Typography>
            <Stack direction="row" spacing={5} sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box sx={{width: "50%", padding: "26px"}}>
                    <img src={img1} width={"80%"} height={"80%"} className={"round"} alt={"TurtleSec AS"}/>
                    <Typography variant={"h5"} padding={2}>TurtleSec AS</Typography>
                    <Typography variant={"body1"}>Oslo, Norway</Typography>
                    <Typography variant={"body1"}>2023- Present</Typography>
                </Box>
                <Box sx={{width: "50%", padding: "26px"}}>
                    <img src={img2} width={"80%"} height={"80%"} className={"round"} alt={"Tata Consultancy Services"}/>
                    <Typography variant={"h5"} padding={2}>Tata Consultancy Services</Typography>
                    <Typography variant={"body1"}>Mumbai, India</Typography>
                    <Typography variant={"body1"}>2016-2023</Typography>
                </Box>
            </Stack>
        </div>
    );
}

export default Companies;