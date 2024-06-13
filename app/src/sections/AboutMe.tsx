import React from 'react';
// @ts-ignore
import img1 from "../resources/IMG_0512.webp";
// @ts-ignore
import img2 from "../resources/IMG_20191124_143238_Original-2cb4b01.webp";
import {Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from "@mui/material";

function AboutMe() {
    return (
        <div>
            <Typography variant={"h4"} padding={2} fontFamily={"montserrat subrayada"}>About Me</Typography>
            <Stack direction="row" spacing={5}>
                <Card sx={{width: "50%", padding: "26px"}}>
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
                                applications
                                where I had integrated React components with Kotlin/Java backend services, and developed
                                the
                                underlying model in PostgreSQL/SQL and implemented authentication flows using Okta
                                OAuth. Additionally,
                                I have participated in the modernization of multiple platforms to renew the frontend
                                experience. My expertise spans the entire frontend stack, from creating pixel perfect
                                user
                                interfaces to integration with existing backend systems and ensuring code quality.
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: "50%", padding: "26px"}}>
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
                                have
                                visited over 10 countries so far, which has broadened my perspective and inspired me to
                                create more inclusive and accessible web designs.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>
        </div>
    );
}

export default AboutMe;