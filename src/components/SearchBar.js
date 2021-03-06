import React, { useState, useEffect, useContext } from "react";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import FeedCardComponent from "./FeedCardComponent.js";

import FeedCardDetails from "./FeedCardDetails.js";
import { SearchForm, FeedCardContainer } from "../theme/Styled.js";
import { Link } from "react-router-dom";

import { Select, Row, Col } from "antd";

const { Option } = Select;

//  pass in comments through props
export default function SearchBar({
  comments,
  setSearchedComments,
  setSearchedTerm
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userView, setUserView] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState("");
  const [filteredComments, setFilteredComments] = useState(comments);
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

  useEffect(() => {
    setFilteredComments(
      comments.filter(comment => {
        return comment.id == selectedAuthorId;
      })
    );
  }, [selectedAuthorId]);

  //  set search term state each keystoke
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  //  filter by drop down selection
  const orderSort = e => {
    let s = filter.sentiment;
    let sortedResults = e.sort(function(a, b) {
      switch (filter.order) {
        case "asc":
          return s === "neu"
            ? asc(a.neu, b.neu)
            : s === "pos"
            ? asc(a.pos, b.pos)
            : s === "neg"
            ? asc(a.neg, b.neg)
            : asc(a.id, b.id);
        case "desc":
          return s === "neu"
            ? desc(a.neut, b.neu)
            : s === "pos"
            ? desc(a.pos, b.pos)
            : s === "neg"
            ? desc(a.neg, b.neg)
            : desc(a.id, b.id);
      }
    });
    return sortedResults;
  };

  const asc = (a, b) => {
    return a - b;
  };

  const desc = (a, b) => {
    return b - a;
  };

  const handleOrder = e => {
    setFilter({ ...filter, order: e });
  };

  const handleSentiment = e => {
    setFilter({ ...filter, sentiment: e });
  };

  // search filter function - runs each time seach value changes
  useEffect(() => {
    const results = comments.filter(comment =>
      comment.author.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setSearchedComments(results);
    setSearchedTerm(searchTerm);
    // console.log("Search Results", searchResults);
  }, [searchTerm]);

  // Render full comment list or searchResults(if any)
  const conditionalRender = () => {
    return searchTerm === "" ? orderSort(comments) : orderSort(searchResults);
  };

  const conditionalMessage = () => {
    return searchTerm === "" ? "Loading Comments" : "User Not Found";
  };

  return (
    // TODO:
    // form needs updated styling to match rest of overall dashboard design
    <>
      {userView ? (
        <FeedCardContainer key={selectedAuthorId} className="feed-card-cont">
          <h3 onClick={toggleUserView}>X</h3>
          {filteredComments.map(comment => (
            <FeedCardDetails
              selectedAuthorId={selectedAuthorId}
              comment={comment}
            />
          ))}
        </FeedCardContainer>
      ) : (
        <>
          <section className="search-form">
            {/* Styled Component */}
            <SearchForm>
              <Row>
                <Col span={24}>
                  <input
                    size="large"
                    id="search"
                    value={searchTerm}
                    name="search"
                    type="text"
                    placeholder="  Search by author"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col offset={8} span={8}>
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
                </Col>
                <Col span={8}>
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
                </Col>
              </Row>
            </SearchForm>
          </section>
          <FeedCardContainer className="feed-card-cont">
            {/* Map over comment list or filtered comments or null */}

            {conditionalRender().length !== 0 ? (
              conditionalRender().map(item => (
                <FeedCardComponent
                  key={item.id}
                  toggleUserView={toggleUserView}
                  setSelectedAuthorId={setSelectedAuthorId}
                  commentItem={item}
                />
              ))
            ) : (
              <h3>{conditionalMessage()}</h3>
            )}
          </FeedCardContainer>
        </>
      )}
    </>
  );
}
