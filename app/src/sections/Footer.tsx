import React from 'react';
import {Typography} from "@mui/material";
import {LocationOn as Location} from "@mui/icons-material";

function Footer() {
    return (
        <div id={"footer"}>
            <Typography variant="h6" color={"whitesmoke"} padding={3}><Location></Location>Oslo, Norway</Typography>
            <Typography variant="body1" color={"whitesmoke"} padding={1}>Personal Profile</Typography>
            <Typography variant="h6" color={"whitesmoke"} padding={1}>yadav196shruti@gmail.com</Typography>
            <Typography variant="body1" color={"whitesmoke"} padding={1}>Copyright © 2024 Shruti Yadav
                Profile</Typography>
            <Typography variant="h6" color={"whitesmoke"} padding={3} sx={{color: "brown"}}>Website created by
                @ShrutiYadav</Typography>
        </div>
    );
}

export default Footer;