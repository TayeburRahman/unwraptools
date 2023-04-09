import BackupIcon from '@mui/icons-material/Backup';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SellIcon from '@mui/icons-material/Sell';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function ToolInformation() {
    const [tools, setTools] = useState([]);
    const { toolId } = useParams();

 

    useEffect(() => {
        console.log(toolId)
        axios.get(`https://server.unwraptools.io/api/v1/tool/getTools/${toolId}`)
            .then(res => {
                if (res.status === 200) {
                    console.log('sssss', res?.data)
                    setTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
    }, [toolId])

    console.log('ssss', toolId)

    return (
        <div className='background p-5'>
            <Paper sx={{ width: '100%', overflow: 'hidden', minHeight: "80vh" }}>
                <Container>
                    <Box >
                        <Grid container>
                            <Grid item xs={12} lg={6} md={6} className="padding5" >
                                <Box className='d-flex' sx={{ justifyContent: "space-between" }}>
                                    <Typography className='revert' gutterBottom variant="h3" component="div">
                                        {tools?.tool_name}
                                    </Typography>

                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} className="d-flex padding5" sx={{ justifyContent: "flex-end" }}>
                                <Box className='d-flex'>
                                    <a href={tools?.websiteURL} target="_blank" size="small" className='OpenInNewIcon ps-3 pe-3' id="OpenInNewIcon_Custom">VISIT <OpenInNewIcon /></a>
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
                                    <Box className='added_text d-flex text-12-sm text-left'>
                                        <VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} />
                                        The Unwraptools team has used this tool and recommends it.
                                    </Box>
                                    <Box className='text-left d-flex added_text' sx={{width: "fit-content"}}>
                                        <BackupIcon className='FolderOpenIcon' />
                                        Added on {tools?.createdAt?.slice(0, 5)}
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
                                     


                                </Grid>

                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </Paper>
        </div>
    )
}

export default ToolInformation


{/* <Grid container>
                        <Grid item sx={12} md={12} lg={6}>
                            <img src='/' />
                        </Grid>
                        <Grid item sx={12} md={12} lg={6}>

                        </Grid>

                    </Grid> */}
