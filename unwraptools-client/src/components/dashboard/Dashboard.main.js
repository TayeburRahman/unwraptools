import BatchPredictionIcon from '@mui/icons-material/AutoStories';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InfoIcon from '@mui/icons-material/FileCopy';
import ArticleIcon from '@mui/icons-material/HouseSiding';
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
    const [userTool, setUserTools] = useState([]); 


    const { admin, user } = useAuth() 


    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/user/getByAllUsers`)
            .then(res => { 
                setUsers(res?.data) 
            })

    }, [])

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/tool/getActiveTool`)
            .then(res => { 
                setAllTools(res?.data?.tools) 
            })
    }, [])

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/news/getActiveNews`)
            .then(res => { 
                setAllNews(res?.data?.news) 
            })
    }, [])



    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/tool/getallTools`)
            .then(res => { 
                setAllInactiveTools(res?.data?.tools) 
            })
    }, [])


    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/news/getallNews`)
            .then(res => { 
                setAllInactiveNews(res?.data?.news) 
            })
    }, [])

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/news/user/active/${user?.email}`)
        .then(res => {
            setActiveNews(res?.data?.active) 
            console.log('res?.data?.active', res?.data?.active)
        })

        axios.get(`https://server.unwraptools.io/api/v1/news/user/inactive/${user?.email}`)
        .then(res => { 
            setInactiveNews(res?.data?.inactive)
            console.log('res?.data?.inactive', res?.data?.inactive)
        })

        axios.get(`https://server.unwraptools.io/api/v1/news/user/news/${user?.email}`)
        .then(res => {  
            setUserNews(res?.data?.news) 
        })

    }, [])

    useEffect(() => { 
            axios.get(`https://server.unwraptools.io/api/v1/tool/user/active/${user?.email}`)
            .then(res => { 
                setActiveTool(res?.data?.active)  
            }) 

            axios.get(`https://server.unwraptools.io/api/v1/tool/user/inactive/${user?.email}`)
            .then(res => { 
                setInactiveTool(res?.data?.inactive)  
            }) 

            axios.get(`https://server.unwraptools.io/api/v1/tool/user/tool/${user?.email}`)
            .then(res => {  
                  setUserTools(res?.data?.tools) 
            })
    }, [])




    return (
        <Fragment>
            <div className="main-page">
                <div className="container-fluid">
                    <div className=" ">
                        <h2 className=" text-left" style={{color:"#363636"}}>Dashboard</h2>
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
                                                    <BatchPredictionIcon className='fontSize-40' />
                                                </Box>
                                                <Link className='dp-grid text-right cw'>
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
                                                    <BatchPredictionIcon className='fontSize-40' style={{ color: "white" }} />
                                                </Box>
                                                <Link className='dp-grid text-right cw'>
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
                                                    <ArticleIcon className='fontSize-40' />
                                                </Box>
                                                <Box className='dp-grid text-right cw'>
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
                                                    <ArticleIcon className='fontSize-40' />
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
                                                    <InfoIcon className='fontSize-40' />
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
                                        <Link to="/dashboard/user/manage_tools" className="dashboard-stat dp-grid dashboard_main_inactive" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <InfoIcon className='fontSize-40' />
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
                                        <Link to="/dashboard/approve_news" className="dashboard-stat dp-grid dashboard_main_inactive" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <InfoIcon className='fontSize-40' />
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
                                        <Link to="/dashboard/user/manage_news" className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                            <Box className='dp-flex justifyContent'>
                                                <Box>
                                                    <InfoIcon className='fontSize-40' />
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
                            admin && (
                                <Grid>
                                    <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                        <span className="textBeg revert text-left pb-3">Storage Tools: </span>
                                        <ManageToolsTable slice={true} />
                                    </Grid>
                                    <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                        <span className="textBeg revert text-left pb-3 ">Storage News: </span>
                                        <ManageNewsTable slice={true} />
                                    </Grid>
                                </Grid>
                            )
                        }
                        <Grid>
                            <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                <span className="textBeg revert text-left pb-3">Your Tools: </span>

                                {
                                    userTool?.length && (
                                        <ManageUserToolsTable slice={true} />
                                    )
                                }
                                {
                                    !userTool?.length && (
                                        <Box className="d-flex notfoundBox w-100 mt-4">
                                            <WarningAmberIcon className='WarningAmberIcon' />    <Typography className='text_center mt-1' style={{color:"#363636", fontWeight:"500"}}>You No Tools Submit Yet !</Typography>
                                        </Box>
                                    )
                                }

                            </Grid>
                            <Grid spacing={2} alignItems="center" className='text-left mt-5'>
                                <span className="textBeg revert text-left pb-3 ">Your News: </span>

                                {
                                    userNews?.length && (
                                        <ManageUserNewsTable slice={true} />
                                    )
                                }
                                {
                                    !userNews?.length && (
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