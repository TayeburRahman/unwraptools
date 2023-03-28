import AddIcon from '@mui/icons-material/Add';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Container } from '@mui/system';
import React from 'react';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';
import SearchBar from '../Home/SearchBar';
import SearchFilters from '../Home/SearchFilters';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import TagHome from '../Home/TagHome';
import './Home.css';

function Homes() {
    return (
        <Box className='theme' >
            <NavBar />
            <Box>
                <Container sx={{ marginTop: "50px" }}>
                    <Grid container >
                        <Grid item xs={12} md={8} lg={8}>
                            <Grid container spacing={2} className="icon_box_left">
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"><GroupIcon className='icon-co custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />50,000+</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"> <BeenhereIcon className='custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />130,000+</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"><LocalOfferIcon className='custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />Exclusive Deals</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"><SupportAgentIcon className='custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />Sponsor Us</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box> </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Grid container spacing={2} className="icon_box_home">
                                <Link className="d-flex icon-box">
                                    <LinkedInIcon className='linkedIn icon-site' sx={{color: "rgb(0, 119, 181)"}} />
                                </Link>
                                <Link className="d-flex icon-box">
                                    <TwitterIcon className='Twitter icon-site' sx={{color: "rgb(0, 119, 181)"}} />
                                </Link>
                                <Link className="d-flex icon-box">
                                    <YouTubeIcon className='YouTub icon-site' sx={{color: "rgb(255, 0, 0)"}} />
                                </Link>

                            </Grid>
                        </Grid>
                    </Grid>




                </Container>
            </Box>
            <Box>
                <Container sx={{ marginTop: "60px" }}>
                    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                        <Grid item className='mt-rev' sx={6}>
                            <button className="button-6_1custom" ><AddIcon />Tools Added Today</button>
                        </Grid>
                        <Grid item className='mt-rev'  sx={6}>
                            <button className="button-6"  ><PostAddIcon /> News Added Today</button>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography className='fontSize-35_mt_10 revert ' variant="button" display="block" sx={{ fontSize: "50px", letterSpacing: "5px", marginBottom: '-15px' }}>
                             <span className='textBeg'>unwraptools</span>
                        </Typography>
                        <Typography className='fontSize-14_mt_10' variant="button" display="block" sx={{ fontSize: "1.25rem" }}>
                            THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY
                        </Typography>
                    </Grid>
                    <Grid>
                        <Box>
                            <TagHome/>
                        </Box>
                        <SearchBar />
                        <SearchFilters />
                    </Grid>
                    <Grid container mt={5}>
                        <Grid item>
                            <Card className='card' sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://i.ibb.co/YRW7TtM/f2d4185d453b97f131031702e80177a45e238730-1858x915.webp"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Box className="d-flex" sx={{ justifyContent: "space-between" }}>
                                        <Box>
                                            <Typography className='revert' gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <BookmarkAddedIcon />
                                            5
                                        </Box>
                                    </Box>
                                    <Typography className='text-left' variant="body2"  >
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Box>
                                        <Box className="tagCard1">
                                            <LockOpenIcon className='cardTagIcon' />
                                            Free Trial
                                        </Box>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon' href="#hh"><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default Homes
