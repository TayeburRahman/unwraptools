

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../image/notabailable.png';
import './favourites.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function FavoritesTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className='tabs' label="TOOLS" {...a11yProps(0)} />
                    <Tab className='tabs' label="NEWS" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://i.ibb.co/YRW7TtM/f2d4185d453b97f131031702e80177a45e238730-1858x915.webp"
                                title="green iguana"
                            />
                            <CardContent>
                                <Box className="d-flex" sx={{ justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography className='revert' gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <BookmarkAddedIcon />
                                        5
                                    </Box>
                                </Box>
                                <Typography className='text-left' variant="body2"  >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                <Box>
                                    <Box className="tagCard1">
                                        <LockOpenIcon className='cardTagIcon' />
                                        Free Trial
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Link to="/tool/1212" size="small" className='OpenInNewIcon' href="#hh"><OpenInNewIcon /></Link>
                                <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://i.ibb.co/YRW7TtM/f2d4185d453b97f131031702e80177a45e238730-1858x915.webp"
                                title="green iguana"
                            />
                            <CardContent>
                                <Box className="d-flex" sx={{ justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography className='revert' gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <BookmarkAddedIcon />
                                        5
                                    </Box>
                                </Box>
                                <Typography className='text-left' variant="body2"  >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                <Box>
                                    <Box className="tagCard1">
                                        <LockOpenIcon className='cardTagIcon' />
                                        Free Trial
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Link to="/tool/1212" size="small" className='OpenInNewIcon' href="#hh"><OpenInNewIcon /></Link>
                                <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://i.ibb.co/YRW7TtM/f2d4185d453b97f131031702e80177a45e238730-1858x915.webp"
                                title="green iguana"
                            />
                            <CardContent>
                                <Box className="d-flex" sx={{ justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography className='revert' gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <BookmarkAddedIcon />
                                        5
                                    </Box>
                                </Box>
                                <Typography className='text-left' variant="body2"  >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                <Box>
                                    <Box className="tagCard1">
                                        <LockOpenIcon className='cardTagIcon' />
                                        Free Trial
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Link to="/tool/1212" size="small" className='OpenInNewIcon' href="#hh"><OpenInNewIcon /></Link>
                                <Button size="small" className='BookmarkAddIcon'><BookmarkAddIcon /></Button>
                            </CardActions>
                        </Card>
                    </Grid> 
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>

              <Grid container>
                    <Grid item xs={12} md={6} lg={4}> 
                    </Grid> 
                </Grid>

                <Box>
                <Typography className='textDesLarger' >  No News Favourited Yet</Typography>
                    <img src={notFound} />
                    
                   

                </Box> 
            </TabPanel>

        </Box>
    );
}
