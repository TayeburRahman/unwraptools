import BiotechIcon from '@mui/icons-material/Biotech';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SchoolIcon from '@mui/icons-material/School';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

 

export default function ManageNewsTable({slice}) {

    const [allNews, setAllNews] =  useState([]);
    const [ status, setStatus] =  useState(1);

    useEffect(()=>{ 
        axios.get('http://localhost:5000/api/v1/news/getActiveNews')
        .then(res => {
          if (res.status === 200) {
             if(slice){
              setAllNews(res?.data?.news)
             }else{
              setAllNews(res?.data?.news?.slice(0,5))
             }
           
          }else{
            console.log(res)
          }
        })
      },[status])

 
      const handleInactive = (_id) =>{ 
        axios.put(`http://localhost:5000/api/v1/news/inactive/${_id}`)
        .then(res => {
          if (res.status === 200) { 
            setStatus(status === 1? 0:1) 
          }else{
            console.log(res)
          }
        }) 
      }
 
      const handleDelete = (_id) =>{
        axios.put(`http://localhost:5000/api/v1/news/deleteNews/${_id}`)
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            setStatus(status === 1? 0:1) 
          }else{
            console.log(res)
          }
        }) 
      } 

    return (
        <Box   className="pb-4">
            <Box sx={{ minWidth: 650 }} size="small" aria-label="a dense table"> 
                
                    {allNews?.map((news, idx) => (
                         <Grid container className='ps-3 pe-3 pt-2 d-grid' sx={{borderBottom:"1px solid #bfbfbf"}}>
                        <Grid item key={idx} className="pt-2"> 
                              <Box className="text-left">
                                <a href={news?.contentLink} target="_blank" style={{textDecoration:"none", color:"black"}} >
                                <h6 className='text-left'> {news?.news_name} </h6>
                              </a>
                              </Box>  
                        </Grid>   
                        <Grid item className="d-flex pt-1 pb-2" sx={{justifyContent: "space-between"}}> 
                              <Box className="d-flex ">  
                              <Grid container>
                                   {
                                        news?.categories?.map((data, idx) =>(
                                       <Grid item className='m-2'> 
                                         <Typography className="tagCard1">
                                         {data === "Podcast" && <PodcastsIcon className='cardTagIcon' />} 
                                         {data === "Opinion" && <ContactSupportIcon className='cardTagIcon' />}  
                                       {data === "Research" && <BiotechIcon className='cardTagIcon' />}  
                                       {data === "Updates" && <TaskAltIcon className='cardTagIcon' />}  
                                       {data === "Interesting" && <LightbulbIcon className='cardTagIcon' />}  
                                       {data === "Learn" && <SchoolIcon className='cardTagIcon' />}  
                                       {data === "Video" && <VideocamIcon className='cardTagIcon' />}  
                                       {data} 
                                         </Typography>
                                    </Grid>
                                        ))
                                    }
                                   </Grid> 
                              </Box>  
                              <Box className="d-flex">
                              <span className='d-flex-jc-ac me-3'> {news?.user_email} </span> 

                              <Box className='d-flex-jc-ac  me-3'> <Button onClick={e => handleInactive(news?._id)} color="success" variant="outlined">Status Inactive</Button></Box>
                              <Box className='d-flex-jc-ac '> 
                             <Button 
                             onClick={e => handleDelete(news?._id)} 
                            variant="outlined" 
                            color="error" 
                            sx={{ padding: "5px 5px", minWidth: "5px" }}>
                                    Remove
                                </Button>
                            </Box>
                         
                              </Box>
                              
                        </Grid>
                        </Grid>
                    ))}
                 
            </Box>
        </Box>
    );
}