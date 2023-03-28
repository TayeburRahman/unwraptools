import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dmain.css';

const DashboardMain = () => {
    const [users, setUsers] =  useState(0);


    useEffect(()=>{
   
       axios.get(`http://localhost:5000/api/v1/user/getByAllUsers`)
       .then(res => {
         if (res.status === 200) {
           console.log(res?.data )
           setUsers(res?.data)
         }else{
           console.log(res)
         }
       })
   
     },[])
    return (
        <Fragment> 
                        <div className="main-page">
                            <div className="container-fluid">
                                <div className="page-title-div">
                                    <h2 className="title text-left">Dashboard</h2>
                                </div>
                            </div>
                            <section className="section">
                                <div className="container-fluid">
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}} >
                                            <Link className="dashboard-stat dp-grid dashboard_main_regd"   href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <Diversity3Icon className='fontSize-40' />
                                                    </Box>
                                                    <Link to="manage_users" className='dp-grid text-right' style={{textDecoration:"none", color:"white"}}>
                                                        <span className="number counter">{users?.length}</span>
                                                        <span className="name">Total Users</span>
                                                    </Link>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}}>
                                            <Link className="dashboard-stat dp-grid dashboard_main_subjects" href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <AutoStoriesIcon className='fontSize-40' />
                                                    </Box>
                                                    <Link className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">All Tools</span>
                                                    </Link>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}}>
                                            <Link className="dashboard-stat dp-grid dashboard_main_classes" href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <HouseSidingIcon className='fontSize-40' />
                                                    </Box>
                                                    <Box className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">All News</span>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}}>
                                            <Link className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <FileCopyIcon className='fontSize-40' />
                                                    </Box>
                                                    <Box className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">New Tools & News</span>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>

                                    </Grid>

                                </div>
                            </section>

                        </div>
 

        </Fragment>
    );
};

export default DashboardMain;