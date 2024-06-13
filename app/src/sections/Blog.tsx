import React from 'react';
import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
// @ts-ignore
import img1 from "../resources/IMG_0102.webp";
// @ts-ignore
import img2 from "../resources/blob-f3fd9de.webp";
// @ts-ignore
import img3 from "../resources/images (3).jpg";

function Blog() {
    return (
        <div>
            <Typography variant={"h4"} padding={5} color={"whitesmoke"} fontFamily={"montserrat subrayada"}
                        sx={{textShadow: "2px 2px 4px #000000"}}>More than a Developer</Typography>
            <Stack direction={{xs:"column", md:"row"}} spacing={5} sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <Card sx={{width: "300px", height: "400px", padding: "2px"}}>
                    <CardMedia
                        component="img"
                        image={img1}
                        height="300px"
                        alt="Shruti Yadav"
                    />
                    <CardContent>
                        <Typography variant="caption" color="text.secondary">10 October 2023</Typography>
                        <Typography variant="h6" color="text.secondary">Organizer at AdaCon 2023</Typography>
                    </CardContent>
                </Card>
                <Card sx={{width: "300px", height: "400px", padding: "2px"}}>
                    <CardMedia
                        component="img"
                        image={img2}
                        alt="Shruti Yadav"
                        height="300px"
                    />
                    <CardContent>
                        <Typography variant="caption" color="text.secondary">9 October 2018</Typography>
                        <Typography variant="h6" color="text.secondary">TCS Billion Step Challenge</Typography>
                    </CardContent>
                </Card>
                <Card sx={{width: "300px", height: "400px", padding: "2px"}}>
                    <CardMedia
                        component="img"
                        image={img3}
                        alt="Shruti Yadav"
                        height="300px"
                    />
                    <CardContent>
                        <Typography variant="caption" color="text.secondary">9 July 2016</Typography>
                        <Typography variant="h6" color="text.secondary">Organizer at Abhivyakti 2012-2016</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </div>
    );
}

export default Blog;