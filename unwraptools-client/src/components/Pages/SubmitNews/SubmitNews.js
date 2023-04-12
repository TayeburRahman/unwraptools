import EastIcon from '@mui/icons-material/East';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import axios from 'axios';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Firebase/Hooks/useAuth';
import Footer from '../../AppBar/Footer/Footer';



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SubmitNews() {
    const [openWarning, setOpenWarning] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');


    const [categories, selectCategories] = useState([]);
    const [news_name, setNewsName] = useState('');
    const [contentLink, setContentLink] = useState('');
    const navigate = useNavigate();

    const { user } = useAuth()





    const HandleOnClick = () => {

        if (news_name.length === 0 || contentLink.length === 0 || categories.length === 0) {
            setOpenWarning(true);
            setMessage('Please fill all the fields')
            return;
        } else {
            setOpenWarning(false);
            setMessage('')
        }

        const user_email = user?.email

        axios.post(`https://server.unwraptools.io/api/v1/news/create`, {

            user_email,
            categories,
            news_name,
            contentLink

        })
            .then(res => {
                if (res.status === 200) {
                    setOpenSuccess(true)
                    setResponseMessage('News Added Successfully')
                    setTimeout(() => {
                        navigate('/')
                    }, 2500)
                }
            }).catch(error => {
               
                setOpenError(true)
                setResponseMessage("Provided image URL is not valid")

            });

    }



    const handleClick = () => {
        setOpenWarning(true);
        setMessage('You can select only 3 tags')
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenWarning(false);
        setOpenSuccess(false)
        setOpenError(false);
        setMessage('')
        setResponseMessage('')
    };


    return (
        <div className='background'>
            <Container >
                <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link>
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>Submit News</text>
                </Box>
                <Box className='mb-5'>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                        Submit News
                    </Typography>
                    <p className='text-left DesPText'>
                        Once approved, your submission will be added to the feed.
                    </p>
                </Box>
                <Box className="Paper pb-5">
                    <Grid container className='p-4 mt-4'>
                        <Grid className='paddingRight' item xs={12} md={12} lg={12}>
                            <Typography className='text-left  '>Title</Typography>
                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                <OutlinedInput
                                    className=''
                                    onChange={e => setNewsName(e.target.value)}
                                    id="outlined-adornment-weight"
                                    placeholder="Please describe the content in 1-2 sentences."
                                    required
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid className='mt-4' item xs={12} md={12} lg={6}>
                            <Typography className='text-left'>Link to the content</Typography>
                            <FormControl className='width100' xs={{ width: "100%" }} variant="outlined">
                                <OutlinedInput
                                    onChange={e => setContentLink(e.target.value)}
                                    id="outlined-adornment-weight"
                                    required
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder="https://www.wired.com/"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid className='pt-4 paddingsm' item xs={12} md={12} lg={6}>
                            <Typography className='text-left pb-2'>Select Categories (max 2)</Typography>
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={Categories}
                                getOptionLabel={(option) => option}
                                onChange={(event, value) => {
                                    if (value.length <= 2) {
                                        selectCategories(value)
                                    } else {
                                        handleClick()
                                    }
                                }}
                                value={categories}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        variant="standard"
                                        label="Categories"
                                        placeholder="Please select categories that fit the tool"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid className='mt-3'>
                        <Button variant="contained" className='pt-2' onClick={HandleOnClick}>Submit News<SendIcon className=' ps-2' sx={{ marginTop: "-2px !important", fontSize: "25px" }} /></Button>
                    </Grid>
                </Box>

                <Snackbar open={openWarning} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>

                <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {responseMessage}
                    </Alert>
                </Snackbar>
                <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {responseMessage}
                    </Alert>
                </Snackbar>
            </Container>
            <Footer />
        </div>
    )
}

export default SubmitNews


const Categories = ['Updates', 'Interesting', 'Video', 'Podcast', 'Learn', 'Research', 'Opinion'];