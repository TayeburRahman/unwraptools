import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function TagHome() {
    return (
        <div className='boxTag'>  
                <Box className="withTag" ><Link className='linkTag' to="/">copy wright</Link> </Box>  
               <Box className="withTag"><Link className='linkTag' to="/">sales</Link> </Box>  
               <Box className="withTag"><Link className='linkTag' to="/">search engine</Link> </Box>  
               <Box className="withTag"> <Link className='linkTag' to="/">SEO</Link> </Box>   
               <Box className="withTag"><Link className='linkTag' to="/">3D</Link></Box>  
               <Box className="withTag"><Link className='linkTag' to="/">art</Link></Box>  
               <Box className="withTag"> <Link className='linkTag' to="/">audio editor</Link></Box> 
               <Box className="withTag"><Link className='linkTag' to="/">avatars</Link> </Box>  
               <Box className="withTag"><Link className='linkTag' to="/">avatars</Link> </Box>  
               <Box className="withTag"> <Link className='linkTag' to="/">avatars</Link>  </Box> 
            
                 <Box className="withTag"><Link className='linkTag' to="/">code assistant</Link></Box>
                <Box className="withTag"> <Link className='linkTag' to="/">text to speech</Link> </Box> 
                <Box className="withTag"><Link className='linkTag' to="/">story teller</Link> </Box> 
                <Box className="withTag"><Link className='linkTag' to="/">startup tools</Link>   </Box>   
                <Box className="withTag"><Link className='linkTag' to="/">startup tools</Link>     </Box> 
                <Box className="withTag"><Link className='linkTag' to="/">startup tools</Link>    </Box>   
                
        </div>
    )
}

export default TagHome
