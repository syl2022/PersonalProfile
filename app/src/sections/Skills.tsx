import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";

function Skills() {
    const frontend = [
        {
            img: 'skills/0_aDOBsCGaRcBkPV9K.png',
            title: 'Figma',
        },
        {
            img: 'skills/0_eFomJUFua8tuqe8g.png',
            title: 'jQuery',
        },
        {
            img: 'skills/0_KLECKuR2MtD8PKJf.jpg',
            title: 'ReactJS',
        },
        {
            img: 'skills/1__6ooq0R60ba3UT5c-QVemA.png',
            title: 'Tailwind CSS',
        },
        {
            img: 'skills/1_BQZAbczBfLYtPp-6HmN0ZQ.jpg',
            title: 'Next.js',
        },
        {
            img: 'skills/1_fEyeESs-HxVR7Zlr-fdlvw.png',
            title: 'Material UI',
        },

        {
            img: 'skills/1_TY9uBBO9leUbRtlXmQBiug.png',
            title: 'Node JS',
        },
        {
            img: 'skills/1696134741709.png',
            title: 'TypeScript',
        },
        {
            img: 'skills/39e57000-a3fa-11e9-83c7-953827061607.webp',
            title: 'Storybook',
        },
        {
            img: 'skills/images.jpg',
            title: 'Headless CMS',
        },
        {
            img: 'skills/images.png',
            title: 'HTML',
        },

        {
            img: 'skills/JavaScript-Symbol.png',
            title: 'JavaScript',
        },
    ];
    const backend = [
        {
            img: 'skills/Java-Logo.jpg',
            title: 'Java',
        },
        {
            img: 'skills/kotlin-logo-social-21c8518b19eb96d96f35e0057bb92b7e1281a24820e0fa09e39c42f184bd7faa.png',
            title: 'Kotlin',
        },

        {
            img: 'skills/oracle-logo-01.png',
            title: 'Oracle',
        },
        {
            img: 'skills/spring-overview.png',
            title: 'Spring',
        },
        {
            img: 'skills/apache-kafka-1110x550.png',
            title: 'Kafka',
        },
        {
            img: 'skills/email-main-template_auth0-by-okta-logo_black_279x127_3x.png',
            title: 'Okta Auth0',
        },
        {
            img: 'skills/hibernate2.png',
            title: 'hibernate',
        },

        {
            img: 'skills/images (2).jpg',
            title: 'PostgreSQL',
        },
        {
            img: 'skills/210904-Blog-Post-SQL-Server-2-e1630753848251.jpg',
            title: 'SQL Server',
        },
    ];
    const infrastructure = [
        {
            img: 'skills/sonarqube.png',
            title: 'SonarQube',
        },
        {
            img: 'skills/images (4).jpg',
            title: 'Checkmarx',
        },
        {
            img: 'skills/ibm-websphere-application-server-vulnerability-identified.webp',
            title: 'Web sphere',
        },
        {
            img: 'skills/images (1).jpg',
            title: 'Apache Tomcat',
        },
        {
            img: 'skills/agile-methodology-scaled.jpg',
            title: 'Agile',
        },
        {
            img: 'skills/1_kbSGIVukG6lL7JtAa9wiDA.png',
            title: 'Maven',
        },
        {
            img: 'skills/1_mtsk3fQ_BRemFidhkel3dA.png',
            title: 'git GitHub',
        },
        {
            img: 'skills/1_Ome-oSxDNx7mQxJFZJ-NJg.png',
            title: 'Azure DevOps',
        },
        {
            img: 'skills/Kubernetes.jpg',
            title: 'Kubernetes',
        },
        {
            img: 'skills/2022_Zoom-AWS_Lockup_RGB-1-e1672857797889-1024x760.webp',
            title: 'AWS',
        },
    ];

    return (
        <div>
            <Typography variant={"h4"} paddingTop={10} paddingBottom={3} fontFamily={"montserrat subrayada"}>My
                Technical Experience</Typography>
            <Typography variant={"h5"} padding={3}>Frontend Experience</Typography>
            <Grid container>
                {frontend.map((item) => (
                    <Grid item key={item.img} padding={2}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            height={"100px"}
                        />
                    </Grid>
                ))}
            </Grid>
            <Divider></Divider>
            <Typography variant={"h5"} paddingTop={10}>Backend Experience</Typography>
            <Grid container>
                {backend.map((item) => (
                    <Grid item key={item.img} padding={2}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            height={"100px"}
                        />
                    </Grid>
                ))}
            </Grid>
            <Divider></Divider>
            <Typography variant={"h5"} paddingTop={10}>Infrastructure</Typography>
            <Grid container>
                {infrastructure.map((item) => (
                    <Grid item key={item.img} padding={2}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            height={"100px"}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Skills;