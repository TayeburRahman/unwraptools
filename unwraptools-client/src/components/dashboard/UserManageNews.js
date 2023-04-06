import { AppBar, Box, Grid, Paper, Toolbar } from "@mui/material";
import ManageUserNewsTable from "../Pages/UserNews/ManageUserNewsTable";

 

const UserManageNews = () => {
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
            <span className="textBeg revert p=0 ">Manage Your News </span>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box className="divMain" >
        <Paper sx={{ width: '100%', overflow: 'hidden', minHeight: "80vh" }}>
          <ManageUserNewsTable />
        </Paper>
        {/* <UsersTable/> */}
      </Box>
    </Paper>
    );
};

export default UserManageNews;