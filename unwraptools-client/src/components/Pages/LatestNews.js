import EastIcon from '@mui/icons-material/East';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function LatestNews() {


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className='background'>
            <NavBar/>
            <Container>
            <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link> 
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>News</text>
                </Box>
                <Box>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                    Latest All News
                    </Typography>
                    {/* <p className='text-left DesPText'>
                        These are the tools and posts you have unwraptools. You can remove them from your favourites by clicking the bookmark icon.
                    </p> */}
                </Box>
                <Box>
                    <Box>
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                    </Box>
                </Box>
            </Container>
            <Footer/>
        </div>
    )
}

export default LatestNews
