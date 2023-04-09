import BiotechIcon from '@mui/icons-material/Biotech';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LaunchIcon from '@mui/icons-material/Launch';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SchoolIcon from '@mui/icons-material/School';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import notFound from '../../image/notabailable.png';
import BookmarkButton from '../Pages/BookmarkButton';
import './favourites.css';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkButtonNw from '../NewsBookmark/BookmarkButtonNw';
import CurrentTime from '../NewsCurrentTime/CurrentTime';


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
    const [news, setNews] = useState([])
    const [status, setStatus] = useState(0)
    const [loader, setLoader] = useState(true)
    const [notfoundTool, setNotFoundTool] = useState(false)
    const [notfoundNews, setNotFoundNews] = useState(false)


    const { user } = useAuth()
    const email = user?.email

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/tool/bookmark/user/${email}`)
            .then(res => {
                if (res.status === 200) {
                    // console.log('sssss',res?.data)
                    setTools(res?.data?.tools)
                    setLoader(false)
                    if (!res?.data?.tools?.length) {
                        setNotFoundTool(true)
                    }
                } else {
                    console.log(res)
                }
            })
    }, [status])


    useEffect(() => {
        setLoader(true)
        axios.get(`https://server.unwraptools.io/api/v1/news/bookmark/user/${email}`)
            .then(res => {
                if (res.status === 200) {
                    console.log('sssss', res?.data)
                    setNews(res?.data?.news)
                    setLoader(false)

                    if (!res?.data?.news?.length) {
                        setNotFoundNews(true)
                    }
                } else {
                    console.log(res)
                }
            })
    }, [status])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className='tabs' label="TOOLS" {...a11yProps(0)} />
                        <Tab className='tabs' label="NEWS" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box>
                        {
                            loader ?
                                (
                                    <Box>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5 }}>
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box>
                                        {
                                            !notfoundTool ? (
                                                <Grid container>
                                                    {
                                                        tools?.map((tool, idx) => (
                                                            <Grid item xs={12} md={6} lg={4}>
                                                                <Card className='card mb-3' sx={{ maxWidth: 345 }}>
                                                                    <CardMedia
                                                                        className=' positionab'
                                                                        sx={{ height: 140 }}
                                                                        image={tool?.imageURL}
                                                                        title="green iguana"
                                                                    />
                                                                    <Box className='positionrs'>
                                                                        <Typography className='price'>$ {tool?.startingPrice}/mo</Typography>
                                                                    </Box>
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
                                    </Box>

                                )
                        }
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>

                    {
                        !notfoundNews ? (
                            <Grid container className='mt-4'>
                                {
                                    news?.map((data, idx) => (
                                        <Grid className='p-3 mb-2' item lg={12} md={12} xs={12} sx={{ border: "1px solid #969696", borderRadius: "5px" }}>
                                             <Box className='text-left'>
                                            <a href={data?.contentLink} target="_blank" className='text-left linkTextNews'>{data?.news_name} <span className='spanLinkNews'>{data?.contentLink.slice(0, 20)} <LaunchIcon sx={{fontSize:"14px"}}/></span></a>
                                        </Box>
                                            <Grid container className='mt-3'>
                                                <Grid item md={4} xs={12} lg={3} className="text-left" >
                                                <CurrentTime news={data} />
                                                </Grid>
                                                <Grid item md={4} xs={8} lg={3} className="d-flex text-left">
                                                    {
                                                        data?.categories?.map((data, idx) => (
                                                            <Grid item className='m-2 text-left'>
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
                                                <Grid item md={4} xs={4} lg={6} className="d-flex" sx={{ justifyContent: "flex-end" }}>
                                                    <BookmarkButtonNw email={email} news={data} setStatus={setStatus} status={status} />
                                                </Grid>
                                            </Grid>
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

            </Box>

        </Box>

    );
}
