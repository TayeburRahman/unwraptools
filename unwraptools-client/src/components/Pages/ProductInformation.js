import BorderColorIcon from '@mui/icons-material/BorderColor';
import EastIcon from '@mui/icons-material/East';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SellIcon from '@mui/icons-material/Sell';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


import { Link, useParams } from 'react-router-dom';
import NavBar from '../AppBar/NavBar';


import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MuiAlert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import useAuth from '../../Firebase/Hooks/useAuth';
import Footer from '../AppBar/Footer/Footer';
import BookmarkButtonPD from '../ProductInformation/BookmarkButtonPD';
import SuggestEditModal from '../ProductInformation/SuggestEditModal';
import BookmarkButton from './BookmarkButton';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


function ProductInformation() {
    const [open, setOpen] = useState(false);
    const [tools, setTools] = useState([]);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState(''); 
    const [categoryTools, setCategoryTools] = useState([]);
    const [category, setCategory] = useState([]);
    const { Id } = useParams();
    const [status, setStatus] = useState(0) 
    const { user } = useAuth()
    const email = user?.email

    useEffect(() => {
        console.log(Id)
        axios.get(`http://localhost:5000/api/v1/tool/getTools/${Id}`)
            .then(res => {
                if (res.status === 200) {
                    setTools(res?.data?.tools)
                    setCategory(res?.data?.tools?.categories)
                } else {
                    console.log(res)
                }
            })
    }, [Id, status])

    useEffect(() => {
        axios.put(`http://localhost:5000/api/v1/tool/get/categorys`, {
            category
        })
            .then(res => {
                if (res.status === 200) {
                    setCategoryTools(res?.data?.tools)
                } else {
                    console.log(res)
                }
            })
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
            <NavBar />
            <div>
                <Container>
                    <Box >
                        <Box className='textTagNav padding5' mt="40px" >
                            <Link className='routeLink'>Home</Link>
                            <span>  <EastIcon className='RouteLinkIcon' /> </span>
                            <Link className='routeLink'> Category</Link>
                            <span> <EastIcon className='RouteLinkIcon' /> </span>
                            <text className='textDeg'> {tools?.tool_name}</text>
                        </Box>
                        <Grid container>
                            <Grid item xs={7} lg={6} md={6} className="padding5" >
                                <Box className='d-flex' sx={{ justifyContent: "space-between" }}>
                                    <Typography id="text-20" className='revert' gutterBottom variant="h3" component="div">
                                        {tools?.tool_name}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={5} className="d-flex padding5" sx={{ justifyContent: "flex-end" }}>
                                <Box className='d-flex'>
                                    <BookmarkButtonPD tools={tools} setStatus={setStatus} status={status} email={email} />
                                </Box>
                            </Grid>
                        </Grid>

                        <Box>
                            <Grid container mt="20px">
                                <Grid item sx={12} md={12} lg={6} className='padding5' >
                                    <img
                                        className='w-100'
                                        src={tools?.imageURL}
                                    />
                                </Grid>
                                <Grid item sx={12} md={12} lg={6} className='padding5'>
                                    <Box className='text-left'>
                                        <Typography className='textDes'>DESCRIPTION:</Typography>
                                        <p className='text-left DesPText'    >
                                            {tools?.short_description}
                                        </p> 
                                    </Box>
                                    <Box className='added_text d-flex text-12-sm'>
                                        <VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} />
                                        Unwraptools endorses this tool based on our testing results.
                                    </Box>
                                    {/* <Box className='text-left d-flex added_text'>
                                        <BackupIcon className='FolderOpenIcon' />
                                        Added on  {tools?.createdAt?.slice(0, 10)}
                                    </Box> */}

                                    <Grid container>
                                        {
                                            tools?.price?.map((data, idx) => (
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
                                    <Box className="text-left" mt="15px">
                                        <a href={tools?.websiteURL} target="_blank" size="small" className='OpenInNewIcon' id="OpenInNewIcon_Custom">VISIT <OpenInNewIcon /></a>
                                    </Box>
                                    <Box className='mt-4 text-left'>
                                    <button className='button_suggest' onClick={handleOpen} variant="text"> <BorderColorIcon className='icon_suggest'/>Propose Modifications</button>
                                    <SuggestEditModal setMessage={setMessage} setOpenSuccess={setOpenSuccess} tools={tools} open={open} setOpen={setOpen} />
                                    </Box> 
                                </Grid> 
                            </Grid>
                        </Box>
                    </Box>
                  
                        {
                            tools?.description&&(
                                <Box>
                    <Typography className='textDes text-left'>{tools?.tool_name} Feature</Typography>
                    <div
                                            className='text-left mt-2'
                                            dangerouslySetInnerHTML={{
                                                __html: tools?.description
                                            }}>
                                        </div>
                    </Box>
                                
                            )
                        }    
                    <Box mb="30px" mt="20px"> 
                        <Box className='text-left' mt="50px">
                            <Typography className='BrowseAITools' mb="25px">Alternative AI Tools for STORYD</Typography>
                            <Grid container> 
                                {
                                    categoryTools.slice(0, 5).map((tool, idx) => (
                                        <Grid item xs={12} md={6} lg={4}>
                                        <Card className='card mb-3' sx={{ maxWidth: 345 }}>
                                        <CardMedia 
                                          className='positionab' 
                                            sx={{ height: 140 }}
                                            image={tool?.imageURL}
                                            title="green iguana"
                                        />
                                        <Box className='positionrs'>
                                            <Typography className='price'>$ {tool?.startingPrice}/mo</Typography>
                                        </Box>
                                            <CardContent sx={{paddingBottom: '0'}}>
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
                                                     {tool?.short_description?.slice(0, 100)}.
                                                </Typography>
                                                <Box>
                                                <Grid container className='mt-2'>
                                               {
                                                    tool?.price?.map((data, idx) =>(
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
                                                 <BookmarkButton setStatus={setStatus} status={status} tool={tool} email={email}/>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                        {/* <Box className='text-left mt-5'>
                            <Typography className='BrowseAITools' mb="15px">Browse AI Tools Similar to Looka</Typography>
                            <Box className='d-flex '>
                                <Link className='link_similar_tools'> Browse 7 AI logo generator tools.</Link>
                                <Link className='link_similar_tools'> Browse 53 AI design assistant tools.</Link>
                            </Box>
                        </Box> */}
                    </Box>
                </Container>
                <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
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
