import React from "react";
import {createTheme, Divider, Grid, ThemeProvider} from "@mui/material";
import Banner from "../sections/Banner";
import AboutMe from "../sections/AboutMe";
import Blog from "../sections/Blog";
import Companies from "../sections/Companies";
import Projects from "../sections/Projects";
import HobbyProject from "../sections/HobbyProject";
import Skills from "../sections/Skills";
import Social from "../sections/Social";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";

function Landing() {

    console.log("Application started successfully!")

    const theme = createTheme({
        typography: {
            fontFamily: [
                "Kantumruy Pro",
                "montserrat subrayada",
                "la belle aurore"
            ].join(','),
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Grid container
                      flexDirection={"column"}
                      sx={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                      }}>
                    <Grid item id={"banner"}>
                        <Banner/>
                    </Grid>
                    <Grid item id={"links"} xs={12} sx={{width: "100%"}}>
                        <Nav/>
                    </Grid>
                    <Grid item id={"aboutMe"} padding={5}>
                        <AboutMe/>
                    </Grid>
                    <Grid item id={"blog"} padding={5}>
                        <Blog/>
                    </Grid>
                    <Grid item id={"companies"} padding={5}>
                        <Companies/>
                    </Grid>
                    <Grid id={"projects"} item>
                        <Divider orientation={"horizontal"}></Divider>
                        <Projects/>
                    </Grid>
                    <Grid id={"hobbyProjects"} item padding={5}>
                        <Divider orientation={"horizontal"}></Divider>
                        <HobbyProject/>
                    </Grid>
                    <Grid item id={"Skills"} padding={{xs: 1, md: 5}}>
                        <Divider orientation={"horizontal"}></Divider>
                        <Skills/>
                    </Grid>
                    <Grid item id={"socialMedia"} sx={{width: "100%"}}>
                        <Divider orientation={"horizontal"}></Divider>
                        <Social/>
                    </Grid>
                    <Grid item sx={{width: "100%"}}>
                        <Footer/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default Landing;