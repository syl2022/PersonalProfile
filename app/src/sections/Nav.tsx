import React from 'react';
import {Button, Grid} from "@mui/material";

function Nav() {
    return (
        <div>
            <Grid item container direction={"row"} xs={12}>
                <Grid item xs={2}><Button variant={"contained"} href="#aboutMe" size={'large'}
                                          sx={{height: 100, width: '100%', borderRadius: 0}}>About
                    Me</Button></Grid>
                <Grid item xs={2}><Button variant={"contained"} href="#blog" size={'large'} sx={{
                    height: 100,
                    width: '100%',
                    borderRadius: 0
                }}>Blogs</Button></Grid>
                <Grid item xs={2}>
                    <Button variant={"contained"} href="#companies" size={'large'}
                            sx={{height: 100, width: '100%', borderRadius: 0}}>Companies</Button></Grid>
                <Grid item xs={2}>
                    <Button variant={"contained"} href="#projects" size={'large'}
                            sx={{height: 100, width: '100%', borderRadius: 0}}>Projects</Button></Grid>
                <Grid item xs={2}>
                    <Button variant={"contained"} href="#hobbyProjects" size={'large'}
                            sx={{height: 100, width: '100%', borderRadius: 0}}>Hobby
                        Projects</Button></Grid>
                <Grid item xs={2}>
                    <Button variant={"contained"} href="#Skills" size={'large'}
                            sx={{height: 100, width: '100%', borderRadius: 0}}>Skills</Button></Grid>

            </Grid>
        </div>
    );
}

export default Nav;