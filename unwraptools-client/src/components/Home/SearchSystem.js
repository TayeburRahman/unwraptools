import React, { useState } from 'react';
import SearchFilters from './SearchFilters';
import './home.css';

function SearchSystem(props) {
    const {pricing, setPricing, setSortBy,sort, features, setFeatures} = props;

 
    const [search, setSearch] = useState("");
    // const [sort, setSortBy] = useState("");
    // const [pricing, setPricing] = useState([]);
    // const [features, setFeatures] = useState([]);
 


    return (
        <div> 
            <SearchFilters setSortBy={setSortBy} sort={sort} pricing={pricing} setPricing={setPricing} setFeatures={setFeatures} features={ features} />

        </div>
    )
}

export default SearchSystem
