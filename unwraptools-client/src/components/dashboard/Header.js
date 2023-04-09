import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Fragment, React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
  const { onDrawerToggle } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [users, setUsers] =  useState([]); 
  const {user} = useAuth() 
  const email = user?.email

  useEffect(()=>{ 
      axios.get(`https://server.unwraptools.io/api/v1/user/getUsers/${email}`)
      .then(res => {
        if (res.status === 200) {
          // console.log(res?.data )
          setUsers(res?.data.user)
        }else{
          console.log(res)
        }
      })
  
    },[])

 

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // --------log out-----------------
 

  return (
    <Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            
            <Grid item>
              <Link
                to="/"
                variant="body2"
                className='backtohome'
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                
              >
              Back To Home
              </Link>
            </Grid>
            <Grid item>
              
                <Avatar alt={users.displayName} src={users?.photoURL} />
               
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    </Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;