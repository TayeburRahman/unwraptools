import { Box, Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/Hooks/useAuth';

function SuggestEditTable() {

    const [suggestEdit, setSuggestEdit] = useState([]);

    const { user } = useAuth()
    const email = user?.email


    useEffect(() => {
        axios.get(`https://server.unwraptools.io/api/v1/tool/get/suggestedit/${email}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res?.data)
                    setSuggestEdit(res?.data?.suggest)
                } else {
                    console.log(res)
                }
            })

    }, [])
 

    return (
        <Box>

            {
                suggestEdit?.map((data, idx) => (
                    <Grid container className='mt-2 pb-2 mb-2' sx={{borderBottom:'1px solid #9f9f9f'}}>
                        <Grid item xs={3} md={2} lg={2}>
                            <img src={data?.tools?.imageURL}  width="100%" />
                        </Grid>
                        <Grid item xs={9} md={10} lg={10} className='ps-3'>
                            <Typography className='text-left' >{data?.tools?.tool_name}</Typography>
                            <Typography className='text-left' >{data?.tools?.startingPrice}/mo </Typography>
                            <Typography className='text-left' >{data?.tools?.short_description} </Typography> 
                        </Grid>
                        <Divider/>
                        <Grid item xs={12} md={12} lg={12} className='mt-3'>
                        <Box className='text-left'><Typography className='p-3'>Suggest Edit</Typography></Box>
                            <Box className='p-3 pt-0 d-flex'>
                                <Box className='text-left'> <img src={data?.suggest_user?.photoURL}  width="40px" style={{borderRadius:"50px"}} /></Box>
                                <Box className='text-left'> <Typography className='text-left ms-2' >{data?.suggest_user?.displayName} </Typography> </Box>
                                <Box className='text-left'>  <Typography className='text-left ms-5' > <span>Email: </span> {data?.suggest_user?.email} </Typography> </Box>
                            </Box>
                            <Box className='ms-3 me-3 p-2' sx={{border:"1px solid #9f9f9f" , borderRadius:"5px"}}> 
                                <Box className='text-left'>  <Typography className='text-left ' > {data?.text_suggest} </Typography> </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ))
            }


        </Box>
    )
}

export default SuggestEditTable
