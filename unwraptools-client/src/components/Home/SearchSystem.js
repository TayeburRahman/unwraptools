import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchFilters from './SearchFilters';
import './home.css';

function SearchSystem(props) {
    const {pricing, setPricing, setSortBy,sort, features, setFeatures} = props;

    const [ status, setStatus] =  useState(1);
    const [search, setSearch] = useState("");
    // const [sort, setSortBy] = useState("");
    // const [pricing, setPricing] = useState([]);
    // const [features, setFeatures] = useState([]);


    console.log('search', pricing, features)

    useEffect(()=>{ 
        axios.get(`https://server.unwraptools.io/api/v1/tool/get/filter?pricing=${pricing}&search=${search}&features=${sort}`)
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
            <SearchFilters setSortBy={setSortBy} sort={sort} pricing={pricing} setPricing={setPricing} setFeatures={setFeatures} features={ features} />

        </div>
    )
}

export default SearchSystem
