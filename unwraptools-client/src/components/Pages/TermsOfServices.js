import EastIcon from '@mui/icons-material/East';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';

function TermsOfServices() {
    return (
        <div className='background'>
            <Container>
                <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link>
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>TermsOfServices</text>
                </Box>
                <Box>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                    Terms of Services
                    </Typography>
                </Box>
                <Box>
                    <Typography className='text-left mt-5'>
                    Welcome to unwraptools.io, the AI tools directory. By accessing and using our website, you agree to comply with the following Terms of Service, which are designed to ensure a safe and positive experience for all users.
                    </Typography> 

                    <Typography className='revert text-left mt-4' gutterBottom variant="h5" component="div" >
                    Information We Collect
                    </Typography> 

                    <Typography className='text-left mt-2' >
                    We collect personal information from you when you visit our website and use our AI tools directory. The information we collect may include your name, email address, and any other information you choose to provide us.
                    </Typography> 

                    <Typography className='revert text-left mt-4' gutterBottom variant="h5" component="div" >
                      How We Use Your Information
                    </Typography>

                    <Typography className='mt-3 text-left'> We use the information we collect to provide you with the best possible experience when using our website. </Typography>

                    <Typography className='mt-3 text-left'> This includes:</Typography>

                    <Typography className='text-left mt-2' >
                    Providing you with access to our AI tools directory.
                    </Typography>

                    <Typography className='text-left mt-2' >
                    Sending you emails about updates to our website and new AI tools that may be of interest to you
                    </Typography>

                    <Typography className='text-left mt-2' >
                    Responding to your inquiries and requests
                    </Typography>

                    <Typography className='text-left mt-2' >
                    Improving our website and the AI tools directory by analyzing how users interact with them
                    </Typography>

                    <Typography className='text-left mt-2' >
                    Protection of Your Information
                    </Typography>

                    <Typography className='text-left mt-2' >
                    We take all necessary steps to protect your personal information from unauthorized access, disclosure, or alteration. We use industry-standard security measures to safeguard your information, including SSL encryption technology.
                    </Typography>


                    <Typography className='revert text-left mt-4' gutterBottom variant="h5" component="div" >
                    Changes to This Policy
                    </Typography>

                    <Typography className='text-left mt-2' >
                    We reserve the right to make changes to this privacy policy at any time. Any changes will be reflected on this page, and we encourage you to check this page periodically to stay informed about our privacy practices.
                    </Typography>  

                    <Typography className='text-left mt-2 mb-5' >
                    By using Unwraptools.io, you consent to our privacy policy. If you have any questions or concerns about our privacy practices, please contact us at unwraptools@gmail.com.
                    </Typography>  
                </Box>
            </Container>
            <Footer/>
        </div>
    )
}

export default TermsOfServices
