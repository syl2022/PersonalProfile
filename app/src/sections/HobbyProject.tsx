import React from 'react';
import {Paper, Stack, Typography} from "@mui/material";
// @ts-ignore
import img1 from "../resources/Screenshot 2024-06-10 195213.png";

function HobbyProject() {
    return (
        <div>
            <Typography variant={"h4"} paddingTop={10} paddingBottom={3} fontFamily={"montserrat subrayada"}>Hobby
                Project</Typography>

            <Paper>
                <Stack flexDirection={"row"} sx={{
                    display: "flex",
                }}>
                    <Stack padding={5} marginTop={10} width={"50%"} alignItems={"center"}>
                        <img src={img1} width={"300px"} alt={"The Creative Bird dashboard"}/></Stack>
                    <Stack flexDirection={"column"} padding={4} width={"50%"} sx={{
                        display: "flex",
                    }}>
                        <Typography variant={"h5"} padding={2}>The Creative Bird</Typography>

                        <Typography paragraph padding={2}>It is an application from which the users can design their own
                            gift items while someone else does the crafting work for you when you place the order. It
                            would not only serve the users but also the artist community to connect with each other and
                            deliver the product as a group.</Typography>
                        <Typography paragraph padding={2}>Its a Web Application based on the latest technologies like
                            React, Material UI, Kotlin and Kafka. The motivation behind the application is to touch upon
                            the artistic person in me while exploring the new tech. </Typography>
                        <Typography paragraph padding={2}>www.thecreativebird.site</Typography>
                        <Typography variant={"h6"} padding={2}>Coming soon..</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
}

export default HobbyProject;