import React from 'react';
import {Typography} from "@mui/material";

function TypExample(props) {
    return (
        <div>
            <Typography variant="h2" component="p">Merhabalar ben bir başlığım.</Typography>
            <Typography variant="h3">Merhabalar ben bir başlığım.</Typography>
            <Typography variant="h4">Merhabalar ben bir başlığım.</Typography>
            <Typography variant="h5">Merhabalar ben bir başlığım.</Typography>
            <Typography variant="h6">Merhabalar ben bir başlığım.</Typography>
            <Typography variant="subtitle1">Merhabalar ben bir subtitle.</Typography>
            <Typography variant="subtitle2">Merhabalar ben bir subtitle.</Typography>
            <Typography variant="body1">Selamlar</Typography>
            <Typography variant="body2">Selamlar</Typography>
        </div>
    );
}

export default TypExample;