import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function NavDower() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="background backgroundDower "
    >
      <List>
        
          <ListItem disablePadding>
         
               <Container className="d-flex pt-2 pb-2" sx={{justifyContent: "space-between"}}> <Typography className='text25 textBeg revert'>unwraptools</Typography> <Button className='buttonClose'><CloseIcon/></Button></Container> 
          </ListItem>
        
      </List>
      <Divider />
      <List className='mt-5'> 
            <ListItem className=''  disablePadding>
                <Link className='link-route-dower'>Categories</Link>
            </ListItem> 
             <ListItem className=''  disablePadding>
                <Link className='link-route-dower'>My Favourites</Link>
            </ListItem> 
            <ListItem className=''  disablePadding>
                <Link className='link-route-dower'>  Discover & Tool</Link>
            </ListItem> 
            <ListItem className='mb-1' disablePadding>
            <Typography className='SubmitTextDower'> Submit:</Typography>
            </ListItem> 
            <ListItem className='' disablePadding>
                <Link className='link-route-dower'>Submit Tool</Link>
            </ListItem> 
            <ListItem className='' disablePadding>
                <Link className='link-route-dower'>Submit News</Link>
            </ListItem> 
            <ListItem className='mb-1' disablePadding>
            <Typography className='SubmitTextDower'> Community:</Typography>
            </ListItem> 
            <ListItem className=''  disablePadding>
                <Link className='link-route-dower'>Newsletter Issues</Link>
            </ListItem> 
            <ListItem  className='' disablePadding>
                <Link className='link-route-dower'>Latest AI News</Link>
            </ListItem> 
            <ListItem  disablePadding>
                <Link className='link-route-dower'>Join Discord</Link>
            </ListItem>  
      </List>
      <Box className='box-bottom '>
      <Container>
      <Box className='d-flex ps-3 pt-2 '>
                    <Link className="d-flex icon-box icon-box-custom">
                                 <LinkedInIcon className='linkedIn icon-site' sx={{color: "rgb(0, 119, 181)"}} />
                                </Link>
                                <Link className="d-flex icon-box icon-box-custom">
                                    <TwitterIcon className='Twitter icon-site' sx={{color: "rgb(0, 119, 181)"}} />
                                </Link>
                                <Link className="d-flex icon-box icon-box-custom">
                                    <YouTubeIcon className='YouTub icon-site' sx={{color: "rgb(255, 0, 0)"}} />
                                </Link>
              </Box>
      </Container>
      </Box>
    </Box>
  );

  return (
    <div className='d-flex'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='toggle' onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)} 
          >
            {list(anchor)}

            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}