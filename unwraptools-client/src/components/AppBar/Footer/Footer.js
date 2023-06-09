import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Divider, Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
    return (
        <div className='padding-50'>
             
          <Container>
            <Box mt="40px"></Box>
             <Divider/>
             <Grid container mt="25px">
                <Grid item xs={12} md={6} lg={6} className="link-footer-box" sx={{display:"flex"}}>
                    <Link to="/privacy-policy" className="link-footer">Privacy Policy</Link>  <span className='ps-2 pe-2'>|</span>
                    <Link to="/terms_of_services" className="link-footer" sx={{paddingRight:"10px"}}>Terms of Services</Link> <span className='ps-2 pe-2'>|</span>
                    <Link to="/sponsor" className='link-footer' >
                        Sponsor Us</Link>
                </Grid> 
                <Grid item xs={12} md={6} lg={6} className="d-flex text-right ju-co" sx={{justifyContent: "flex-end"}}>
                    <a href="https://www.linkedin.com/company/unwraptools/" target="_blank" className="d-flex icon-box">
                    <LinkedInIcon className='linkedIn' sx={{color: "rgb(0, 119, 181)"}} />
                    </a>
                    <a href="https://twitter.com/UnwrapTools/" target="_blank" className="d-flex icon-box" >
                    <TwitterIcon className='Twitter' sx={{color: "rgb(0, 119, 181)"}} />
                    </a>
                    <a href="https://www.youtube.com/@UnwrapTools/" target="_blank" className="d-flex icon-box">
                    <YouTubeIcon className='YouTub' sx={{color: "rgb(255, 0, 0)"}} />
                    </a>  
                </Grid> 
            </Grid>
             </Container>
        </div>
    )
}

export default Footer
