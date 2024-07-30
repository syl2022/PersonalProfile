import React from 'react';
import {Grid, Link, Paper, Typography} from "@mui/material";
// @ts-ignore
import img1 from "../resources/Screenshot 2024-06-10 195213.png";

function HobbyProject() {
    return (
        <div>
            <Typography variant={"h4"} paddingTop={10} paddingBottom={3} fontFamily={"montserrat subrayada"}>Hobby
                Project</Typography>

            <Paper>
                <Grid container direction={{xs: "column", md: "row"}} sx={{
                    display: "flex",
                }}>
                    <Grid item padding={5} alignItems={"center"} md={6}>
                        <iframe title={"threejs-fiber"} src="https://reactthreefiber.onrender.com/" width="100%" height="300">
                            <p>Your browser does not support iframes.</p>
                        </iframe>
                    </Grid>
                    <Grid item container direction={"column"} padding={4} md={6} sx={{
                        display: "flex",
                    }}>
                        <Typography variant={"h5"} padding={2}>React Three Fiber</Typography>

                        <Typography paragraph padding={2}>
                            This application is a demo to explore the depths of threejs and create amazing UI designs.
                        </Typography>
                        <Typography paragraph padding={2}>It uses
                            React, Material UI, React-three-fiber, WebGL and TypeScript.
                            This is my journey to learning 3D computer graphics in a web browser using
                            WebGL. </Typography>
                        <Typography paragraph padding={2}><Link onClick={() => {
                            window.open('https://reactthreefiber.onrender.com/');
                        }}>https://reactthreefiberdemo.com/</Link></Typography>
                        <Typography variant={"h6"} padding={2}>Zoom/Scroll the left block or visit the
                            link. </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper>
                <Grid container direction={{xs: "column", md: "row"}} sx={{
                    display: "flex",
                }}>
                    <Grid item padding={5} alignItems={"center"} md={6}>
                        <img src={img1} width={"100%"} alt={"The Creative Bird dashboard"}/></Grid>
                    <Grid item container direction={"column"} padding={4} md={6} sx={{
                        display: "flex",
                    }}>
                        <Typography variant={"h5"} padding={2}>The Creative Bird</Typography>

                        <Typography paragraph padding={2}>It is an application from which the users can design their own
                            gift items while someone else does the crafting work for you when you place the order. It
                            would not only serve the users but also the artist community to connect with each other and
                            deliver the product as a group.</Typography>
                        <Typography paragraph padding={2}>Its a Web Application based on the latest technologies like
                            React, Material UI, TypeScript, axios, Kotlin and Kafka. The motivation behind the
                            application is to touch upon
                            the artistic person in me while exploring the new tech. </Typography>
                        <Typography paragraph padding={2}><Link onClick={() => {
                            window.open('https://thecreativebird.site');
                        }}>www.thecreativebird.site</Link></Typography>
                        <Typography variant={"h6"} padding={2}>Coming soon..</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default HobbyProject;