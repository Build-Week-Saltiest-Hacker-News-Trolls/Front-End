import React, { useState, useEffect, useContext } from "react";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import FeedCardComponent from "./FeedCardComponent.js";
import { FeedCardContainer } from "../theme/Styled.js";
import { SearchForm } from "../theme/Styled.js";
import { Select } from "antd";

const { Option } = Select;

//  pass in comments through props 
export default function SearchBar({ comments }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState({ order: "", sentiment: "" });
  const { favCommentsList, setFavCommentsList } = useContext(FavCommentContext);
  

  const addToFavCommentsList = comment => {
    // setFavCommentsList( [...favCommentsList, comment] ); <--returns favCommentList not iterable
  };

  //  Handle Favorites Icon Click 
  const handleFavorite = (e) => {
    // e.preventDefault();
    // addFavComments(e.target.id);
  console.log("Favorte Pressed!", "Target Id: ", e, "Favorite Comments: ", favCommentsList);
  }

  //  set search term state each keystoke 
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  //  filter by drop down selection
  const orderSort = e => {
    let s = filter.sentiment;
    let sortedResults = e.sort(function(a,b) {
      switch(filter.order) {
        case "asc":
          return s === "neu" ? asc(a.neutral, b.neutral) :
                 s === "pos" ? asc(a.positive, b.positive) :
                 s === "neg" ? asc(a.negative, b.negative) :
                 asc(a.id, b.id)
        case "desc":
          return s === "neu" ? desc(a.neutral, b.neutral) :
                 s === "pos" ? desc(a.positive, b.positive) :
                 s === "neg" ? desc(a.negative, b.negative) :
                 desc(a.id, b.id)
      }
    });
    return sortedResults;
  };

  const asc = (a,b) => {
    return a-b
  }

  const desc = (a,b) => {
    return b-a
  }

  const handleOrder = e => {
    setFilter({...filter, order: e});
  }

  const handleSentiment = e => {
    setFilter({...filter, sentiment: e});
  }

  // search filter function - runs each time seach value changes
  useEffect(() => {
    const results = comments.filter(comment =>
      comment.username.toLowerCase().includes(searchTerm)
    );
    console.log("Order Sort: ");
    console.log(orderSort(results));
    setSearchResults(orderSort(results));
    console.log("Filter State", filter);
    console.log("Search Results", searchResults);
  }, [searchTerm, filter]);

  // Render full comment list or searchResults(if any)
  const conditionalRender = () => {
    return searchTerm === "" ? comments : searchResults;
  };

  
  return (
    // TODO:
    // form needs updated styling to match rest of overall dashboard design
    <>
      <section className="search-form">
        {/* Styled Component */}
        <SearchForm>
          <input
            size="large"
            id="search"
            value={searchTerm}
            name="search"
            type="text"
            placeholder="  Search by username"
            onChange={handleChange}
          />
          <label>
            Sort Order:
            <Select 
              name="order"
              defaultValue="asc"
              onChange={handleOrder.bind(this)}
            >
              <Option value="asc">Ascending</Option>
              <Option value="desc">Descending</Option>
            </Select>
          </label>
          <label>
            Filter By:
            <Select 
              name="filter"
              defaultValue="nil"
              onChange={handleSentiment.bind(this)}
            >
              <Option value="nil"></Option>
              <Option value="neu">Neutrality</Option>
              <Option value="pos">Positivity</Option>
              <Option value="neg">Negativity</Option>
            </Select>
          </label>
        </SearchForm>
      </section>
      <FeedCardContainer>
        {/* Map over comment list or filtered comments or null */}
        {searchResults.length !== 0 ? (
          conditionalRender().map(item => (
            <FeedCardComponent 
              key={item.id} 
              comment={item} 
              handleFavorite={handleFavorite}
              addToFavCommentsList={addToFavCommentsList}
            />
          ))
        ) : (
          <div>User Not Found</div>
        )}
      </FeedCardContainer>
    </>
  );
}
