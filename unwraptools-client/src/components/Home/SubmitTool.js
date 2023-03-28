import EastIcon from '@mui/icons-material/East';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';
import HorizontalStepper from '../SubmitTool/HorizontalStepper';


function SubmitTool() {
    return (
        <div className='background'>
            <NavBar/>
            <Container className="pb-5"> 
            <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link> 
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>Submit Tool</text>
                </Box>
                <Box className='mb-5'>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                      Submit your tool
                    </Typography>
                    <p className='text-left DesPText'>
                    It's free and takes less than a minute.
                    </p>
                </Box>
                <HorizontalStepper/>
            </Container>
            <Footer/>
        </div>
    )
}

export default SubmitTool
