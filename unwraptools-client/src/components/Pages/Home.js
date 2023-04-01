import AddIcon from '@mui/icons-material/Add';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SellIcon from '@mui/icons-material/Sell';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Grid, Typography } from '@mui/material';
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
import BookmarkButton from './BookmarkButton';
import './Home.css';

function Homes() {

    const [tools ,setTools] = useState([])
    const [status ,setStatus] = useState(0) 

    const [selectCategory, setSelectCategory] = useState([]);
    const [sort, setSortBy] = useState("popular");
    const [pricing, setPricing] = useState([]);
    const [features, setFeatures] = useState([]);

    console.log("features is : ", features)
    console.log("pricing is : ", pricing)
    console.log("pricing is : ", sort)

    const {user}=useAuth()
    const email = user?.email
 

    useEffect(()=>{ 
        let url= `http://localhost:5000/api/v1/tool/get/filter` ;

        // if(selectCategory){
        //      url = `http://localhost:5000/api/v1/tool/get/filter${selectCategory && `/${selectCategory}`}`
        //     }else{
        //     url = `http://localhost:5000/api/v1/tool/get/filter`
        // }

        if(selectCategory?.length > 0){

            if(pricing?.length > 0 || features?.length > 0 || sort){
                url = `${url}${selectCategory?.map((f,index)=> `${f.toLowerCase()}=true&`).join('')}`
            }
             else{
                 url = `${url}?${selectCategory?.map((f,index)=> `${f.toLowerCase()}=true&`).join('')}`
             }  

        }

        if(pricing?.length > 0 ){
            if(features?.length > 0 || sort || selectCategory?.length > 0 ){
                url = `${url}${pricing.map((f,index)=> `${f.toLowerCase()}=true&`).join('')}`
            }else{
                url = `${url}?${pricing.map((f,index)=> `${f.toLowerCase()}=true&`).join('')}`
            }
        }

        if(features?.length > 0){
            if(pricing?.length > 0 || sort || selectCategory?.length > 0 ){
            
                url = `${url}${features.map((f,index)=> `${f.toLowerCase()}=true&`).join('')}`
            }else{

                url = `${url}?${features.map((f,index)=> `${f.toLowerCase()}=true&`).join('')}`
            }
        }

        if(sort){
            if(pricing?.length > 0 || features?.length > 0 || selectCategory?.length > 0 ){
                url = `${url}sort=${sort}`
            }else{
                url = `${url}?sort=${sort}`
            }
        }
         
      console.log("url", url)

      
        axios.get(url) 
        .then(res => {
          if (res.status === 200) {
            // console.log('sssss',res?.data)
            setTools(res?.data?.tools)
          }else{
            console.log(res)
          }
        })
      },[status, selectCategory,features, pricing, sort])
 


 

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
                        <SearchSystem pricing={pricing} setPricing={setPricing} features={features} setFeatures={setFeatures} setSortBy={setSortBy} sort={sort}/>
                    </Grid>
                    <Grid container mt={5}>
                         {
                            tools?.map((tool, idx)=>(
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
                                         {tool?.short_description?.slice(0, 100)}
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
                    
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default Homes
