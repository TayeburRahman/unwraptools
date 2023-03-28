import EastIcon from '@mui/icons-material/East';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';
import FavoritesTabs from '../Favourites/FavouritesTabs';
 
function Favorites() {
    return (
        <div className='background'>
            <NavBar/>
            <Container>
                <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link> 
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>Favourites</text>
                </Box>
                <Box>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                    MY FAVOURITES
                    </Typography>
                    <p className='text-left DesPText'>
                        These are the tools and posts you have unwraptools. You can remove them from your favourites by clicking the bookmark icon.
                    </p>
                </Box>
                <Box className='mt-5'>
                    <FavoritesTabs/>
                </Box>
            </Container>
            <Footer/>
        </div>
    )
}

export default Favorites
