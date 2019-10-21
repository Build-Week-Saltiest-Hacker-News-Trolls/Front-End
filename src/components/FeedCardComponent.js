import React from "react";
import { FeedCard } from "../theme/Styled.js";
import { Row, Col } from "antd";

const FeedCardComponent = props => {
  const { id, username, commentDate, rating, ratingType, comment } = props.user;

  console.log(username);
  console.log("props from feedcard.js", props);
  return (
    <>
      <FeedCard>
        <Row>
          <Col span={6} style={{ background: "lightblue" }}>
            <strong>{username}</strong>
            <p>{commentDate}</p>
            <h3>{rating}</h3>
            <strong>{ratingType}</strong>
          </Col>
          <Col span={18} style={{ background: "lightblue" }}>
            <strong>Comment</strong>
            <p>{comment}</p>
          </Col>
        </Row>
      </FeedCard>
    </>
  );
};

export default FeedCardComponent;
