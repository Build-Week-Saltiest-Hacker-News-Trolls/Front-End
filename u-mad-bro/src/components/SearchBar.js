import React, { useState } from 'react';
import axios from 'axios';

export default function SearchBar(props) {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResults, setSearchResults ] = useState("");

  const API_URL = 'https://hacker-news.firebaseio.com/v0/user/'

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const getUserInfo = () => {
    axios
      .get(`${API_URL}${searchTerm}`)
      .then(response => {
        console.log("Search Response", response);
        setSearchResults(response);
      })
      .then(error => {
        console.log("Search Error Message", error)
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    getUserInfo();
    setSearchTerm("");
  }

 
  return (
    // form needs styling
    <>
      <section className="search-form">    
        <form onSubmit={handleSubmit}>
          <input 
            id="search"
            value={searchTerm}
            name="search"
            type="text"
            placeholder="Search by username"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>         
      </section> 
      {/* display search results or no results message */}
      {searchResults !== "" ? 
        <div className="search-results">{searchResults}</div> 
      :
        <div className="search-results">"User not found"</div>
      }
    </>
  )
}