import EastIcon from '@mui/icons-material/East';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';

function SponsorUs() {
    return (
        <div className='background'>
            <Container>
                <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link>
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>SponsorUs</text>
                </Box>
                <Box>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                        Sponsor Us
                    </Typography>
                </Box>
                <Box>
                    <Typography className='text-left mt-5'>
                        At unwraptools.io, we are committed to providing a comprehensive and reliable directory of AI tools for our users. To support our mission, we welcome partnerships and sponsorships from companies and organizations that share our passion for advancing the field of AI.
                    </Typography>
                    <Typography className='text-left mt-3' >
                        By sponsoring our website, you can reach a wide audience of AI professionals, researchers, and enthusiasts who are interested in the latest tools and technologies. Your support helps us continue to develop and maintain our directory, ensuring that it remains a valuable resource for the AI community.
                    </Typography>

                    <Typography className='revert text-left mt-4' gutterBottom variant="h5" component="div" >
                        Benefits of Sponsorship
                    </Typography>

                    <Typography className='mt-3 text-left'>As a sponsor of unwraptools.io, you will receive a range of benefits, including:</Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Increased visibility:</span> Your brand will be prominently featured on our website, giving you exposure to a large and engaged audience of AI professionals and enthusiasts.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Targeted marketing:</span> We can work with you to create customized marketing campaigns that reach your target audience, helping you to generate leads and grow your business.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Community engagement:</span> Your sponsorship helps support the AI community and allows us to continue providing valuable resources to our users. This can help improve your brand's reputation and enhance your relationships with customers and stakeholders.
                    </Typography>

                    <Typography className='revert text-left mt-4' gutterBottom variant="h5" component="div" >
                    Types of Sponsorship
                    </Typography>

                    <Typography className=' mt-3 text-left'>We offer several sponsorship options to suit your needs and budget, including:</Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Website sponsorship:</span> Your brand will be featured prominently on our website, including on our homepage and directory pages.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Newsletter sponsorship:</span> You can sponsor our monthly newsletter, which is sent to thousands of AI professionals and enthusiasts around the world.
                    </Typography>

                    <Typography className='text-left mt-2' >
                         <span style={{fontWeight:"600"}}>Event sponsorship:</span> We host regular events and webinars that offer valuable opportunities for networking and learning. By sponsoring one of these events, you can reach a targeted audience of AI professionals and showcase your brand's expertise.
                    </Typography>


                    <Typography className='revert text-left mt-4' gutterBottom variant="h5" component="div" >
                    Contact Us
                    </Typography>

                    <Typography className='text-left mt-2 mb-5' >
                    If you are interested in sponsoring unwraptools.io or learning more about our sponsorship options, please contact us at unwraptools@gmail.com. We look forward to hearing from you and working together to support the AI community.
                    </Typography>  
                </Box>
            </Container>
            <Footer/>
        </div>
    )
}

export default SponsorUs
