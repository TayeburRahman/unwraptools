import { Typography } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

function CurrentTime({news}) {

 const [day, setDay] = useState()
 const [hours, setHours] = useState()

 console.log('news', news)

 useEffect(()=>{ 
  
        axios.get(`http://localhost:5000/api/v1/news/gettime/${news?._id}`)
            .then(res => {
                if (res.status === 200) {
                    setDay(res?.data?.days)
                    setHours(res?.data?.remainingHours)
                  
                } else {
                    console.log(res)
                }
            }) 
 },[])

    return (
        <Fragment>
            <Typography>{day === 0 ? hours: day} {day === 0 ? "hours": "day"} ago</Typography>
        </Fragment>
    )
}

export default CurrentTime
