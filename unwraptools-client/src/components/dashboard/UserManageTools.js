import { AppBar, Box, Grid, Paper, Toolbar } from "@mui/material";
import ManageUserToolsTable from "../UserTools/ManageUserToolsTable";

 

const UserManageTools = () => {
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
            <span className="textBeg revert p=0 ">Manage Your Tools </span>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box className="divMain" >
        <Paper sx={{ width: '100%', overflow: 'hidden', minHeight: "80vh" }}>
          <ManageUserToolsTable />
        </Paper>
        {/* <UsersTable/> */}
      </Box>
    </Paper>
    );
};

export default UserManageTools;