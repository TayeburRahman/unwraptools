import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './shearIcon.css';

export default function ShearerIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} className="shearIcon" variant="text" onClick={handleClick}>
       <ShareIcon/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
         <Box className="d-flex" p="15px"> 
            <Link className="d-flex icon-box">
                    <LinkedInIcon className='linkedIn' sx={{color: "rgb(0, 119, 181)"}} />
                    </Link>
                    <Link className="d-flex icon-box">
                    <TwitterIcon className='Twitter' sx={{color: "rgb(0, 119, 181)"}} />
                    </Link>
                    <Link className="d-flex icon-box">
                    <YouTubeIcon className='YouTub' sx={{color: "rgb(255, 0, 0)"}} />
                    </Link>
        </Box>
        <button class="button-39" role="button">Copy Link</button>
      </Popover>
    </div>
  );
}