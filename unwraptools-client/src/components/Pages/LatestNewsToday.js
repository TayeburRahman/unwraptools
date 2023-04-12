import BiotechIcon from '@mui/icons-material/Biotech';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EastIcon from '@mui/icons-material/East';
import LaunchIcon from '@mui/icons-material/Launch';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SchoolIcon from '@mui/icons-material/School';
import StrollerIcon from '@mui/icons-material/Stroller';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box, Button, Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import Footer from '../AppBar/Footer/Footer';
import BookmarkButtonNw from '../NewsBookmark/BookmarkButtonNw';
import CurrentTime from '../NewsCurrentTime/CurrentTime';


function LatestNewsToday() {
    const [isLoading, setLoading] = useState(true);
    const [allNews, setAllNews] = useState();
    const [status, setStatus] = useState();
    const [time, setSortTime] = useState("Today");
    const [category, setSortCategory] = useState(null);
    const [sort, setSort] = useState(null);
    const { pathname } = useLocation();



    const { user } = useAuth()
    const email = user?.email

    const handleChangeTime = (event) => {
        setSortTime(event.target.value);
    };

    const handleChangeCategory = (event) => {
        setSortCategory(event.target.value);
    };

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

 

    useEffect(() => {
        if(pathname === 'news-today'){
            setSortTime('Today')
        } 
    })

    useEffect(() => {

        if (category) {
            axios.get(`https://server.unwraptools.io/api/v1/news/getActiveNews?category=${category}&sort=${sort}&range=${time}`)
                .then(res => {

                    setAllNews(res?.data?.news)
                    setLoading(false)

                })
        } else {
            axios.get(`https://server.unwraptools.io/api/v1/news/getActiveNews?category=&sort=${sort}&range=${time}`)
                .then(res => {

                    setAllNews(res?.data?.news)
                    setLoading(false)

                })
        }

    }, [time, category, sort, status])


    return (
        <div className='background'>
            <Container className="w100vh">
                <Box className='textTagNav p-1' mt="40px" >
                    <Link to="/" className='routeLink'>Home</Link>
                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                    <text className='textDeg'>News</text>
                </Box>
                <Box>
                    <Typography className='revert text-left mt-4' gutterBottom variant="h3" component="div">
                        Latest All News
                    </Typography>
                    {/* <p className='text-left DesPText'>
                        These are the tools and posts you have unwraptools. You can remove them from your favourites by clicking the bookmark icon.
                    </p> */}
                </Box>
                <Grid container className='d-flex mt-5' sx={{ justifyContent: "space-between" }}>
                    <Grid item className='custom-flexAndGrid'>
                        <Box className=''>
                            <FormControl sx={{ m: 1, mr: 0, minWidth: 120 }}>
                                <Select
                                    value={time}
                                    onChange={handleChangeTime}
                                    displayEmpty
                                    className="selectGrid"
                                >
                                    {
                                        time === null && (
                                            <MenuItem className='MenuItemButton' value="null">
                                                <Button className='buttonText'>Filter By Time</Button>
                                            </MenuItem>
                                        )
                                    }

                                    <MenuItem className='MenuItemButton text-left' value="Today">
                                        <Button className='buttonText text-left'>Today</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="This Week">
                                        <Button className='buttonText'>   This Week </Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="This Month">
                                        <Button className='buttonText'>  This Month</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="All Time">
                                        <Button className='buttonText'>  All Time</Button>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl sx={{ m: 1, mr: 0, minWidth: 120 }}>
                                <Select
                                    value={category}
                                    onChange={handleChangeCategory}
                                    displayEmpty
                                    className="selectGrid"
                                >
                                    {
                                        category === null && (
                                            <MenuItem className='MenuItemButton' value="null">
                                                <Button className='buttonText'>Filter by Category</Button>
                                            </MenuItem>
                                        )
                                    }

                                    <MenuItem className='MenuItemButton text-left' value="">
                                        <Button className='buttonText text-left'><VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> All</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Updates">
                                        <Button className='buttonText'> <StrollerIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Update</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Interesting">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Interesting</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Video">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Video</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Podcast">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Podcast</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Learn">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Learn</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Research">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Research</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="Opinion">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Opinion</Button>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                    </Grid>
                    <Grid item>
                        <FormControl sx={{ m: 1, mr: 0, minWidth: 120 }}>
                            <Select
                                value={sort}
                                onChange={handleChangeSort}
                                displayEmpty
                                className="selectGrid"
                            >
                                {
                                    sort === null && (
                                        <MenuItem className='MenuItemButton' value="null">
                                            <Button className='buttonText'>Sort by</Button>
                                        </MenuItem>
                                    )
                                }

                                <MenuItem className='MenuItemButton text-left' value="featured">
                                    <Button className='buttonText text-left'><VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Featured</Button>
                                </MenuItem>
                                <MenuItem className='MenuItemButton' value="new">
                                    <Button className='buttonText'> <StrollerIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> New</Button>
                                </MenuItem>
                                <MenuItem className='MenuItemButton' value="popular">
                                    <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Popular</Button>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {
                    !isLoading ? (
                        <Box>
                            {
                                allNews?.length ? (
                                    <Grid container className='mt-4'>
                                        {
                                            allNews?.map((data, idx) => (
                                                <Grid className='p-3 mb-2' item lg={12} md={12} xs={12} sx={{ border: "1px solid var(--border_color)", borderRadius: "5px" }}>
                                                    <Box className='text-left'>
                                                        <a href={data?.contentLink} target="_blank" className='text-left linkTextNews'>{data?.news_name} <span className='spanLinkNews'>{data?.contentLink.slice(0, 20)} <LaunchIcon sx={{ fontSize: "14px" }} /></span></a>
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
                                    <Box className='didnotfind'><Typography className='textDesLarger' >Search did not find news !
                                    </Typography></Box>
                                )
                            }
                        </Box>

                    ) : (
                        <Box className='mt-3'>
                            <Box className='p-3 mt-1' sx={{ border: "1px solid var(--border_color)", borderRadius: "5px" }}>
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                            </Box>
                            <Box className='p-3 mt-1' sx={{ border: "1px solid var(--border_color)", borderRadius: "5px" }}>
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                            </Box>
                            <Box className='p-3 mt-1' sx={{ border: "1px solid var(--border_color)", borderRadius: "5px" }}>
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                            </Box>
                            <Box className='p-3 mt-1' sx={{ border: "1px solid var(--border_color)", borderRadius: "5px" }}>
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                            </Box>
                            <Box className='p-3 mt-1' sx={{ border: "1px solid var(--border_color)", borderRadius: "5px" }}>
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                                <Skeleton sx={{ maxWidth: "100%" }} height={40} />
                            </Box>

                        </Box> 
                    )
                }

            </Container>

            <Footer />
        </div>
    )
}

export default LatestNewsToday
