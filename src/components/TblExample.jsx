import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function TblExample(props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ders Adı</TableCell>
                        <TableCell>Eğitmen</TableCell>
                        <TableCell>Sınıf</TableCell>
                        <TableCell>Sınıf Mevcudu</TableCell>
                        <TableCell>Gün</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>LLM and Ai Agent</TableCell>
                        <TableCell>Berkay Şimşek</TableCell>
                        <TableCell>104</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>Pazartesi, Çarşamba, Cuma</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Frontend</TableCell>
                        <TableCell>İbrahim Şen</TableCell>
                        <TableCell>101</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>Haftaiçi Her Gün</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Backend</TableCell>
                        <TableCell>Uğur Yasin Sağır</TableCell>
                        <TableCell>102</TableCell>
                        <TableCell>61</TableCell>
                        <TableCell>Salı, Çarşamba, Cuma</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TblExample;