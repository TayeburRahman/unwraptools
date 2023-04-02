import BiotechIcon from '@mui/icons-material/Biotech';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EastIcon from '@mui/icons-material/East';
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
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';
import BookmarkButtonNw from '../NewsBookmark/BookmarkButtonNw';


function LatestNews() {

    const [allNews, setAllNews] = useState([]);
    const [time, setSortTime] = useState(null);
    const [category, setSortCategory] = useState(null);
    const [sort, setSort] = useState(null);

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
        axios.get(`http://localhost:5000/api/v1/news/getActiveNews`)
            .then(res => {
                if (res.status === 200) {
                    setAllNews(res?.data?.news)
                } else {
                    console.log(res)
                }
            })
    }, [time, category, sort])

    console.log('allNews', allNews)
    return (
        <div className='background'>
            <NavBar />
            <Container>
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

                                    <MenuItem className='MenuItemButton text-left' value="today">
                                        <Button className='buttonText text-left'>Today</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="week">
                                        <Button className='buttonText'>   This Week </Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="month">
                                        <Button className='buttonText'>  This Month</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="month">
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

                                    <MenuItem className='MenuItemButton text-left' value="all">
                                        <Button className='buttonText text-left'><VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> All</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="update">
                                        <Button className='buttonText'> <StrollerIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Update</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="interesting">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Interesting</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="video">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Video</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="podcast">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Podcast</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="learn">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Learn</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="research">
                                        <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Research</Button>
                                    </MenuItem>
                                    <MenuItem className='MenuItemButton' value="opinion">
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
                <Grid container>
                    {
                        allNews.map((data, idx) => (
                            <Grid item lg={12} md={12} xs={12}>
                                <Box>
                                    <Typography>{data?.news_name}</Typography>
                                </Box>
                                <Grid container>
                                    <Grid item md={4} xs={12} lg={3} >
                                        <Typography>21 hours ago</Typography>
                                    </Grid>
                                    <Grid item md={4} xs={8} lg={3} className="d-flex"> 
                                        {
                                            data?.categories?.map((data, idx) => (
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
                                    <Grid item md={4} xs={4} lg={3}>
                                        <BookmarkButtonNw />
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default LatestNews
