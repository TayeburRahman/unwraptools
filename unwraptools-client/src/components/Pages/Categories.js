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
                            <Link className='routeLink colorLink' to="/categories/Copywriting">Copywriting <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/General_Writing">General Writing <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Story_Teller">Story Teller <span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Email_Assistant">Email Assistant <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Paraphraser">Paraphraser<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Summarizer">Summarizer <span className='spanCategory'></span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Image & Design</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Art">Art <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Image_Generator">Image Generator<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Design">Design<span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Avatars">Avatars<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Image_Editing">Image Editing<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Logo_Generator">Logo Generator <span className='spanCategory'></span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Audio & Music</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Audio_Editing">Audio Editing<span className='spanCategory'></span></Link>

                            <Link className='routeLink colorLink' to="/categories/Text_Speech">Text To Speech <span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Music">Music<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Transcriber">Transcriber<span className='spanCategory'></span></Link>

                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Video & Animation</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Personalized_Videos">Personalized Videos <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Video_Generator">Video_Generator<span className='spanCategory'></span></Link>
                             
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Video_Editing">Video Editing<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/3D">3D <span className='spanCategory'></span></Link>
                            
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Marketing & Sales</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/SEO">SEO <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/E-commerce">E-commerce<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Marketing">Marketing<span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Social_Media ">Social Media<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Sales">Sales<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Email_Marketing">Email Marketing <span className='spanCategory'></span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Lifestyle & Entertainment</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Fashion">Fashion <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Fun_Tools">Fun Tools<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Gift_Ideas">Gift Ideas<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Life_Assistant">Life Assistant<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Fitness">Fitness<span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Real_Estate">Real Estate<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Gaming">Gaming<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Healthcare">Healthcare <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Memory">Memory <span className='spanCategory'></span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Development & IT</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Prompts">Prompts <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Developer">Developer<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Spreadsheets">Spreadsheets<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Testing_QA ">Testing QA <span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Code_Assistant">Code Assistant<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Low-Code">Low-Code/No-Code<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/SQL">SQL <span className='spanCategory'></span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Business & Admin</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Customer_Support ">Customer Support  <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Human_Resources">Human Resources<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Presentations">Presentations<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Startup">Startup <span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Finance">Finance <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Legal_Assistant">Legal Assistant<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Productivity">Productivity <span className='spanCategory'></span></Link>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container className='pt-2 pb-3'>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography className='revert-medium pb-2 text-left'>Education & Information</Typography>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Education_Assistant">Education Assistant <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Research">Research <span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/AI_Search-Engines">AI Search Engines <span className='spanCategory'></span></Link>
                        </Grid>
                        <Grid className='d-grid text-left' item xs={12} md={4} lg={4}>
                            <Link className='routeLink colorLink' to="/categories/Experiments">Experiments<span className='spanCategory'></span></Link>
                            <Link className='routeLink colorLink' to="/categories/Resources">Resources<span className='spanCategory'></span></Link>
                         
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}

export default Categories
