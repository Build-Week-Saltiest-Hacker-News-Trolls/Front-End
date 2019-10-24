import React, { useState, useEffect } from "react";
import FeedCardComponent from "./FeedCardComponent.js";
import FeedCardDetails from "./FeedCardDetails.js";
import { SearchForm, FeedCardContainer } from "../theme/Styled.js";
import { Link } from "react-router-dom";
// <========== pass in comments through props ============>
export default function SearchBar({ comments }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userView, setUserView] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState("");

  const toggleUserView = e => {
    setUserView(!userView);
  };

  console.log(
    "userView then selectedUsername from searchbar",
    userView,
    selectedUsername
  );

  // <========== set search term state each keystoke ============>
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  // <============= search filter function - runs each time seach value changes ======================>
  useEffect(() => {
    const results = comments.filter(comment =>
      comment.username.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    console.log("Search Results", searchResults);
  }, [searchTerm]);

  // <============= Render full comment list or searchResults(if any) ============>
  const conditionalRender = () => {
    return searchTerm === "" ? comments : searchResults;
  };

  return (
    // TODO:
    // form needs updated styling to match rest of overall dashboard design
    <>
      {userView ? (
        <FeedCardContainer key={selectedUsername}>
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
