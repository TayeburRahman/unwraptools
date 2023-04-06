import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import React from 'react';
import ManageToolsTable from '../ManageTools/ManageToolsTable';

const ManageTools = () => {
    return (
        <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Toolbar>
            <Grid spacing={2} alignItems="center"> 
              <span className="textBeg revert p=0 ">Manage Tools</span>
            </Grid>
          </Toolbar>
        </AppBar>
         <Box className="divMain">
         <Paper sx={{ width: '100%', overflow: 'hidden', minHeight: "80vh" }}>
         <ManageToolsTable/>
           </Paper>  
           
         </Box>
      </Paper>
    );
};

export default ManageTools;