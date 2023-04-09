import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Firebase/Hooks/useAuth';
import './subscribe.css';

function Subscribe() {
    const {user} = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { 
        const {email} = data;
        console.log(email)

        axios.post(`https://server.unwraptools.io/api/v1/email/create`, { email, user})
        .then(res => {
            if (res.status === 200) {
                console.log('search', res?.data?.response)
                // setTools(res?.data?.tools)
            } else {
                console.log(res)
            }
        })
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

                        <input className='SubmitButton' type="submit" />
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Subscribe
