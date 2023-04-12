import { Box } from '@mui/material'
import React from 'react'
import image from '../../image/notfount.png'
import Footer from '../AppBar/Footer/Footer'

function NotFound() {
    return (
        <Box>
            <Box 
            sx={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                height: "85vh"
            }}>
                <img src={image} width="40%" />
            </Box>
            <Footer/>
        </Box>
    )
}

export default NotFound
