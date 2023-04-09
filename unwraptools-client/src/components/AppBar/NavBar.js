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
import axios from "axios";
import * as React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
import useAuth from "../../Firebase/Hooks/useAuth";
import google from '../../image/google.png';
import "./NavBar.css";
import NavDower from "./NavDower";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeNews, setActiveNews] = React.useState([]);
  const [activeTool, setActiveTool] = React.useState([]);
  const { logOut, signImWithGoogle, user, admin } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();
  const patch = useParams();


  const handelGoogleSignIn = (e) => {
    signImWithGoogle(location, navigate)
  };

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
  const logOutHandle = () => {
    logOut()
    setAnchorElUser(null);

  }



  React.useEffect(() => {
    axios.get(`https://server.unwraptools.io/api/v1/news/getallNews/${user?.email}`)
      .then(res => {
        if (res.status === 200) {
          setActiveNews(res?.data?.active)
        } else {
          console.log(res)
        }
      })
  }, [user, patch])

  React.useEffect(() => {
    axios.get(`https://server.unwraptools.io/api/v1/tool/getallTools/${user?.email}`)
      .then(res => {
        if (res.status === 200) {
          // console.log('sssss',res?.data)
          setActiveTool(res?.data?.active)
        } else {
          console.log(res)
        }
      })
  }, [user, patch])


  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="w-90" disableGutters>
          <Box className="w30px" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, width: "30px" }}>
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
                {/* <Link to="/" className="link-hover hoverBg p-0">
                  Newsletter Issues
                </Link> */}
                <Link to="/news" className="link-hover hoverBg">
                  Latest AI News
                </Link>
                <Link to="/" className="link-hover hoverBg">
                  Join Discord
                </Link>
                <Box className="d-flex ps-3 pt-2">
                  <Link className="d-flex icon-box-custom link-nav-icon">
                    <LinkedInIcon className="linkedIn icon-site" sx={{ color: "rgb(0, 119, 181)" }} />
                  </Link>
                  <Link className="d-flex icon-box-custom link-nav-icon">
                    <TwitterIcon className="Twitter icon-site" sx={{ color: "rgb(0, 119, 181)" }} />
                  </Link>
                  <Link className="d-flex icon-box-custom link-nav-icon">
                    <YouTubeIcon className="YouTub icon-site" sx={{ color: "rgb(255, 0, 0)" }} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", marginRight: "50px" }}>
            <Box className="DarkMode">
              <DarkMode />
            </Box>

            {
              user?.email && ( 
                <Tooltip className="Tooltip" title="Open settings">
                  <IconButton
                    className="avatarButton"
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      className="avatar"
                      alt={user?.displayName}
                      src={user?.photoURL}
                    />
                  </IconButton>
                </Tooltip>

              )
            }


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

                <Link to="/user/favourites" className="Favourites"> 
                  <Typography className="ms-2">
                    Your Favourites
                  </Typography>
                </Link>

                {
                  activeNews?.length || activeTool?.length || admin ? (
                    <Link to="/dashboard" className={`Favourites`} >
                      <Typography className="ms-2">
                        Dashboard{" "}
                      </Typography>

                    </Link>

                  ):(
                    ''
                  )
                } 
                <Button
                  onClick={logOutHandle}
                  className="button-click button-logout" >
                  {" "}
                  <Typography className="button-margin ms-2"> Log Out </Typography>
                </Button>
              </Box>
            </Menu>




            {
              !user?.email && (
                <React.Fragment>
                  <Button className='w-100 button-login d-flex' onClick={handelGoogleSignIn}><Box className="d-flex w-100" sx={{
                    width: "100%",
                    justifyContent: 'center',
                    minWidth:"50px"
                  }}><span className='padding-2'><img src={google} width="30px" />  </span> <span className="d-none me-3">Login</span></Box></Button>
                </React.Fragment>
              )
            } 

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
