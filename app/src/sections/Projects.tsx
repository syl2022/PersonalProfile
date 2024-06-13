import React from 'react';
import {Grid, List, ListItem, Paper, Stack, Typography} from "@mui/material";
// @ts-ignore
import img1 from "../resources/a7fd41dde51576ef.png";
// @ts-ignore
import img2 from "../resources/brainbase_logo.jpg";
// @ts-ignore
import img3 from "../resources/644fb7a658ce07f20fabe160_20230501T1259-20804452-26cd-45d6-a9c1-1cdd3e4dcb56.jpeg";
// @ts-ignore
import img4 from "../resources/logoer-gsp-abb300x300.jpg";

function Projects() {
    return (
        <div>
            <Typography variant={"h4"} paddingTop={10} fontFamily={"montserrat subrayada"}>Projects</Typography>
            <Stack spacing={5} padding={5} sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Paper sx={{width: "100%",height: "100%"}} >
                    <Grid container direction={{xs:"column", md:"row"}} spacing={1} padding={5} sx={{
                        display: "flex",height: "100%"
                    }}>
                        <Grid item md={6}  alignItems={"center"}>
                            <img src={img1} height={"100%"} alt={"TurtleSec AS"}/></Grid>
                        <Grid item container md={6} direction={"column"} sx={{
                            display: "flex",
                        }}>
                            <Typography variant={"h5"} padding={2}>Turtle Trace</Typography>
                            <List sx={{listStyleType: 'disc'}}>
                                <ListItem sx={{display: 'list-item'}}>TurtleTrace is a platform for assignment
                                    management for small companies.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Development of the TurtleTrace Web App, a
                                    Kotlin/React app. Integrated React components with Kotlin backend services,
                                    developed the underlying database model, and implemented authentication flows using
                                    Okta OAuth 2.0. The backend has a distributed microservice architecture based around
                                    Kafka, running on Kubernetes, with continuous deployment to production.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Technologies : React,TypeScript, Node.js, Tailwind
                                    CSS, Storybook, Figma, HTML, CSS, TypeScript, D3, Kotlin, SpringBoot, Maven,
                                    PostgreSQL, Kafka, Kubernetes, GitHub, GitHub Actions, Okta OAuth 2.0</ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper sx={{width: "100%",height: "100%"}}>
                    <Grid container direction={{xs:"column-reverse", md:"row"}} padding={5} sx={{
                        display: "flex",
                    }}>
                        <Grid item container md={6} direction={"column"} sx={{
                            display: "flex",
                        }}>
                            <Typography variant={"h5"} padding={2}>Brain Base</Typography>
                            <List sx={{listStyleType: 'disc'}}>
                                <ListItem sx={{display: 'list-item'}}>BrainBase is a network for consultants in the
                                    Norwegian IT industry.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Modernizing the cloud-native consultancy platform,
                                    leveraging the latest technologies to enhance existing features and introduce new
                                    functionalities.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Tech: React, Node.js, TypeScript, Next.js,
                                    Tailwind CSS, Vercel, Firebase, GitHub, GitHub Actions, Headless
                                    CMS(Prismic)</ListItem>
                            </List>
                        </Grid>
                        <Grid item md={6} marginTop={5} alignItems={"center"}> <img src={img2}
                                                                                        height={"100%"} alt={"Brainbase AS"}/></Grid>
                    </Grid>
                </Paper>
                <Paper sx={{width: "100%",height: "100%"}}>
                    <Grid container direction={{xs:"column", md:"row"}} padding={5} sx={{
                        display: "flex",
                    }}>
                        <Grid item marginTop={5} alignItems={"center"} md={6}> <img src={img3} alt={"ING"}
                                                                                                    width={"80%"}/></Grid>
                        <Grid container item direction={"column"} md={6} sx={{
                            display: "flex",
                        }}>
                            <Typography variant={"h5"} padding={2}>Credit Risk Approval Package (ING Bank
                                Netherlands)</Typography>
                            <List sx={{listStyleType: 'disc'}}>
                                <ListItem sx={{display: 'list-item'}}>Credit Risk Approval Package (ING Bank
                                    Netherlands)</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Migrating the legacy Servlets based application to
                                    a modern React-based frontend involving development, intricate refactoring,
                                    integration with Spring backend services, authentication via SSL and extensive code
                                    quality control via CheckMarx, in an Agile Scrum framework.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Tech: React, TypeScript, JavaScript, Node.js,
                                    HTML, CSS, Java, Spring, Maven, Gitlab, Azure, REST, CheckMarx, Servlets, Oracle,
                                    WebSphere</ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper sx={{width: "100%",height: "100%"}}>
                    <Grid container direction={{xs:"column-reverse", md:"row"}} padding={5} sx={{
                        display: "flex",
                    }}>
                        <Grid item container direction={"column"} md={6} sx={{
                            display: "flex",
                        }}>
                            <Typography variant={"h5"} padding={2}>Control System Sales Configurator-IACTPG (ABB
                                Sweden)</Typography>
                            <List sx={{listStyleType: 'disc'}}>
                                <ListItem sx={{display: 'list-item'}}>ABB is a technology leader in electrification and
                                    automation.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>The project progressed through three stages, from
                                    PoC to pilot to production where I was involved in all stages from setting up the
                                    development infrastructure to developing end-to-end functionality to upgrading for
                                    the next stage based on the user's feedback.</ListItem>
                                <ListItem sx={{display: 'list-item'}}>Tech: JavaScript, HTML, CSS, Bootstrap, Java,
                                    Spring, Maven, Hibernate, REST, SQL Server, Apache Tomcat, SonarQube</ListItem>
                            </List>
                        </Grid>
                        <Grid item md={6} marginTop={5} alignItems={"center"}> <img src={img4} alt={"ABB"}
                                                                                        width={"100%"}/></Grid>
                    </Grid>
                </Paper>
            </Stack>
        </div>
    );
}

export default Projects;