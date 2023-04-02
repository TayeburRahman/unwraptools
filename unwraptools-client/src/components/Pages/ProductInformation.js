import BackupIcon from '@mui/icons-material/Backup';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import EastIcon from '@mui/icons-material/East';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


import { Link, useParams } from 'react-router-dom';
import NavBar from '../AppBar/NavBar';


import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
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
    const [categoryTools, setCategoryTools] = useState([]);
    const { Id } = useParams();
    const [status ,setStatus] = useState(0) 
    const {user}=useAuth()
 
    const email = user?.email

    useEffect(() => {
        console.log(Id)
        axios.get(`http://localhost:5000/api/v1/tool/getTools/${Id}`)
            .then(res => {
                if (res.status === 200) {
                    console.log('sssss', res?.data)
                    setTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
    }, [Id, status]) 

    useEffect(() => {
        console.log(Id)
        axios.get(`http://localhost:5000/api/v1/tool/getTools/${Id}`)
            .then(res => {
                if (res.status === 200) {
                    console.log('sssss', res?.data)
                    setTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
    }, [Id, status])  
     
 
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
                            <text className='textDeg'> {tools?.tool_name}</text>
                        </Box>
                        <Grid container>
                            <Grid item xs={7} lg={6} md={6} className="padding5" >
                                <Box className='d-flex' sx={{ justifyContent: "space-between" }}>
                                    <Typography id="text-20" className='revert' gutterBottom variant="h3" component="div">
                                        {tools?.tool_name}
                                    </Typography> 
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={5} className="d-flex padding5" sx={{ justifyContent: "flex-end" }}>
                                <Box className='d-flex'>
                                    <BookmarkButton tools={tools} setStatus={setStatus} status={status} email={email}/>
                                </Box> 
                            </Grid> 
                        </Grid>

                        <Box>
                            <Grid container mt="20px">
                                <Grid item sx={12} md={12} lg={6} className='padding5' >
                                    <img
                                        className='w-100'
                                        src={tools?.imageURL} 
                                    />
                                </Grid>
                                <Grid item sx={12} md={12} lg={6} className='padding5'>
                                    <Box className='text-left'>
                                        <Typography className='textDes'>DESCRIPTION:</Typography>
                                        <p className='text-left DesPText'    >
                                            {tools?.short_description } 
                                        </p>

                                        <div
                                            className='text-left mt-3'
                                            dangerouslySetInnerHTML={{
                                                __html: tools?.description
                                            }}>
                                        </div> 
                                    </Box>
                                    <Box className='added_text d-flex text-12-sm'>
                                        <VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} />
                                        The Unwraptools team has used this tool and recommends it.
                                    </Box>
                                    <Box className='text-left d-flex added_text'>
                                        <BackupIcon className='FolderOpenIcon' />
                                        Added on  {tools?.createdAt?.slice(0, 10)}
                                    </Box>

                                    <Grid container>
                                   {
                                        tools?.price?.map((data, idx) =>(
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
                                    <a href={tools?.websiteURL} target="_blank" size="small" className='OpenInNewIcon' id="OpenInNewIcon_Custom">VISIT <OpenInNewIcon /></a>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                    <Box mb="30px" mt="20px">
                        
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
                        <Box className='text-left mt-5'>
                            <Typography className='BrowseAITools' mb="15px">Browse AI Tools Similar to Looka</Typography>
                            <Box className='d-flex '>
                                <Link className='link_similar_tools'> Browse 7 AI logo generator tools.</Link>
                                <Link  className='link_similar_tools'> Browse 53 AI design assistant tools.</Link>
                            </Box>
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
