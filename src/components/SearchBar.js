import React, { useState, useEffect } from 'react';
import FeedCardComponent from "./FeedCardComponent.js";
import { SearchForm } from "../theme/Styled.js";

export default function SearchBar({ comments }) {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }
  
  // <============= search filter function - runs each time seach value changes ======================>
  useEffect(() => {
    const results = comments.filter(comment => comment.username.toLowerCase().includes(searchTerm));
    setSearchResults(results);
    console.log("Search Results", searchResults)
  }, [searchTerm])

  // <============= Render search results or full comment list ============>
  const conditionalRender = () => {
    return searchTerm === "" ? comments : searchResults;
  }

 
  return (
    // form needs updated styling
    <>
      <section className="search-form">    
        <SearchForm>
          <input size="large" 
            id="search"
            value={searchTerm}
            name="search"
            type="text"
            placeholder="  Search by username"
            onChange={handleChange}
          />          
        </SearchForm>         
      </section> 
      <>
      {/* Map over incoming or filtered comments */}

      {conditionalRender().map(item => (
        <FeedCardComponent key={item.id} comment={item} />
      ))}
      </>
    </>
  )
}