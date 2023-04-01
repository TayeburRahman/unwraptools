import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SearchFilters from './SearchFilters'
import TagHome from './TagHome'

function SearchSystem(props) {
    const {pricing, setPricing} = props;

    const [ status, setStatus] =  useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSortBy] = useState("");
    // const [pricing, setPricing] = useState([]);
    const [features, setFeatures] = useState([]);


    console.log('search', pricing, features)

    useEffect(()=>{ 
        axios.get(`http://localhost:5000/api/v1/tool/get/filter?pricing=${pricing}&search=${search}&features=${sort}`)
        .then(res => {
          if (res.status === 200) {
            // console.log('sssss',res?.data)
            // setAllTools(res?.data?.tools)
          }else{
            console.log(res)
          }
        })
      },[pricing, features])


    return (
        <div>
            <Box>
                <TagHome />
            </Box>
            <SearchBar setSearch={setSearch} />
            <SearchFilters setSortBy={setSortBy} sort={sort} pricing={pricing} setPricing={setPricing} setFeatures={setFeatures} features={ features} />

        </div>
    )
}

export default SearchSystem
