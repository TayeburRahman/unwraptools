

import LockOpenIcon from '@mui/icons-material/LockOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import notFound from '../../image/notabailable.png';
import BookmarkButton from '../Pages/BookmarkButton';
import './favourites.css';


import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function FavoritesTabs() {
    const [value, setValue] = useState(0);
    const [tools, setTools] = useState([])
    const [status, setStatus] = useState(0)
    const [loader, setLoader] = useState()
     

    const { user } = useAuth()
    const email = user?.email

    useEffect(() => {
        setLoader(true)
        axios.get(`http://localhost:5000/api/v1/tool/bookmark/user/${email}`)
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss',res?.data)
                    setTools(res?.data?.tools)
                    setLoader(false)
                } else {
                    console.log(res)
                }
            })
    }, [status])



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    console.log('tools', tools)

    return (
        <Box>
           { loader?
           (
             <Box className='d-flex' sx={{justifyContent:"center", paddingBottom:"100px", paddingTop:"50px"}}>
                <Rings
  height="80"
  width="80"
  color="#57aee1"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
             </Box>
           ):
           (
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className='tabs' label="TOOLS" {...a11yProps(0)} />
                    <Tab className='tabs' label="NEWS" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    tools.length ? (
                        <Grid container>
                            {
                                tools?.map((tool, idx) => (
                                    <Grid item xs={12} md={6} lg={4}>
                                        <Card className='card mb-3' sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={tool?.imageURL}
                                                title="green iguana"
                                            />
                                            <CardContent sx={{ paddingBottom: '0' }}>
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
                                                                tool?.price?.map((data, idx) => (
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
                                                <BookmarkButton setStatus={setStatus} status={status} tool={tool} email={email} />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    ) : (
                        <Box>
                            <Typography className='textDesLarger' >  No News Favourited Yet</Typography>
                            <img src={notFound} />
                        </Box>
                    )
                }
            </TabPanel>
            <TabPanel value={value} index={1}>

                <Grid container>
                    <Grid item xs={12} md={6} lg={4}>
                    </Grid>
                </Grid>

                <Box>
                    <Typography className='textDesLarger' >  No News Favourited Yet</Typography>
                    <img src={notFound} />
                </Box>
            </TabPanel>

        </Box>
           )
           }
        </Box>
         
    );
}
