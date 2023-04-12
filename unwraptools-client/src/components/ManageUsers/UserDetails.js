import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Avatar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [activeNews, setActiveNews] = useState([]);
    const [inactiveNews, setInactiveNews] = useState([]);

    const [activeTool, setActiveTool] = useState([]);
    const [inactiveTool, setInactiveTool] = useState([]); 

    const { email } = useParams() 

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/user/getUsers/${email}`)
            .then(res => {
                
                    setUsers(res?.data.user)
                
            })

    }, [email])

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/news/user/active/${email}`)
            .then(res => {
                setActiveNews(res?.data?.active) 
                console.log('res?.data?.active', res?.data?.active)
            })

            axios.get(`https://server.unwraptools.io/api/v1/news/user/inactive/${email}`)
            .then(res => { 
                setInactiveNews(res?.data?.inactive)
                console.log('res?.data?.inactive', res?.data?.inactive)
            })
    }, [email])

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/tool/user/active/${email}`)
        .then(res => { 
            setActiveTool(res?.data?.active)  
        }) 

        axios.get(`https://server.unwraptools.io/api/v1/tool/user/inactive/${email}`)
        .then(res => { 
            setInactiveTool(res?.data?.inactive)  
        }) 
    }, [])

 

    return (
        <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid spacing={2} alignItems="center">
                        <span className="textBeg revert p=0 ">Admin Profile </span>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box className="divMain" >
                <Paper sx={{ width: '100%', overflow: 'hidden', minHeight: "80vh" }}>
                    <Grid container className='mt-4' sx={{ justifyContent: 'center' }}>
                        <Grid item className="d-grid"  >
                            <Box className="box_profile text-left pb-3"  >
                                <Avatar className='mt-4 mb-2 abater-profile' alt={users.displayName} src={users?.photoURL} />
                                <Typography variant="button" > {users?.displayName}</Typography>
                                <Typography variant="body2" > <span className='span-profile me-2 '> Email:</span> {users?.email}</Typography>
                                <Typography variant="body2" > <span className='span-profile me-3  '> Role:</span> {users?.role}</Typography>
                                <Typography variant="body2" > <span className='span-profile'> Create Account:</span> {users?.createdAt?.slice(0, 10)}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className='p-4'>
                        <Box className="box-bg"><Typography className='textDes text-left'>Submit The Tools:</Typography></Box> 

                        {
                            activeTool.length === 0 && inactiveTool.length === 0 ? (
                                <Box className="d-flex notfoundBox w-100">
                                    <WarningAmberIcon className='WarningAmberIcon' />    <Typography className='textDes text_center mt-1'> No Tools Submit Yet !</Typography>
                                </Box>
                            ) : (
                                <Box className="d-flex foundBox w-100">
                                    <Typography className='textDes text_center mt-1'> Active Tool <span>{activeTool?.length}</span> </Typography>
                                    <span className='ms-3 me-3'> || </span>
                                    <Typography className='textDes text_center mt-1'> Inactive Tool {inactiveTool?.length} </Typography>
                                </Box>
                            )
                        }




                    </Grid>

                    <Grid className='p-4'>
                        <Box className="box-bg"><Typography className='textDes text-left'>Submit The News:</Typography></Box>



                        {
                            activeNews.length === 0 && inactiveNews.length === 0 ? (
                                <Box className="d-flex notfoundBox w-100">
                                    <WarningAmberIcon className='WarningAmberIcon' />    <Typography className='textDes text_center mt-1'> No News Submit Yet !</Typography>
                                </Box>
                            ) : (
                                <Box className="d-flex foundBox w-100">
                                    <Typography className='textDes text_center mt-1'> Active News <span>{activeNews?.length}</span> </Typography>
                                    <span className='ms-3 me-3'> || </span>
                                    <Typography className='textDes text_center mt-1'> Inactive News {inactiveNews?.length} </Typography>
                                </Box>
                            )
                        }


                    </Grid>
                </Paper>
            </Box>
        </Paper>
    );
};

export default UserDetails;