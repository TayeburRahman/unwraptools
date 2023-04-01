import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
import useAuth from "../../Firebase/Hooks/useAuth";
import "./NavBar.css";
import NavDower from "./NavDower";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {logOut}=useAuth()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="w-90" disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="toggle"
            >
              <NavDower />
            </IconButton>
          </Box>
          <Link
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              marginLeft: "50px",
            }}
            className="revert LogoNav ms-5"
          >
            <span className="textBeg revert">unwraptools</span>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box className="ps-5">
              <Link to="/categories" className="link-route ms-5">
              Categories
              </Link>
            </Box>
            <Box>
              <Link to="/user/favourites" className="link-route">
                Favourites
              </Link>
            </Box> 
            <Box>
              {" "}
              <Link to="/tool/explore" className="link-route">
               Explore
              </Link>
            </Box>
            <Box className="navHoverBox">
              <Link className="link-route hoverSubmit ">Submit</Link>
              <Box className="navFocusBox d-grid">
                <Link to="/submit-tool" className="link-hover hoverBg p-0">
                  Submit Tool
                </Link>
                <Link to="/submit-news" className="link-hover hoverBg">
                  Submit News
                </Link>
              </Box>
            </Box>

            <Box className="navHoverBox">
              <Link to="/" className="link-route hoverSubmit">
                Community
              </Link>
              <Box className="navFocusBox d-grid">
                <Link to="/" className="link-hover hoverBg p-0">
                  Newsletter Issues
                </Link>
                <Link to="/news" className="link-hover hoverBg">
                  Latest AI News
                </Link>
                <Link to="/" className="link-hover hoverBg">
                  Join Discord
                </Link>
                <Box className="d-flex ps-3 pt-2">
                  <Link className="d-flex icon-box-custom link-nav-icon">
                    <LinkedInIcon className="linkedIn icon-site" sx={{color: "rgb(0, 119, 181)"}} />
                  </Link>
                  <Link className="d-flex icon-box-custom link-nav-icon">
                    <TwitterIcon className="Twitter icon-site" sx={{color: "rgb(0, 119, 181)"}} />
                  </Link>
                  <Link className="d-flex icon-box-custom link-nav-icon">
                    <YouTubeIcon className="YouTub icon-site" sx={{color: "rgb(255, 0, 0)"}} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", marginRight: "50px" }}>
            <Box className="DarkMode">
              <DarkMode />
            </Box>
            <Tooltip className="Tooltip" title="Open settings">
              <IconButton
                className="avatarButton"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  className="avatar"
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box className="box-100">
                <Link to="/login" className="link-route custom-link-nav">
                  {" "}
                  <Typography className="text-margin">
                    Your Favourites{" "}
                  </Typography>
                </Link>
                <Button 
                onClick={logOut}
                 className="button-click">
                  {" "}
                  <Typography className="button-margin"> Log Out </Typography>
                </Button>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
