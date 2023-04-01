import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import StrollerIcon from '@mui/icons-material/Stroller';
import TuneIcon from '@mui/icons-material/Tune';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import FilterModal from './FilterModal';

function SearchFilters({ setSortBy, setPricing, pricing ,setFeatures ,features, sort }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setSortBy(event.target.value);
    };
    return (
        <div>
            <Grid container className='d-flex' sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Grid item sx={12} md={3} lg={3} className="d_flex_start">
                    <Button onClick={handleOpen} className='buttonFilters'>
                        Filters
                        <TuneIcon className='icon-co buttonIcon' sx={{ marginLeft: "10px" }} />
                    </Button>
                    <FilterModal open={open} setOpen={setOpen} pricing={pricing} setPricing={setPricing} setFeatures={setFeatures} features={ features} />
                </Grid>
                <Grid item sx={12} md={3} lg={3} className="d_flex_end">
                    <FormControl sx={{ m: 1, mr: 0, minWidth: 120 }}>
                        <Select
                            value={sort}
                            onChange={handleChange}
                            displayEmpty
                            className="selectGrid"
                        >
                            {
                             sort === null && (
                                     <MenuItem className='MenuItemButton' value="null">
                                <Button className='buttonText'>Sort by</Button>
                            </MenuItem>
                                )
                            }
                             
                            <MenuItem className='MenuItemButton text-left' value="verified">
                                <Button className='buttonText text-left'><VerifiedIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> Verified</Button>
                            </MenuItem>
                            <MenuItem className='MenuItemButton' value="new">
                                <Button className='buttonText'> <StrollerIcon className='icon-co buttonIcon' sx={{ marginRight: "10px", fontSize: "20px" }} /> New</Button>
                            </MenuItem>
                            <MenuItem className='MenuItemButton' value="popular">
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

