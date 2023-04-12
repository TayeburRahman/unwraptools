import { Alert, Box, Grid, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Firebase/Hooks/useAuth';
import './subscribe.css';

function Subscribe() {
    const { user } = useAuth()
    const [message, setMessage] = useState('');

    const [openSuccess, setOpenSuccess] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email } = data; 
        axios.post(`https://server.unwraptools.io/api/v1/email/create`, { email, user })
            .then(res => {
                handleClickAdded()
                setMessage("Subscribe Successfully")
            })
    };
    const handleClickAdded = () => {
        setOpenSuccess(true);
    };



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false)
        setMessage('')
    };




    return (
        <Grid container className='subscribe'>
            <Grid item xs={12} md={6} lg={6}>
                <Typography>Explore useful new AI tools</Typography>
                <Typography>Join 90,000+ AI enthusiasts getting weekly updates on new tools</Typography>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Box className='submitBox'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className='emailField' placeholder='Email'  {...register("email")} /> <br />
                        {errors.exampleRequired && <span>Email field is required</span>}

                        <input className='SubmitButton' type="submit" value="Subscribe" />
                    </form>
                </Box>

            </Grid>
            <Box>
                <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', }}>
                        {message}
                    </Alert>
                </Snackbar>
            </Box>
        </Grid>
    )
}

export default Subscribe
