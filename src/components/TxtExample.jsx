import React from 'react';
import {TextField} from "@mui/material";

function TxtExample(props) {
    return (
        <div>
            <TextField
            label="Email"
            variant="outlined"
            color="warning"
            helperText={"Email zorunlu bir alandır."}
            />
        </div>
    );
}

export default TxtExample;