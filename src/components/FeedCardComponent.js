
import React, { useState, useContext } from "react";
import { FeedCard, CardUsername } from "../theme/Styled.js";
import { Row, Col, Icon, Popover } from "antd";
import { CommentContext } from "../Context/CommentContext";


const FeedCardComponent = ({
  setSelectedUsername,
  commentItem,
  toggleUserView
}) => {
  const {
    id,
    author,
    original_comment_time,
    pos,
    neg,
    neu,
    comment_text
  } = commentItem;

  const { addToFavComments } = useContext(CommentContext);

  const toggleClickHandler = e => {
    toggleUserView();
    setSelectedUsername(author);
    console.log("event from click handler", e);
  };
  // console.log("toggleUserView from feedCard", toggleUserView);

  // console.log(username);
  // console.log("props from feedcard.js", props);
  return (
    <>
      <FeedCard>
        <Row>
          <Col span={10}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "230px"
              }}
            >

              <Popover placement="leftTop" content={
              <p>
                See all comments by this user
              </p>
            }
            >
                <CardUsername className="leftTop">
                  <strong
                    onClick={toggleClickHandler}
                    style={{ fontSize: "1.15rem" }}
                  >
                    {author}
                  </strong>

                  <p>{original_comment_time}</p>
                </CardUsername>
              </Popover>

              <div className="leftBottom">
                <h3 style={{ color: "rgba(255, 114, 0, 1)" }}>
                  {Math.abs(pos) > Math.abs(neg)
                    ? pos * 100 + "%"
                    : neg * 100 + "%"}
                </h3>
                <strong>
                  {Math.abs(pos) > Math.abs(neg) ? "Positive" : "Salty"}
                </strong>
              </div>
            </div>
          </Col>

          <Col span={14}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "230px"
              }}
            >
              <strong style={{ fontSize: "1.15rem" }}>Comment</strong>
              <p>{comment_text}</p>
              <div>
                <button
                  className="fav-icon"
                  onClick={() => {
                    addToFavComments(commentItem);
                  }}
                >
                  <Icon
                    type="heart"
                    theme="twoTone"
                    twoToneColor="rgba(204, 41, 54, 1)"
                  />
                  <strong>Add to Favorites</strong>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </FeedCard>
    </>
  );
};

export default FeedCardComponent;
