import EastIcon from '@mui/icons-material/East';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';

function LatestNews() {
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
            </Container>
            <Footer/>
        </div>
    )
}

export default LatestNews
