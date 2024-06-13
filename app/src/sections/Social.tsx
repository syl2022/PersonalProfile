import React from 'react';
import {Grid, Typography} from "@mui/material";

function Social() {
    const items = [
        {
            img: 'linkedin.png',
            title: 'LinkedIn',
            link: "https://www.linkedin.com/in/shruti-yadav-687754186/"
        },
        {
            img: 'insta.jpg',
            title: 'Instagram',
            link: "https://www.instagram.com/brunjenteinorge/?igsh=YWViOGFiN2VkNnRw&utm_source=qr"
        },
        {
            img: 'git.png',
            title: 'GitHub',
            link: "https://github.com/syl2022"
        },
        {
            img: 'x.jpg',
            title: 'X formally known as Twitter',
            link: "https://x.com/shrutiyadav196"
        },
    ];
    return (
        <div>
            <Typography variant={"h5"} paddingTop={10} paddingBottom={3} fontFamily={"montserrat subrayada"}>Social
                Appearance</Typography>
            <Grid container  sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {items.map((item) => (
                    <Grid item key={item.img} padding={2}>
                        <a href={item.link}>
                            <img
                                srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                                alt={item.title}
                                height={"40px"}
                            />
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Social;