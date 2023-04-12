import EastIcon from '@mui/icons-material/East';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


import { Link, useParams } from 'react-router-dom';


import BorderColorIcon from '@mui/icons-material/BorderColor';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import useAuth from '../../Firebase/Hooks/useAuth';
import Footer from '../AppBar/Footer/Footer';
import BookmarkButton from '../ProductInformation/BookmarkButtonPD';
import SuggestEditModal from '../ProductInformation/SuggestEditModal';



function ProductInformation() {

    const [tools, setTools] = useState([]);
    const [status, setStatus] = useState(0)
    const [categoryTools, setCategoryTools] = useState([]);
    const [category, setCategory] = useState();
    const { user } = useAuth()
    const { Id } = useParams();
    const [open, setOpen] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const email = user?.email

    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/tool/randomTool`)
            .then(res => { 
                    setTools(res?.data?.tool)
                    setCategory(res?.data?.tool[0]?.categories) 
            })
    }, [status])

    useEffect(() => { 
        if(category){
            axios.put(`https://server.unwraptools.io/api/v1/tool/get/categorys`, {
                category
            })
                .then(res => { 
                        setCategoryTools(res?.data?.tools) 
                })
        }
        
    }, [Id, status, tools])


    const handleOpen = () => setOpen(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false)
        setMessage('')
        setResponseMessage('')
    };

    return (
        <div className='background'>
            <div>
                <Container className='minH500'>
                    {
                        tools?.map((data, idx) => (
                            <Box className='' key={idx}>
                                <Box className='textTagNav padding5' mt="40px" >
                                    <Link className='routeLink' to="/">Home</Link>
                                    <span>  <EastIcon className='RouteLinkIcon' /> </span>
                                    <Link className='routeLink' to="/categories"> Category</Link>
                                    <span> <EastIcon className='RouteLinkIcon' /> </span>
                                    <text className='textDeg'> {data?.tool_name}</text>
                                </Box>
                                <Grid container>
                                    <Grid item xs={7} lg={6} md={6} className="padding5" >
                                        <Box className='d-flex' sx={{ justifyContent: "space-between" }}>
                                            <Typography id="text-20" className='revert' gutterBottom variant="h3" component="div">
                                                {data?.tool_name}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} xs={5} className="d-flex padding5" sx={{ justifyContent: "flex-end" }}>
                                        <Box className='d-flex'>
                                            <BookmarkButton tools={data} setStatus={setStatus} status={status} email={email} />
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Box>
                                    <Grid container mt="20px">
                                        <Grid item sx={12} md={12} lg={6} className='padding5' >
                                            <img
                                                className='w-100'
                                                src={data?.imageURL}
                                            />
                                        </Grid>
                                        <Grid item sx={12} md={12} lg={6} className='padding5'>
                                            <Box className='text-left'>
                                                <Typography className='textDes'>DESCRIPTION:</Typography>
                                                <p className='text-left DesPText'    >
                                                    {data?.short_description}
                                                </p>

                                                {/* <div
                                            className='text-left mt-3'
                                            dangerouslySetInnerHTML={{
                                                __html: data?.description
                                            }}>
                                        </div>  */}
                                            </Box>
                                            {
                                        data?.favourite?.length > 10 && (
                                            <Box className='added_text d-flex text-12-sm'>

                                                <VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} />
                                                Unwraptools endorses this tool based on our testing results.
                                            </Box>

                                        )
                                    }
                                            

                                            <Grid container>
                                                {
                                                    data?.price?.map((data, idx) => (
                                                        <Grid item className='m-2' key={idx}>
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

                                            <Box className="text-left" mt="15px">
                                                <a href={data?.websiteURL} target="_blank" size="small" className='OpenInNewIcon' id="OpenInNewIcon_Custom">VISIT <OpenInNewIcon /></a>
                                            </Box>

                                            <Box className='mt-4 text-left'>
                                                <button className='button_suggest' onClick={handleOpen} variant="text"> <BorderColorIcon className='icon_suggest' />Propose Modifications</button>
                                                <SuggestEditModal setMessage={setMessage} setOpenSuccess={setOpenSuccess} tools={data} open={open} setOpen={setOpen} />
                                            </Box>

                                        </Grid>

                                    </Grid>
                                </Box>
                                {
                                    data?.description && (
                                        <Box className="pt-4">
                                            <Typography className='textDes text-left'>{data?.tool_name} Feature</Typography>
                                            <div
                                                className='text-left mt-2'
                                                dangerouslySetInnerHTML={{
                                                    __html: data?.description
                                                }}>
                                            </div>
                                        </Box>

                                    )
                                }
                            </Box>


                        ))
                    }

                    <Box mb="30px" mt="20px">
                        <Box className='text-left' mt="50px">
                            {
                                tools.map((data, idx) => (
                              <Typography key={idx} className='BrowseAITools' mb="25px">Alternative AI Tools for {data?.tool_name} </Typography>
                                ))
                            }
                            
                            

                            <Grid container>
                                {
                                    categoryTools?.slice(0, 5)?.map((tool, idx) => (
                                        <Grid item xs={12} md={6} lg={4} key={idx}>
                                            <Card className='card mb-3' sx={{ maxWidth: 345 }}>
                                            <Link to={`/tool/${tool?._id}`} className='CardLink' target='_blank'>
                                                <CardMedia
                                                    className=' positionab'
                                                    sx={{ height: 140 }}
                                                    image={tool?.imageURL}
                                                    title="green iguana"
                                                />
                                                </Link>
                                                <Box className='positionrs'>
                                                    <Typography className='price'>$ {tool?.startingPrice}/mo</Typography>
                                                </Box>
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
                                                        <Typography className='text-left' variant="body2"  >
                                                            {tool?.short_description?.slice(0, 100)}.
                                                        </Typography>
                                                        <Box>
                                                            <Grid container className='mt-2'>
                                                                {
                                                                    tool?.price?.map((data, idx) => (
                                                                        <Grid item className='m-2' key={idx}>
                                                                             <Link to={`/tool/${tool?._id}`} className='CardLink' target='_blank'> 
                                                                            <Typography className="tagCard1">
                                                                                {data === "Free Trial" && <LockOpenIcon className='cardTagIcon' />}
                                                                                {data === "Freemium" && <LockOpenIcon className='cardTagIcon' />}
                                                                                {data === "Free" && <TaskAltIcon className='cardTagIcon' />}
                                                                                {data === "Paid" && <MonetizationOnIcon className='cardTagIcon' />}
                                                                                {data === "Contact for Pricing" && <MonetizationOnIcon className='cardTagIcon' />}
                                                                                {data === "Deals" && <SellIcon className='cardTagIcon' />}
                                                                                {data}
                                                                            </Typography>
                                                                            </Link>
                                                                        </Grid>
                                                                    ))
                                                                }
                                                            </Grid>
                                                        </Box>
                                                   
                                                </CardContent> 

                                                <CardActions sx={{ justifyContent: "space-between" }}>
                                                <a href={tool?.websiteURL} target='_blank' size="small" className='OpenInNewIcon'><OpenInNewIcon /></a>
                                                    <BookmarkButton setStatus={setStatus} status={status} tools={tool} email={email} />
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Container>
                    {/* <Box className='text-left mt-5'>
                            <Typography className='BrowseAITools' mb="15px">Browse AI Tools Similar to Looka</Typography>
                            <Box className='d-flex '>
                                <Link className='link_similar_tools'> Browse 7 AI logo generator tools.</Link>
                                <Link  className='link_similar_tools'> Browse 53 AI design assistant tools.</Link>
                            </Box>
                        </Box>  */}
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default ProductInformation


{/* <Grid container>
                        <Grid item sx={12} md={12} lg={6}>
                            <img src='/' />
                        </Grid>
                        <Grid item sx={12} md={12} lg={6}>

                        </Grid>

                    </Grid> */}
