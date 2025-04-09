import React from 'react';
import {Button, ButtonGroup, Checkbox} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

function BtnExample(props) {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Button color="error" variant="text">Text</Button>
                <Button color="secondary" startIcon={<HomeIcon/>} variant="contained">Contained</Button>
                <Button color="primary" variant="contained">Contained</Button>
                <Button color="warning" variant="contained">Contained</Button>
                <Button color="info" variant="contained">Contained</Button>
                <Button color="inherit" variant="contained">Contained</Button>
                <Button color="success" variant="success">Outlined</Button>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",margin:10}}>
                <Button color="error" endIcon={<FavoriteIcon/>} variant="outlined">Outlined</Button>
                <Button color="secondary" variant="outlined">Outlined</Button>
                <Button color="primary" variant="outlined">Outlined</Button>
                <Button color="warning" variant="outlined">Outlined</Button>
                <Button color="info" variant="outlined">Outlined</Button>
                <Button color="inherit" variant="outlined">Outlined</Button>
                <Button color="success" variant="outlined">Outlined</Button>
            </div>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>Berkay</Button>
                <Button>Şimşek</Button>
                <Button>Example</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>

    );
}

export default BtnExample;