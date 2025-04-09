import React, {useState} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import {Alert, Box, Button, Container, Paper, Snackbar, TextField, Typography} from "@mui/material";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleClick = () => {
        setOpen(true);
        if (email === "berkayysimsekk@gmail.com"&&password === "2323") {
            setMessage("Giriş Başarılıdır")
            setIsCorrect(true)
        }else{
            setMessage("Lütfen Bilgilerinizi Kontrol Ediniz")
            setIsCorrect(false)
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 3,
            }}
            component={Paper}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 400,
                }} >
                <Typography variant="h5" color="textSecondary">Giriş Yap</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    variant={"filled"}
                    fullWidth={true}
                    sx={{marginY:3}}
                    />
                    <TextField
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    variant="filled"
                    fullWidth={true}
                    sx={{marginY:3}}
                    />
                    <Button
                        endIcon={<LoginIcon />}
                        variant={"outlined"}
                        type="submit"
                        sx={{color:"#002984"}}
                        onClick={handleClick}
                    >Giriş Yap</Button>
                    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
                            <Alert
                                onClose={handleClose}
                                variant="filled"
                                severity={isCorrect?"success":"error"}>{message}</Alert>
                    </Snackbar>
                </form>
            </Box>
        </Container>
);
}

export default LoginPage;