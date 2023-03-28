import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import StrollerIcon from '@mui/icons-material/Stroller';
import TuneIcon from '@mui/icons-material/Tune';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import FilterModal from './FilterModal';

function SearchFilters() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
           <Grid container className='d-flex' sx={{display: "flex",
    justifyContent: "space-between"}}>
           <Grid item sx={12} md={3} lg={3} className="d_flex_start">
                <Button onClick={handleOpen} className='buttonFilters'>
                    Filters
                    <TuneIcon className='icon-co buttonIcon' sx={{    marginLeft:"10px"}} />
                </Button>
                <FilterModal open={open} setOpen={setOpen}/>
            </Grid> 
            <Grid item sx={12} md={3} lg={3} className="d_flex_end"> 
                <FormControl sx={{ m: 1, mr:0, minWidth: 120 }}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        className="selectGrid"
                    >
                        <MenuItem className='MenuItemButton' value="">
                            <Button className='buttonText'>Sort by</Button>
                        </MenuItem>
                        <MenuItem className='MenuItemButton' value="Verified">
                            <Button className='buttonText'><VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Verified</Button>
                        </MenuItem>
                        <MenuItem className='MenuItemButton' value="New">
                            <Button className='buttonText'> <StrollerIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> New</Button>
                        </MenuItem>
                        <MenuItem className='MenuItemButton' value="Popular">
                            <Button className='buttonText'><BookmarkAddedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Popular</Button>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
           </Grid>
        </div>
    )
}

export default SearchFilters

