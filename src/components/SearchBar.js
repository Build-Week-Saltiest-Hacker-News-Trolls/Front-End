import React, { useState, useEffect, useContext } from "react";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import FeedCardComponent from "./FeedCardComponent.js";

import FeedCardDetails from "./FeedCardDetails.js";
import { SearchForm, FeedCardContainer } from "../theme/Styled.js";
import { Link } from "react-router-dom";

import { Select } from "antd";

const { Option } = Select;

//  pass in comments through props
export default function SearchBar({
  comments,
  setSearchedComments,
  setSearchedTerm
}) {
  // <========== pass in comments through props ============>
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userView, setUserView] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState("");
  const [filter, setFilter] = useState({ order: "", sentiment: "" });
  const { favCommentsList, setFavCommentsList } = useContext(FavCommentContext);

  const toggleUserView = e => {
    setUserView(!userView);
  };

  //  Handle Favorites Icon Click
  const handleFavorite = e => {
    // e.preventDefault();
    // addFavComments(e.target.id);
    console.log(
      "Favorte Pressed!",
      "Target Id: ",
      e,
      "Favorite Comments: ",
      favCommentsList
    );
  };

  //  set search term state each keystoke
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  //  filter by drop down selection
  const orderSort = e => {
    let sortedResults = [];
    sortedResults = searchResults.sort(function(a, b) {
      return e == "1" ? a - b : b - a; // 1 = ascending, else descending
    });
    setSearchResults(sortedResults);
  };

  const sentimentFilter = e => {
    let filteredResults = [];
    setSearchResults(filteredResults);
  };

  const handleSort = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    orderSort(filter.order);
    sentimentFilter();
  }, [filter]);

  // search filter function - runs each time seach value changes
  useEffect(() => {
    const results = comments.filter(comment =>
      comment.username.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setSearchedComments(results);
    setSearchedTerm(searchTerm);
    console.log("Search Results", searchResults);
  }, [searchTerm]);

  // Render full comment list or searchResults(if any)
  const conditionalRender = () => {
    return searchTerm === "" ? comments : searchResults;
  };

  return (
    // TODO:
    // form needs updated styling to match rest of overall dashboard design
    <>
      {userView ? (
        <FeedCardContainer key={selectedUsername}>
          <h3 onClick={toggleUserView}>X</h3>
          <FeedCardDetails selectedUsername={selectedUsername} />
        </FeedCardContainer>
      ) : (
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
                Sort:
                <Select defaultValue="" onChange={orderSort}>
                  <Option value="1">Ascending</Option>
                  <Option value="2">Descending</Option>
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
                  toggleUserView={toggleUserView}
                  setSelectedUsername={setSelectedUsername}
                  commentItem={item}
                />
              ))
            ) : (
              <div>User Not Found</div>
            )}
          </FeedCardContainer>
        </>
      )}
    </>
  );
}
