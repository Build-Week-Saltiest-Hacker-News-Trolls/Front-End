import React, { useState } from "react";
import { FeedCard } from "../theme/Styled.js";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const FeedCardComponent = ({
  setSelectedUsername,
  commentItem,
  toggleUserView
}) => {
  const {
    id,
    username,
    commentDate,
    positive,
    negative,
    neutral,
    comment
  } = commentItem;

  const toggleClickHandler = e => {
    toggleUserView();
    setSelectedUsername(username);
    console.log("event from click handler", e);
  };
  // console.log("toggleUserView from feedCard", toggleUserView);

  // console.log(username);
  // console.log("props from feedcard.js", props);
  return (
    <>
      <FeedCard>
        <Row>
          <Col span={9}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "230px"
              }}
            >
              <div className="leftTop">
                <strong
                  onClick={toggleClickHandler}
                  style={{ fontSize: "1.15rem" }}
                >
                  {username}
                </strong>

                <p>{commentDate}</p>
              </div>
              <div className="leftBottom">
                <h3 style={{ color: "rgba(255, 114, 0, 1)" }}>
                  {Math.abs(positive) > Math.abs(negative)
                    ? positive
                    : negative}
                </h3>
                <strong>
                  {Math.abs(positive) > Math.abs(negative)
                    ? "Positive"
                    : "Salty"}
                </strong>
              </div>
            </div>
          </Col>

          <Col span={13}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "230px"
              }}
            >
              <strong style={{ fontSize: "1.15rem" }}>Comment</strong>
              <p>{comment}</p>
            </div>
          </Col>
        </Row>
      </FeedCard>
    </>
  );
};

export default FeedCardComponent;
