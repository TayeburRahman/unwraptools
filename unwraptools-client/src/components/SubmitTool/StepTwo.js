import SendIcon from '@mui/icons-material/Send';
import { Button, Grid, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../Firebase/Hooks/useAuth';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function StepTwo(props) {
    const [openWarning, setOpenWarning] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [categories, selectCategories] = useState([]);
    const [features, setFeatures] = useState([]);
    const [price, setPricing] = useState([]);
    const [startingPrice, setStartingPrice] = useState('');
    const [associated, setAssociated] = useState('product');
  const navigate = useNavigate();
  const {user}=useAuth()
    const { tool_name, websiteURL, short_description, description, imageURL } = props;
   
 
    console.log(price)
 

    const HandleOnClick = () => { 

        if (tool_name.length === 0  || websiteURL.length === 0 || price.length === 0 || categories.length === 0) {
            setOpenWarning(true);
            setMessage('Please fill all the fields')
            return;
        } else {
            setOpenWarning(false);
            setMessage('')
        }
        
        const user_email = user?.email

        axios.post(`http://localhost:5000/api/v1/tool/create`, {
            tool_name,
            websiteURL,
            short_description,
            description,
            categories,
            features,
            price,
            startingPrice,
            associated,
            user_email,
            imageURL
        })
            .then(res => {
                if (res.status === 200) {
                    setOpenSuccess(true)
                    setResponseMessage('Tool Added Successfully')
                    setTimeout(() =>{
                        navigate('/')
                     }, 2500)
                } 
            }) .catch(error => {
                console.log('error', error)
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
            <Grid container className='mt-5'>
                <Grid className=' p-4' item xs={12} md={12} lg={6}>
                    <Typography className='text-left pb-2' >Select categories (max 3)</Typography>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={CategoriesSec}
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => {
                            if (value.length <= 3) {
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
                <Grid className=' p-4' item xs={12} md={12} lg={6}>
                    <Typography className='text-left pb-2'>Select features (optional)</Typography>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={Features}
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => setFeatures(value)}
                        // defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Features"
                                placeholder="Please select features that fit the tool"
                            />
                        )}
                    />
                </Grid>
                <Grid className=' p-4' item xs={12} md={12} lg={6}>
                    <Typography className='text-left pb-2'>Pricing - Select freemium if your tool has both paid and free versions</Typography>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={Pricing}
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => setPricing(value)}
                        // defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                required
                                label="Pricing"
                                placeholder="Please select Pricing that fit the tool"
                            />
                        )}
                    />
                </Grid>
                <Grid className=' p-4' item xs={12} md={12} lg={6}>
                    <Typography className='text-left  '>Starting Price (Optional)</Typography>
                    <FormControl sx={{ width: "100%" }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            placeholder="$10/mo"
                            defaultValue={startingPrice}
                            onChange={e => { setStartingPrice(e.target.value) }}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className=' p-4' item xs={12} md={12} lg={6}>
                    <Typography className='text-left  '>Are you associated with the product or company?</Typography>
                    <FormControl className="d-flex text-left">
                        <RadioGroup
                            required
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={associated}
                            onChange={e => { setAssociated(e.target.value) }}
                            className=" text-left w-100"
                        >
                            <Box className="text-left w-100">
                                <FormControlLabel value="product" control={<Radio />} label="Yes" />
                                <FormControlLabel value="company" control={<Radio />} label="No" />
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>

            <Grid className='mt-3'>
                <Button variant="contained" className='pt-2' onClick={HandleOnClick}>Submit Tool<SendIcon className=' ps-2' sx={{ marginTop: "-2px !important", fontSize: "25px" }} /></Button>
            </Grid>
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
        </div>
    )
}

export default StepTwo



const CategoriesSec = [
    'Free', 'Art',  'Audio Edting', 'Paid',  'Contact for Pricing', "Deals", 

];


const Features = [
    'Waitlist', 'Browser Extension', 'Open Source', 'Mobile App',  'Discord Community', 'API',  'No Signup Required' ];


const Pricing = [ 'Free', 'Freemium', 'Free Trial', 'Paid',  'Contact for Pricing',  "Deals",

];