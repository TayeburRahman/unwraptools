import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';

import './home.css';

const options = ['Option 1', 'Option 2'];
 

export default function SearchBar() {
  return (
    <label className='w-100'> 
      <Autocomplete
      className='w-100'
        sx={{
          display: 'inline-block',
          
          '& input': {
            width: 200,
            bgcolor: 'background.paper',
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        id="custom-input-demo"
        options={options}
        renderInput={(params) => (
          <div className='searchIconRef' ref={params.InputProps.ref}>
            <SearchIcon className='fontIcon' />  
            <input className='SearchBar' placeholder="Search 1384 AI tools and 50 categories" type="text" {...params.inputProps} />

            
          </div>
        )}
      />
    </label>
  );
}