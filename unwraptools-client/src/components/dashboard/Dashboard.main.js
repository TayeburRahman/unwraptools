import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import ManageNewsTable from '../ManageNewsTable/ManageNewsTable';
import ManageToolsTable from '../ManageTools/ManageToolsTable';
import ManageUserNewsTable from '../Pages/UserNews/ManageUserNewsTable';
import ManageUserToolsTable from '../UserTools/ManageUserToolsTable';
import './Dmain.css';

const DashboardMain = () => {
    const [users, setUsers] = useState(0);
    const [allTools, setAllTools] = useState([]);
    const [allNews, setAllNews] = useState([]);

    const [allInactiveTools, setAllInactiveTools] = useState([]);
    const [allInactiveNews, setAllInactiveNews] = useState([]);

    const [activeNews, setActiveNews] = useState([]);
    const [inactiveNews, setInactiveNews] = useState([]);
    const [activeTool, setActiveTool] = useState([]);
    const [inactiveTool, setInactiveTool] = useState([]);
    const [userNews, setUserNews] = useState([]); 
    const [userTool, setUserTool] = useState([]);


    const { admin, user } = useAuth()


    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/user/getByAllUsers`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res?.data)
                    setUsers(res?.data)
                } else {
                    console.log(res)
                }
            })

    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/tool/getActiveTool')
            .then(res => {
                if (res.status === 200) {
                    setAllTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/news/getActiveNews')
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss',res?.data)
                    setAllNews(res?.data?.news)
                } else {
                    console.log(res)
                }
            })
    }, [])



    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/tool/getallTools')
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss',res?.data)
                    setAllInactiveTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
    }, [])


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/news/getallNews')
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss',res?.data)
                    setAllInactiveNews(res?.data?.news)
                } else {
                    console.log(res)
                }
            })
    }, [])


// console.log('userNews', userNews)

    // users data 

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/news/getallNews/${user?.email}`)
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss', res?.data)
                    setUserNews(res?.data?.news)
                    setActiveNews(res?.data?.active)
                    setInactiveNews(res?.data?.inactive)
                } else {
                    console.log(res)
                }
            })
    }, [user])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/tool/getallTools/${user?.email}`)
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss',res?.data)
                    setUserTool(res?.data?.tools)
                    setActiveTool(res?.data?.active)
                    setInactiveTool(res?.data?.inactive)
                } else {
                    console.log(res)
                }
            })
    }, [user])




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
                        <Grid container spacing={2} className='mt-3'>
                            {
                                admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }} >
                                        <Link to='/dashboard/manage_users' className="dashboard-stat dp-grid dashboard_main_regd" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <Diversity3Icon className='fontSize-40' />
                                                </Box>
                                                <Link to="manage_users" className='dp-grid text-right' style={{ textDecoration: "none", color: "white" }}>
                                                    <span className="number counter">{users?.length}</span>
                                                    <span className="name">Total Users</span>
                                                </Link>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }

                            {
                                admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to='/dashboard/manage_tools' className="dashboard-stat dp-grid dashboard_main_subjects" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <AutoStoriesIcon className='fontSize-40' />
                                                </Box>
                                                <Link className='dp-grid text-right'>
                                                    <span className="number counter">{allTools?.length}</span>
                                                    <span className="name">All Tools</span>
                                                </Link>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }


                            {
                                !admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to='/dashboard/user/manage_tools' className="dashboard-stat dp-grid dashboard_main_subjects" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <AutoStoriesIcon className='fontSize-40' />
                                                </Box>
                                                <Link className='dp-grid text-right'>
                                                    <span className="number counter">{activeTool?.length}</span>
                                                    <span className="name">All Tools</span>
                                                </Link>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }

                            {
                                admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to="/dashboard/manage_news" className="dashboard-stat dp-grid dashboard_main_classes" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <HouseSidingIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right'>
                                                    <span className="number counter">{allNews?.length}</span>
                                                    <span className="name">All News</span>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }

                            {
                                !admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to="/dashboard/user/manage_news" className="dashboard-stat dp-grid dashboard_main_classes" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <HouseSidingIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right'>
                                                    <span className="number counter">{activeNews?.length}</span>
                                                    <span className="name">All News</span>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }

                            {
                                admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to="/dashboard/approve_tools" className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <FileCopyIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right'>
                                                    <span className="number counter">{allInactiveTools?.length}</span>
                                                    <span className="name">Inactive Tools</span>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }
                            {
                                !admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to="/dashboard/user/manage_tools" className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <FileCopyIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right'>
                                                    <span className="number counter">{inactiveTool?.length}</span>
                                                    <span className="name">Inactive Tools</span>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>

                                )
                            }

                            {
                                admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link to="/dashboard/approve_news" className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <FileCopyIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right'>
                                                    <span className="number counter">{allInactiveNews?.length}</span>
                                                    <span className="name">Inactive News</span>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }


                            {
                                !admin && (
                                    <Grid item xs={6} md={4} lg={3} sx={{ padding: 2 }}>
                                        <Link  to="/dashboard/user/manage_news" className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <FileCopyIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right'>
                                                    <span className="number counter">{inactiveNews?.length}</span>
                                                    <span className="name">Inactive News</span>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Grid>
                                )
                            }

                        </Grid>
                        {
                            admin &&(
                                <Grid>
                                <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                    <span className="textBeg revert text-left pb-3">Storage Tools: </span> 
                                            <ManageToolsTable slice={true}/> 
                                </Grid>
                                <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                    <span className="textBeg revert text-left pb-3 ">Storage News: </span> 
                                            <ManageNewsTable slice={true}/>  
                                </Grid>
                            </Grid>
                            )
                        }
                        <Grid>
                            <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                <span className="textBeg revert text-left pb-3">Your Tools: </span>

                                {
                                    userTool?.length && (
                                        <ManageUserToolsTable slice={true}/>
                                    )
                                }
                                {
                                    !userTool?.length  && (
                                        <Box className="d-flex notfoundBox w-100 mt-4">
                                    <WarningAmberIcon className='WarningAmberIcon' />    <Typography className='textDes text_center mt-1'>You No Tools Submit Yet !</Typography>
                                </Box>
                                    )
                                }
                                
                            </Grid>
                            <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                <span className="textBeg revert text-left pb-3 ">Your News: </span>
                                
                                {
                                    userNews?.length && (
                                        <ManageUserNewsTable slice={true}/>
                                    )
                                }
                                {
                                    !userNews?.length  && (
                                        <Box className="d-flex notfoundBox w-100 mt-4">
                                    <WarningAmberIcon className='WarningAmberIcon' />    <Typography className='textDes text_center mt-1'> You No News Submit Yet !</Typography>
                                </Box>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default DashboardMain;