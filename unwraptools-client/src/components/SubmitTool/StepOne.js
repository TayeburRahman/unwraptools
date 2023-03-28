import { Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import './step.css';

function StepOne() {
    const [selected, setSelected] = useState([]);
    const [value, setValue] = useState('');




    return (
        <div>  
            <Grid container className='p-4 mt-4'>
                <Grid className='paddingRight' item xs={12} md={12} lg={6}>
                <Typography className='text-left  '>Tool Name</Typography>
                    <FormControl sx={{  width:"100%" }} variant="outlined"> 
                        <OutlinedInput 
                            id="outlined-adornment-weight"
                            placeholder="Copy AI"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className='' item xs={12} md={12} lg={6}>
                    <Typography className='text-left'>Website URL</Typography>
                 <FormControl className='width100' xs={{ width:"100%" }} variant="outlined">
                        <OutlinedInput 
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="https://copy.ai"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className='mt-2' item xs={12} md={12} lg={12}>
                <Typography className='text-left'>Tool's short description (Optional)</Typography>
                <FormControl sx={{ width:"100%" }} variant="outlined">
                        <OutlinedInput 
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="Please provide a short description"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className='mt-2  ' item xs={12} md={12} lg={12}>
                    <Typography className='text-left'>Tool Description (Optional)</Typography>
                <ReactQuill  theme="snow" style={{ height: "200px" }} value={value} onChange={setValue} />;
                </Grid> 
            </Grid>  
        </div>
    )
}

export default StepOne



