import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Divider, Grid, Typography } from '@mui/material';
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
                <Grid item xs={6} md={6} lg={6} className="link-footer-box" sx={{display:"flex"}}>
                    <Link to="/" className="link-footer">Privacy Policy</Link>  <span className='ps-2 pe-2'>|</span>
                    <Link to="/" className="link-footer" sx={{paddingRight:"10px"}}>Terms of Services</Link> <span className='ps-2 pe-2'>|</span>
                    <Link to="" className='link-footer' >
                        Sponsor Us</Link>
                </Grid> 
                <Grid item xs={6} md={6} lg={6} className="d-flex text-right" sx={{justifyContent: "flex-end"}}>
                    <Link className="d-flex icon-box">
                    <LinkedInIcon className='linkedIn' sx={{color: "rgb(0, 119, 181)"}} />
                    </Link>
                    <Link className="d-flex icon-box" >
                    <TwitterIcon className='Twitter' sx={{color: "rgb(0, 119, 181)"}} />
                    </Link>
                    <Link className="d-flex icon-box">
                    <YouTubeIcon className='YouTub' sx={{color: "rgb(255, 0, 0)"}} />
                    </Link>  
                </Grid>
                <Grid item xs={6} md={6} lg={6}> 
                    <Typography className='text-left' sx={{marginTop:"10px"}}>Copyright © 2023 - Unwraptools™</Typography>
                </Grid>
            </Grid>
             </Container>
        </div>
    )
}

export default Footer
