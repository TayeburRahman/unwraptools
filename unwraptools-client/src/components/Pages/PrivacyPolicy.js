import EastIcon from '@mui/icons-material/East';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';

function PrivacyPolicy() {
    return (
        <div className='background'>
            <Container>
                <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link>
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>PrivacyPolicy</text>
                </Box>
                <Box>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                         Privacy Policy
                    </Typography>
                </Box>
                <Box>
                    <Typography className='text-left mt-5'>
                    At Unwraptools.io, we take your privacy very seriously. This privacy policy outlines the ways in which we collect, use, and protect your personal information when you visit our website.
                    </Typography> 
                    <Typography className='text-left mt-4' >
                         <span style={{fontWeight:"600"}}>Use of Resources:</span> All resources provided on unwraptools.io are for informational and educational purposes only. Any illegal or unethical use of our resources is strictly prohibited, and we reserve the right to remove any content or user that violates this policy.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Copyright: </span> All content on our website, including text, images, and software, is the property of unwraptools.io or our partners and is protected by copyright laws. You may not reproduce, modify, or distribute any content on our website without our prior written consent.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>User Conduct:</span> We expect all users to behave in a respectful and responsible manner while using our website. This includes refraining from posting inappropriate content, harassing or threatening other users, or engaging in any activity that could harm our website or its users.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Disclaimer of Liability: </span> While we strive to provide accurate and up-to-date information on our website, we make no guarantees about the accuracy or reliability of our content. We are not responsible for any errors or omissions, and we are not liable for any damages or losses that may result from using our website or our resources.
                    </Typography>
                    
                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Changes to Terms: </span> We reserve the right to update these Terms of Service at any time, without notice. By continuing to use our website after any such changes, you agree to be bound by the updated terms.
                    </Typography>
               

                  
                    <Typography className='text-left mt-4 mb-5' >
                    If you have any questions about our Terms of Service or need assistance using our website, please contact us at unwraptools@gmail.com. Thank you for using unwraptools.io and helping to make our community a better place.
                    </Typography>  
                </Box>
            </Container>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy
