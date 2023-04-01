import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import EastIcon from '@mui/icons-material/East';
import StrollerIcon from '@mui/icons-material/Stroller';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Button, Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../AppBar/Footer/Footer';
import NavBar from '../AppBar/NavBar';


function LatestNews() {


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
            </Container>
            <Footer />
        </div>
    )
}

export default LatestNews
