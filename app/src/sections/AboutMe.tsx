import React from 'react';
// @ts-ignore
import img1 from "../resources/IMG_0512.webp";
// @ts-ignore
import img2 from "../resources/IMG_20191124_143238_Original-2cb4b01.webp";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

function AboutMe() {
    return (
        <div>
            <Typography variant={"h4"} padding={2} paddingTop={8} fontFamily={"montserrat subrayada"}>About Me</Typography>
            <Grid container item direction={"row"} xs={12} padding={{xs:1, md:5}} spacing={2}>
                <Grid item md={6}>
                <Card sx={{height:"100%"}} >
                    <CardActionArea>
                        <Typography variant={"h5"} padding={2}>Professional Experience</Typography>
                        <CardMedia
                            component="img"
                            image={img1}
                            alt="Shruti Yadav"
                            height={"800px"}
                        />
                        <CardContent>
                            <Typography variant="body1" color="text.secondary">
                                A 7+ years experienced Full Stack Developer with a strong expertise in Frontend
                                Technologies, backed by extensive experience in delivering modern web-based solutions. I
                                have crafted intuitive and dynamic user interfaces and led development of web
                                applications where I had integrated React components with Kotlin/Java backend services, and developed
                                the underlying model in PostgreSQL/SQL and implemented authentication flows using Okta
                                OAuth. Additionally, I have participated in the modernization of multiple platforms to renew the frontend
                                experience. My expertise spans the entire frontend stack, from creating pixel perfect
                                user interfaces to integration with existing backend systems and ensuring code quality.
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item md={6}>
                <Card sx={{height:"100%"}}>
                    <CardActionArea>
                        <Typography variant={"h5"} padding={2}>Personal Interests</Typography>
                        <CardMedia
                            component="img"
                            image={img2}
                            alt="Shruti Yadav"
                            height={"800px"}
                        />
                        <CardContent>
                            <Typography variant="body1" color="text.secondary">
                                When I'm not coding, I enjoy painting and cooking. I also have a passion for travel and
                                have visited over 10 countries so far, which has broadened my perspective and inspired me to
                                create more inclusive and accessible web designs.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutMe;