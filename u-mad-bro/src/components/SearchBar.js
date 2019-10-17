import React from 'react';

export default function SearchBar(props) {  
 
  return (
    // needs styling
    <section className="search-form">    
      <form onSubmit={props.handleSubmit}>
        <input 
          id="search"
          value={props.searchValue}
          name="search"
          type="text"
          placeholder="Search by user"
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>         
    </section> 
  )  
}