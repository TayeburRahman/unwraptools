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
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import SearchSystem from '../Home/SearchSystem';
import './Home.css';

function Homes() {

    const [tools ,setTools] = useState([])
    const [status ,setStatus] = useState(0)

    const {user}=useAuth()

    useEffect(()=>{ 
        axios.get('http://localhost:5000/api/v1/tool/getActiveTool')
        .then(res => {
          if (res.status === 200) {
            // console.log('sssss',res?.data)
            setTools(res?.data?.tools)
          }else{
            console.log(res)
          }
        })
      },[status])
 


      const HandleBookmark = (id, bookMark)=>{ 
        const email = user?.email 

        if(bookMark){
            axios.put(`http://localhost:5000/api/v1/tool/removebookmark/${id}`,{email})
            .then(res => {
              if (res.status === 200) {
                // console.log('sssss',res?.data)
                setStatus( status === 1? 0:1)
              }else{
                console.log(res)
              }
            })
        }else{
        axios.put(`http://localhost:5000/api/v1/tool/addbookmark/${id}`,{email})
        .then(res => {
          if (res.status === 200) {
            // console.log('sssss',res?.data)
            setStatus( status === 1? 0:1)
          }else{
            console.log(res)
          }
        })
        }
 
      }

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
                        <SearchSystem/>
                    </Grid>
                    <Grid container mt={5}>
                         {
                            tools?.map((tool, idx)=>(
                          <Grid item xs={12} md={6} lg={4}>
                            <Card className='card mb-3' sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://i.ibb.co/YRW7TtM/f2d4185d453b97f131031702e80177a45e238730-1858x915.webp"
                                    title="green iguana"
                                />
                                <CardContent>
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
                                         {tool?.short_description}
                                    </Typography>
                                    <Box>
                                        <Box className="tagCard1">
                                            <LockOpenIcon className='cardTagIcon' />
                                            Free Trial
                                        </Box>
                                    </Box>
                                  </Link>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Link to={`/${tool?.websiteURL}`} size="small" className='OpenInNewIcon' href="#hh"><OpenInNewIcon /></Link>
                                    <Button size="small" onClick={e => HandleBookmark(tool?._id, tool?.bookMark)} className='BookmarkAddIcon'>{tool?.bookMark ===true?  <BookmarkAddedIcon />:<BookmarkAddIcon />}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                            ))
                         }
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default Homes
