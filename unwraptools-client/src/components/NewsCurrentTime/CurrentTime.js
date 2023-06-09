import { Typography } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

function CurrentTime({news}) {

 const [day, setDay] = useState()
 const [hours, setHours] = useState()
 

 useEffect(()=>{  
        axios.get(`https://server.unwraptools.io/api/v1/news/gettime/${news?._id}`)
            .then(res => {
               
                    setDay(res?.data?.days)
                    setHours(res?.data?.remainingHours)
                  
                
            }) 
 },[])

    return (
        <Fragment>
            <Typography>{day === 0 ? hours: day} {day === 0 ? "hours": "day"} ago</Typography>
        </Fragment>
    )
}

export default CurrentTime
