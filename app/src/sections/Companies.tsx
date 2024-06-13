import React from 'react';
import {Grid, Typography} from "@mui/material";
// @ts-ignore
import img1 from "../resources/a7fd41dde51576ef.png";
// @ts-ignore
import img2 from "../resources/Tata_Consultancy_Services_Logo.svg.png";

function Companies() {
    return (
        <div>
            <Typography variant={"h4"} paddingTop={10} paddingBottom={3} fontFamily={"montserrat subrayada"}>Companies</Typography>
            <Grid container direction={{xs:"column", md:"row"}} padding={5} spacing={5} sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Grid item sx={{padding: "26px"}} md={3}>
                    <img src={img1} width={"80%"} height={"80%"} className={"round"} alt={"TurtleSec AS"}/>
                    <Typography variant={"h5"} padding={2}>TurtleSec AS</Typography>
                    <Typography variant={"body1"}>Oslo, Norway</Typography>
                    <Typography variant={"body1"}>2023- Present</Typography>
                </Grid>
                <Grid item sx={{padding: "26px"}} md={3}>
                    <img src={img2} width={"80%"} height={"80%"} className={"round"} alt={"Tata Consultancy Services"}/>
                    <Typography variant={"h5"} padding={2}>Tata Consultancy Services</Typography>
                    <Typography variant={"body1"}>Mumbai, India</Typography>
                    <Typography variant={"body1"}>2016-2023</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Companies;