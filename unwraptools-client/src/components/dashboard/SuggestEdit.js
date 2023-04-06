import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import React from 'react';
import SuggestEditTable from '../SuggestEdit/SuggestEditTable';

function SuggestEdit() {
    return (
        <Paper sx={{   margin: 'auto', overflow: 'hidden' }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Toolbar>
            <Grid spacing={2} alignItems="center">
              <span className="textBeg revert p=0 ">User Suggest Edit Your Tools </span>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box className="divMain" >
          <Paper sx={{ width: '100%', overflow: 'hidden', minHeight: "80vh" }}>
            <SuggestEditTable />
          </Paper> 
        </Box>
      </Paper>
    )
}

export default SuggestEdit
