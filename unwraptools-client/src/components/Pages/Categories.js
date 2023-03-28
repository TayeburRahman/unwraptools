import EastIcon from '@mui/icons-material/East';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';
import './Category.css';

function Categories() {
    return (
        <div className='background'>
            <NavBar />
            <Container>
                <Box className='textTagNav padding5' mt="40px" >
                    <Link className='routeLink'>Home</Link>
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>Categories</text>
                </Box>
                <Box>
                    <Typography className='revert text-left pt-4' gutterBottom variant="h3" component="div">
                        AI TOOL CATEGORIES
                    </Typography>
                    <Typography className='textDes text-left'>Find the AI you need. Fast & Easy.</Typography>
                </Box>
                <Box className="pt-4">
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Text & Writing</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Image & Design</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Audio & Music</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>

                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>

                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Video & Animation</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Marketing & Sales</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Lifestyle & Entertainment</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Development & IT</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Business & Admin</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Education & Information</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Copywriting <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>General Writing <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Story Teller <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink'>Email Assistant <span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Paraphraser<span className='spanCategory'>( 81 tools )</span></Link>
                            <Link className='routeLink colorLink'>Summarizer <span className='spanCategory'>( 81 tools )</span></Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}

export default Categories
