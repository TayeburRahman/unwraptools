import BackupIcon from '@mui/icons-material/Backup';
import EastIcon from '@mui/icons-material/East';
import LockOpenIcon from '@mui/icons-material/LockOpen';
 
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


import { Link, useParams } from 'react-router-dom';
import NavBar from '../AppBar/NavBar';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import useAuth from '../../Firebase/Hooks/useAuth';
import Footer from '../AppBar/Footer/Footer';
import BookmarkButton from '../ProductInformation/BookmarkButtonPD';



function ProductInformation() {

    const [tools, setTools] = useState([]); 
    const [status ,setStatus] = useState(0) 
    const [categoryTools, setCategoryTools] = useState([]);
    const [category, setCategory] = useState([]);
    const {user}=useAuth()
    const { Id } = useParams();
 
    const email = user?.email

    useEffect(() => { 
        axios.get("http://localhost:5000/api/v1/tool/randomTool")
            .then(res => {
                if (res.status === 200) { 
                    setTools(res?.data?.tool)
                    setCategory(res?.data?.tool[0]?.categories)
                } else {
                    console.log(res)
                }
            })
    }, []) 

    useEffect(() => {




        axios.put(`http://localhost:5000/api/v1/tool/get/categorys`, {
            category
        })
            .then(res => {
                if (res.status === 200) {
                    setCategoryTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
    }, [Id, status, tools])
    console.log("array",category);
 
    return (
        <div className='background'>
            <NavBar />
            <div>
                <Container className='minH500'>
                     {
                        tools?.map((data, idx) =>(
                            <Box >
                        <Box className='textTagNav padding5' mt="40px" >
                            <Link className='routeLink'>Home</Link>
                            <span>  <EastIcon className='RouteLinkIcon' /> </span>
                            <Link className='routeLink'> Category</Link>
                            <span> <EastIcon className='RouteLinkIcon' /> </span>
                            <text className='textDeg'> {data?.tool_name}</text>
                        </Box>
                        <Grid container>
                            <Grid item xs={7} lg={6} md={6} className="padding5" >
                                <Box className='d-flex' sx={{ justifyContent: "space-between" }}>
                                    <Typography id="text-20" className='revert' gutterBottom variant="h3" component="div">
                                        {data?.tool_name}
                                    </Typography> 
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={5} className="d-flex padding5" sx={{ justifyContent: "flex-end" }}>
                                <Box className='d-flex'>
                                    <BookmarkButton tools={data} setStatus={setStatus} status={status} email={email}/>
                                </Box> 
                            </Grid> 
                        </Grid>

                        <Box>
                            <Grid container mt="20px">
                                <Grid item sx={12} md={12} lg={6} className='padding5' >
                                    <img
                                        className='w-100'
                                        src={data?.imageURL} 
                                    />
                                </Grid>
                                <Grid item sx={12} md={12} lg={6} className='padding5'>
                                    <Box className='text-left'>
                                        <Typography className='textDes'>DESCRIPTION:</Typography>
                                        <p className='text-left DesPText'    >
                                            {data?.short_description } 
                                        </p>

                                        {/* <div
                                            className='text-left mt-3'
                                            dangerouslySetInnerHTML={{
                                                __html: data?.description
                                            }}>
                                        </div>  */}
                                    </Box>
                                    <Box className='added_text d-flex text-12-sm'>
                                        <VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} />
                                        The Unwraptools team has used this tool and recommends it.
                                    </Box>
                                    <Box className='text-left d-flex added_text'>
                                        <BackupIcon className='FolderOpenIcon' />
                                        Added on  {data?.createdAt?.slice(0, 10)}
                                    </Box>

                                    <Grid container>
                                   {
                                        data?.price?.map((data, idx) =>(
                                       <Grid item className='m-2'> 
                                         <Typography className="tagCard1">
                                         {data === "Free Trial" && <LockOpenIcon className='cardTagIcon' />}  
                                       {data === "Freemium" && <LockOpenIcon className='cardTagIcon' />}  
                                       {data === "Free" && <TaskAltIcon className='cardTagIcon' />}  
                                       {data === "Paid" && <MonetizationOnIcon className='cardTagIcon' />}  
                                       {data === "Contact for Pricing" && <MonetizationOnIcon className='cardTagIcon' />}  
                                       {data === "Deals" && <SellIcon className='cardTagIcon' />}  
                                       {data} 
                                         </Typography>
                                    </Grid>
                                        ))
                                    }
                                   </Grid>

                                    <Box className="text-left" mt="15px">
                                    <a href={data?.websiteURL} target="_blank" size="small" className='OpenInNewIcon' id="OpenInNewIcon_Custom">VISIT <OpenInNewIcon /></a>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Box>
                        {
                            data?.description&&(
                                <Box className="pt-4">
                    <Typography className='textDes text-left'>{data?.tool_name} Feature</Typography>
                    <div
                                            className='text-left mt-2'
                                            dangerouslySetInnerHTML={{
                                                __html: data?.description
                                            }}>
                                        </div>
                    </Box>
                                
                            )
                        }   
                    </Box>

                    
                        ))
                     } 

                    <Box mb="30px" mt="20px"> 
                         <Box className='text-left' mt="50px">
                         <Typography className='BrowseAITools' mb="25px">Alternative AI Tools for STORYD</Typography>
                         
                         <Grid container> 
                                {
                                    categoryTools.slice(0, 5).map((tool, idx) => (
                                        <Grid item xs={12} md={6} lg={4}>
                                        <Card className='card mb-3' sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={tool?.imageURL}
                                                title="green iguana"
                                            />
                                            <CardContent sx={{paddingBottom: '0'}}>
                                              <Link to={`/tool/${tool?._id}`} className='CardLink'>
                                              <Box className="d-flex" sx={{ justifyContent: "space-between" }}>
                                                    <Box>
                                                        <Typography className='revert' gutterBottom variant="h5" component="div">
                                                            {tool?.tool_name}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <TurnedInNotIcon />
                                                        {tool?.favourite?.length}
                                                    </Box>
                                                </Box>
                                                <Typography className='text-left' variant="body2"  >
                                                     {tool?.short_description?.slice(0, 100)}.
                                                </Typography>
                                                <Box>
                                                <Grid container className='mt-2'>
                                               {
                                                    tool?.price?.map((data, idx) =>(
                                                   <Grid item className='m-2'> 
                                                     <Typography className="tagCard1">
                                                     {data === "Free Trial" && <LockOpenIcon className='cardTagIcon' />}  
                                                   {data === "Freemium" && <LockOpenIcon className='cardTagIcon' />}  
                                                   {data === "Free" && <TaskAltIcon className='cardTagIcon' />}  
                                                   {data === "Paid" && <MonetizationOnIcon className='cardTagIcon' />}  
                                                   {data === "Contact for Pricing" && <MonetizationOnIcon className='cardTagIcon' />}  
                                                   {data === "Deals" && <SellIcon className='cardTagIcon' />}  
                                                   {data} 
                                                     </Typography>
                                                </Grid>
                                                    ))
                                                }
                                               </Grid>
                                                </Box>
                                              </Link>
                                            </CardContent>
            
                                            <CardActions sx={{ justifyContent: "space-between" }}>
                                                <Link to={`/${tool?.websiteURL}`} size="small" className='OpenInNewIcon' href="#hh"><OpenInNewIcon /></Link> 
                                                 <BookmarkButton setStatus={setStatus} status={status} tool={tool} email={email}/>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    ))
                                }
                            </Grid>
                        </Box> 
                    </Box> 
                </Container>
                <Container>
                <Box className='text-left mt-5'>
                            <Typography className='BrowseAITools' mb="15px">Browse AI Tools Similar to Looka</Typography>
                            <Box className='d-flex '>
                                <Link className='link_similar_tools'> Browse 7 AI logo generator tools.</Link>
                                <Link  className='link_similar_tools'> Browse 53 AI design assistant tools.</Link>
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
