import BackupIcon from '@mui/icons-material/Backup';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import EastIcon from '@mui/icons-material/East';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Link } from 'react-router-dom';
import NavBar from '../AppBar/NavBar';
import ShearerIcon from '../ProductInformation/SheareIcon';


import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../AppBar/Footer/Footer';



function ProductInformation() {

    return (
        <div className='background'>
            <NavBar />
            <div>
                <Container>
                    <Box >
                        <Box className='textTagNav padding5' mt="40px" >
                            <Link className='routeLink'>Home</Link>
                            <span>  <EastIcon className='RouteLinkIcon' /> </span>
                            <Link className='routeLink'> Category</Link>
                            <span> <EastIcon className='RouteLinkIcon' /> </span>
                            <text className='textDeg'>Name</text>
                        </Box>
                        <Grid container>
                            <Grid item xs={12} lg={6} md={6} className="padding5" >
                                <Box className='d-flex' sx={{ justifyContent: "space-between" }}>
                                    <Typography className='revert' gutterBottom variant="h3" component="div">
                                        Lizard
                                    </Typography>
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon' id="OpenInNewIcon_Custom">VISIT <OpenInNewIcon /></Link>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} className="d-flex padding5" sx={{ justifyContent: "flex-end" }}>
                                <Box className='d-flex'>
                                    <Button size="small" className='BookmarkAddIcon margin-r'><BookmarkAddIcon /> 100</Button>
                                    <ShearerIcon />
                                </Box>

                            </Grid>

                        </Grid>

                        <Box>
                            <Grid container mt="20px">
                                <Grid item sx={12} md={12} lg={6} className='padding5' >
                                    <img
                                        className='w-100'
                                        src="https://i.ibb.co/YRW7TtM/f2d4185d453b97f131031702e80177a45e238730-1858x915.webp"
                                        title="green iguana"
                                    />
                                </Grid>
                                <Grid item sx={12} md={12} lg={6} className='padding5'>
                                    <Box className='text-left'>
                                        <Typography className='textDes'>DESCRIPTION:</Typography>
                                        <p className='text-left DesPText'    >
                                            Europe’s leading digital staffing platform. The name Freeday comes from the idea that everyone should be free on Friday. It's an explanation with a wink, but we take it seriously. Here you can outsource boring repetitive tasks to our digital employees. Freeday helps teams build their own digital workforce to fully unlock their creative and productive capacities, leading to improved experiences and revenues
                                        </p>
                                    </Box>
                                    <Box className='added_text d-flex text-12-sm'>
                                        <VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} />
                                        The Unwraptools team has used this tool and recommends it.
                                    </Box>
                                    <Box className='text-left d-flex added_text'>
                                        <BackupIcon className='FolderOpenIcon' />
                                        Added on November 30
                                    </Box>

                                    <Box className="tagCard1">
                                        <LockOpenIcon className='cardTagIcon' />
                                        Free Trial
                                    </Box>

                                    <Box className="text-left" mt="15px">
                                        <Typography variant="caption" display="block" gutterBottom>
                                            Social Links
                                        </Typography>
                                        <Box className='d-flex'>
                                            <Link className="d-flex icon-box">
                                                <LinkedInIcon className='linkedIn' />
                                            </Link>
                                            <Link className="d-flex icon-box">
                                                <TwitterIcon className='Twitter' />
                                            </Link>
                                            <Link className="d-flex icon-box">
                                                <YouTubeIcon className='YouTub' />
                                            </Link>
                                        </Box>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                    <Box mb="30px" mt="20px">
                        <Box className='text-left'>
                            <Typography className='BrowseAITools' mb="15px">Browse AI Tools Similar to Looka</Typography>
                            <Box className='d-flex '>
                                <Link className='link_similar_tools'> Browse 7 AI logo generator tools.</Link>
                                <Link  className='link_similar_tools'> Browse 53 AI design assistant tools.</Link>
                            </Box>
                        </Box> 
                        <Box className='text-left' mt="50px">
                         <Typography className='BrowseAITools' mb="25px">Alternative AI Tools for STORYD</Typography>
                         <Grid container>
                        <Grid item sx={12} md={6} lg={4} mb="10px">
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
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon'><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                        <Grid item sx={12} md={6} lg={4} mb="10px">
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
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon'><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                        <Grid item sx={12} md={6} lg={4} mb="10px">
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
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon'><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                        <Grid item sx={12} md={6} lg={4} mb="10px">
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
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon'><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                        <Grid item sx={12} md={6} lg={4} mb="10px">
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
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon'><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                        <Grid item sx={12} md={6} lg={4} mb="10px">
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
                                    <Link to="/tool/1212" size="small" className='OpenInNewIcon'><OpenInNewIcon /></Link>
                                    <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                        
                    </Grid>
                        </Box>

                    </Box> 
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductInformation


{/* <Grid container>
                        <Grid item sx={12} md={12} lg={6}>
                            <img src='/' />
                        </Grid>
                        <Grid item sx={12} md={12} lg={6}>

                        </Grid>

                    </Grid> */}
