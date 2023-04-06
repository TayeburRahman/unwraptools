import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolIcon from '@mui/icons-material/School';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
import './index.css';

const users = [

  {
    id: 'Manage Your Tools & News',
    children: [
      { id: 'Tools', icon: <GroupAddIcon />, route: 'user/manage_tools' },
      { id: 'News', icon: <ManageAccountsIcon />, route: 'user/manage_news' },
      { id: 'Suggest Edit', icon: <ManageAccountsIcon />, route: 'user/suggest_edit' },
    ],
  }
];


const categories = [


  {
    id: 'Approve Tools & News',
    children: [
      {
        id: 'Tools',
        icon: <LocalLibraryIcon />,
        route: 'approve_tools'
      },
      {
        id: 'News',
        icon: <DnsRoundedIcon />, route: 'approve_news'
      },


    ],
  },
  {
    id: 'Manage Tool & News',
    children: [
      { id: 'Tools', icon: <SchoolIcon />, route: 'manage_tools' },
      { id: 'News', icon: <SettingsInputComponentIcon />, route: 'manage_news' },
    ],
  },
  {
    id: '',
    children: [
      { id: 'Manage Users', icon: <GroupAddIcon />, route: 'manage_users' },
      { id: 'Manage Admin & profile', icon: <ManageAccountsIcon />, route: 'admin_profile' },
    ],
  },

];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function DashboardNavigator(props) {
  const { ...other } = props;

  const location = useLocation()
  let uri = location.pathname
  const { user, isLoading, admin, logOut} = useAuth(); 


  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          <span className="textBeg revert">unwraptools</span>
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText> <Link style={{ textDecoration: "none", color: "white" }} to="/dashboard">Dashboard</Link> </ListItemText>
        </ListItem>
        {users.map(({ id, children }) => (
          <Box key={id} sx={{ background: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, route }) => (
              <ListItem disablePadding key={childId}>
                <Link className='linkDashboard' to={`${route}`}>
                  <ListItemButton selected={uri === `/dashboard/${route}` ? true : false} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}

        {
          admin && (
            <React.Fragment>
              {categories.map(({ id, children }) => (
                <Box key={id} sx={{ background: '#101F33' }}>
                  <ListItem sx={{ py: 2, px: 3 }}>
                    <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                  </ListItem>
                  {children.map(({ id: childId, icon, route }) => (
                    <ListItem disablePadding key={childId}>
                      <Link className='linkDashboard' to={`${route}`}>
                        <ListItemButton selected={uri === `/dashboard/${route}` ? true : false} sx={item}>
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText>{childId}</ListItemText>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}

                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </React.Fragment>
          )
        }


        <Box className='mt-5' sx={{ background: '#101F33' }}>
          <ListItem disablePadding > 
            <ListItemButton  onClick={logOut} >
              <ListItemIcon  sx={{color:"#e3e3e3"}}><LogoutIcon /> </ListItemIcon>
              <ListItemText sx={{color:"#e3e3e3"}}>Log Out</ListItemText>
            </ListItemButton>

          </ListItem>
        </Box>


      </List>
    </Drawer>
  );
}