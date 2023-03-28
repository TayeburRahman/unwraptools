import { Grid, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React, { useState } from 'react';

 

function StepTwo() {
    const [selected, setSelected] = useState([]);


    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <div className='background'>
            <Grid container className='mt-5'>
                <Grid className=' p-4' item xs={12} md={12} lg={6}>
                    <Typography className='text-left pb-2' >Select categories (max 3)</Typography>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={top100Films}
                        getOptionLabel={(option) => option?.title}
                        onChange={(event, value) => setSelected(value)}
                        // defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
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
                        options={top100Films}
                        getOptionLabel={(option) => option?.title}
                        onChange={(event, value) => setSelected(value)}
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
                <Grid className=' p-4'  item xs={12} md={12} lg={6}>
                    <Typography className='text-left pb-2'>Pricing - Select freemium if your tool has both paid and free versions</Typography>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={top100Films}
                        getOptionLabel={(option) => option?.title}
                        onChange={(event, value) => setSelected(value)}
                        // defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Pricing"
                                placeholder="Please select Pricing that fit the tool"
                            />
                        )}
                    />
                </Grid>
                <Grid className=' p-4'  item xs={12} md={12} lg={6}>
                    <Typography className='text-left  '>Starting Price (Optional)</Typography>
                    <FormControl sx={{ width: "100%" }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            placeholder="$10/mo"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid className=' p-4'  item xs={12} md={12} lg={6}>
                    <Typography className='text-left  '>Are you associated with the product or company?</Typography>
                    <FormControl  className="d-flex text-left"> 
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        className=" text-left w-100"
      >
         <Box className="text-left w-100">
         <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
         </Box>
      </RadioGroup>
    </FormControl>
                </Grid>

            </Grid>




        </div>
    )
}

export default StepTwo



const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },

];
