import { Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import './step.css';

function StepOne(props) {
    const [selected, setSelected] = useState([]);
    const [value, setValue] = useState('');


    const {
        setToolName,  
        description, 
        setWebsiteURL, 
        setShortDescription, 
        setDescription, setImageURL, tool_name, websiteURL, short_description, imageURL} = props;




    return (
        <div>  
            <Grid container className='p-4 mt-4'>
                <Grid className='paddingRight' item xs={12} md={12} lg={6}>
                <Typography className='text-left  '>Tool Name</Typography>
                    <FormControl sx={{  width:"100%" }} variant="outlined"> 
                        <OutlinedInput 
                        value={tool_name}
                          onChange={e => setToolName(e.target.value)}
                            id="outlined-adornment-weight"
                            placeholder="ChatGPT"
                            required
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
                           onChange={e => setWebsiteURL(e.target.value)}
                           value={websiteURL}
                            id="outlined-adornment-weight"
                            required
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="https://chat.openai.com/"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className='mt-2' item xs={12} md={12} lg={12}>
                <Typography className='text-left'>Tool's Image URL</Typography>
                <FormControl sx={{ width:"100%" }} variant="outlined">
                        <OutlinedInput 
                         onChange={e => setImageURL(e.target.value)}
                         value={imageURL}
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="Please provide the Image URL of the Tool"
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
                        value={short_description}
                        onChange={e => setShortDescription(e.target.value)}
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="Please write a short description of the Tool "
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className='mt-2  ' item xs={12} md={12} lg={12}>
                    <Typography className='text-left'>Tool Description (Optional)</Typography>
                <ReactQuill theme="snow" style={{ height: "200px" }} value={description} onChange={setDescription} />
                </Grid> 
            </Grid>  
        </div>
    )
}

export default StepOne



