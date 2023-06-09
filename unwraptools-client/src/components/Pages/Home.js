import AddIcon from '@mui/icons-material/Add';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Grid, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../AppBar/Footer/Footer';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import SearchSystem from '../Home/SearchSystem';
import TagHome from '../Home/TagHome';
import BookmarkButton from './BookmarkButton';
import './Home.css';

const top100Films = [
    { title: 'Copywriting' },
    { title: 'General Writing' },
    { title: 'Email Assistant' },
    { title: 'Paraphraser' },
    { title: 'Story Teller' },
    { title: "Summarizer" },
    { title: 'Art' },
    { title: 'Design Assistant', },
    { title: 'Image Generator' },
    { title: 'Design' },
    { title: 'Avatars', },
    { title: 'Image Editing' },
    { title: 'Logo Generator' },
    { title: 'Audio Editing' },
    { title: 'Text To Speech', },
    { title: "Music" },
    { title: 'Transcriber' },
    { title: 'Personalized Videos' },
    { title: 'Video Editing' },
    { title: '3D' },
    { title: 'SEO' },
    { title: 'E-commerce' },
    { title: 'Social Media Assistant' },
    { title: "Sales" },
    { title: 'Email Marketing' },
    { title: 'Fashion' },
    { title: 'Fun Tools' },
    { title: 'Gift Ideas' },
    { title: 'Life Assistant' },
    { title: 'Fitness' },
    { title: 'Real Estate' },
    { title: 'Gaming' },
    { title: 'Healthcare' },
    { title: 'Memory' },

    { title: 'Prompts' },
    { title: 'Developer' },
    { title: 'Spreadsheets' },
    { title: 'Testing & QA' },
    { title: 'Code Assistant' },
    { title: 'Low-Code/No-Code' },
    { title: 'SQL' },
    { title: 'Customer Support' },
    { title: 'Human Resources' },
    { title: 'Presentations' },
    { title: 'Startup' },
    { title: 'Finance' },
    { title: 'Legal Assistant' },
    { title: 'Education Assistant' },
    { title: 'Productivity' },
    { title: 'Research' },
    { title: 'AI Search Engines", "Experiments' },
    { title: 'Resources' }
];

// const CategoriesSec = [
//     'Copywriting', 'General Writing', 'Email Assistant', 'Paraphraser', 'Story Teller', "Summarizer", 'Art', 'Design Assistant', 'Image Generator', 'Design', "Avatars", 'Image Editing', 'Logo Generator', 'Audio Editing', "Text To Speech", "Music", 'Transcriber', 'Personalized Videos', 'Video Editing', "Video Editing", "3D", 'SEO', 'E-commerce', 'Social Media Assistant', "Sales", 'Email Marketing', "Fashion", "Fun Tools", 'Gift Ideas', 'Life Assistant', 'Fitness', "Real Estate", "Gaming", "Healthcare", "Memory", "Prompts", "Developer", "Spreadsheets", "Testing & QA",
//     'Code Assistant', 'Low-Code/No-Code', 'SQL', "Customer Support", "Human Resources", "Presentations", "Startup", "Finance", "Legal Assistant", "Startup", 'Productivity', 'Education Assistant', "Research", "AI Search Engines", "Experiments", "Resources"

// ];






function Homes() {

    const [tools, setTools] = useState([])
    const [status, setStatus] = useState(0)

    const [sort, setSortBy] = useState(null);
    const [pricing, setPricing] = useState([]);
    const [features, setFeatures] = useState([]);
    const [search, setSearch] = useState("");
    const [response, setResponse] = useState(true);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const { user } = useAuth()
    const email = user?.email

    // filter items 
    let url = `https://server.unwraptools.io/api/v1/tool/get/filter`;

    useEffect(() => {
        url = `${url}${pricing
            .map(
                (f, index) =>
                    `${index > 0 ? "&" : "?"}${f.toLowerCase()}=true`
            )
            .join("")}${features
                .map(
                    (f, index) =>
                        `${pricing.length > 0 || index > 0 ? "&" : "?"
                        }${f.toLowerCase()}=true`
                )
                .join("")}${`${pricing.length > 0 || features.length > 0
                    ? "&"
                    : "?"
                }sort=${sort}`}`;


        axios.get(url).then((res) => {
            setResponse()
            setTools(res?.data?.tools);
        });


    }, [status, features, pricing, sort, pathname]);


    // search system 
    const [option2, setOption] = useState()

    const HandelOnChangeSearch = (search) => {
        setSearch(search);
        axios.put(`https://server.unwraptools.io/api/v1/tool/get/search`, { search })
            .then(res => {
                setResponse(response === true && false)
                setTools(res?.data?.tools)
            })
    };

    return (
        <Box className='theme' >
            <Box>
                <Container sx={{ marginTop: "50px" }}>
                    <Grid container >
                        <Grid item xs={12} md={8} lg={8}>
                            <Grid container spacing={2} className="icon_box_left">
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"><GroupIcon className='icon-co custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />100,000+</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"> <BeenhereIcon className='custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />210,000+</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"><LocalOfferIcon className='custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} />Exclusive Deals</Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box className="box-mobile"><SupportAgentIcon className='custom-icon-size' sx={{ marginRight: "10px", fontSize: "20px" }} /><Link to='/sponsor' className='sponsor_link'>Sponsor Us</Link></Box>
                                </Box>
                                <Box sx={{ marginRight: "15px" }} >
                                    <Box> </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Grid container spacing={2} className="icon_box_home">
                                <a href="https://www.linkedin.com/company/unwraptools/" target="_blank" className="d-flex icon-box">
                                    <LinkedInIcon className='linkedIn icon-site' sx={{ color: "rgb(0, 119, 181)" }} />
                                </a>
                                <a href="https://twitter.com/UnwrapTools/" target="_blank" className="d-flex icon-box">
                                    <TwitterIcon className='Twitter icon-site' sx={{ color: "rgb(0, 119, 181)" }} />
                                </a>
                                <a href="https://www.youtube.com/@UnwrapTools/" target="_blank"  className="d-flex icon-box">
                                    <YouTubeIcon className='YouTub icon-site' sx={{ color: "rgb(255, 0, 0)" }} />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container sx={{ marginTop: "60px" }}>
                    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                        <Grid item className='mt-rev' sx={6}>
                            <Link to="/tool-today" className='textDecoration'><button className="button-6_1custom" ><AddIcon />Tools Added Today</button></Link>
                        </Grid>
                        <Grid item className='mt-rev' sx={6}>
                            <Link to="/news-today" className='textDecoration'> <button className="button-6"  ><PostAddIcon /> News Added Today</button></Link>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography className='fontSize-35_mt_10 revert ' variant="button" display="block" sx={{ fontSize: "50px", letterSpacing: "5px", marginBottom: '-15px' }}>
                            <span className='textBeg'>unwraptools</span>
                        </Typography>
                        <Typography className='fontSize-14_mt_10' variant="button" display="block" sx={{ fontSize: "1.25rem" }}>
                        DISCOVER THE LARGEST COLLECTION OF AI TOOLS
                        </Typography>
                    </Grid>
                    <Grid>
                        <TagHome />
                        <Typography className='textDes2 text-left mb-1 mt-2'  >RESULTS FOUND:  <span className='resultFountSpan'>{tools?.length}</span></Typography>
                        <Grid container>
                            <Grid item xs={3} md={1} lg={1}>
                                <Box className='searchBarIcon'>
                                    <SearchIcon />
                                </Box>
                            </Grid>
                            <Grid item xs={9} md={11} lg={11}>
                                <Stack spacing={2} sx={{ width: "100%" }} className="SearchBar">
                                    <Autocomplete
                                        sx={{ borderRadius: "0px" }}
                                        freeSolo
                                        id="free-solo-2-demo"
                                        className='optionbar'
                                        disableClearable
                                        options={search.length == 1 ? tools?.map((option) => option.tool_name) : top100Films?.map((option) => option.title)}
                                        renderInput={(params) => (
                                            <TextField
                                                className='SearchBar'
                                                placeholder="Search for AI Tools and Categories"
                                                {...params}
                                                onSelect={e => (HandelOnChangeSearch(e.target.value))}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                        <SearchSystem pricing={pricing} setPricing={setPricing} features={features} setFeatures={setFeatures} setSortBy={setSortBy} sort={sort} />
                    </Grid>

                    {
                        response ? (
                            <Grid container mt={5}>
                                <Grid item xs={12} md={6} lg={4} className='mt-1'>
                                    <Box sx={{ display: "grid", justifyItems: 'center', width: "100%" }}>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5, display: "grid", justifyItems: 'center', width: "100%" }} >
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4} className='mt-1'>
                                    <Box sx={{ display: "grid", justifyItems: 'center', width: "100%" }}>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5, display: "grid", justifyItems: 'center', width: "100%" }} >
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4} className='mt-1'>
                                    <Box sx={{ display: "grid", justifyItems: 'center', width: "100%" }}>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5, display: "grid", justifyItems: 'center', width: "100%" }} >
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} className='mt-4'>
                                    <Box sx={{ display: "grid", justifyItems: 'center', width: "100%" }}>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5, display: "grid", justifyItems: 'center', width: "100%" }} >
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} className='mt-4'>
                                    <Box sx={{ display: "grid", justifyItems: 'center', width: "100%" }}>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5, display: "grid", justifyItems: 'center', width: "100%" }} >
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} className='mt-4'>
                                    <Box sx={{ display: "grid", justifyItems: 'center', width: "100%" }}>
                                        <Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
                                        <Box sx={{ pt: 0.5, display: "grid", justifyItems: 'center', width: "100%" }} >
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                            <Skeleton sx={{ maxWidth: "345px" }} height={50} />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        ) : (
                            <Box>
                                {
                                    tools.length ? (
                                        <Grid container mt={5}>
                                            {
                                                tools?.map((tool, idx) => (
                                                    <Grid item xs={12} md={6} lg={4} className='mt-4 '>
                                                        <Card className='card mb-3 w-100' sx={{ maxWidth: 345 }}>
                                                            {/* <Box className=' positionab' > */}
                                                            <Link to={`/tool/${tool?._id}`} className='CardLink' target='_blank'>
                                                                <CardMedia
                                                                    className='positionab'
                                                                    sx={{ height: 140 }}
                                                                    image={tool?.imageURL}
                                                                    title="green iguana"
                                                                />
                                                                </Link>
                                                                <Box className='positionrs'>
                                                                    <Typography className='price'>$ {tool?.startingPrice}/mo</Typography>
                                                                </Box>
                                                                {/* </Box> */}
                                                                <CardContent sx={{ paddingBottom: '0' }}>

                                                                    <Box className="d-flex" sx={{ justifyContent: "space-between" }}>
                                                                        <Box className="d-flex">
                                                                        <Link to={`/tool/${tool?._id}`} className='CardLink' target='_blank'>
                                                                            <Typography className='revert' gutterBottom variant="h5" component="div">
                                                                                {tool?.tool_name}
                                                                            </Typography>
                                                                            </Link>
                                                                            {
                                                                                tool?.favourite?.length > 10 && (
                                                                                    <VerifiedIcon className='icon-co buttonIcon mb-1 ms-2' sx={{ marginRight: "10px", fontSize: "20px" }} />

                                                                                )
                                                                            }
                                                                        </Box>
                                                                        <Box>
                                                                            <TurnedInNotIcon />
                                                                            {tool?.favourite?.length}
                                                                        </Box>
                                                                    </Box>
                                                                    <Link to={`/tool/${tool?._id}`} className='CardLink' target='_blank'>
                                                                    <Typography className='text-left' variant="body2"  >
                                                                        {tool?.short_description?.slice(0, 100)}.
                                                                    </Typography>
                                                                    </Link>
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

                                                                </CardContent> 

                                                            <CardActions sx={{ justifyContent: "space-between" }}>
                                                            <a href={tool?.websiteURL} target='_blank'size="small" className='OpenInNewIcon' ><OpenInNewIcon /></a>
                                                                <BookmarkButton setStatus={setStatus} status={status} tool={tool} email={email} />
                                                            </CardActions>
                                                        </Card>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>

                                    ) : (
                                        <Box className='didnotfind'><Typography className='textDesLarger' >Search did not find tools !
                                        </Typography></Box>
                                    )
                                }
                            </Box>
                        )
                    } 
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default Homes




{/* <Grid container>
    <Grid item xs={12} md={6} lg={4} className='mt-4'>
    <Box>
<Skeleton variant="rectangular" sx={{ maxWidth: "345px" }} height={150} />
<Box sx={{ pt: 0.5 }}>
    <Skeleton sx={{ maxWidth: "345px" }} height={50} />
    <Skeleton sx={{ maxWidth: "345px" }} height={50} />
</Box>
</Box>
    </Grid>
</Grid> */}