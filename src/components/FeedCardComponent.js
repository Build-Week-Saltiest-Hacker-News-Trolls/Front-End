import React from "react";
import { FeedCard } from "../theme/Styled.js";
import { Row, Col } from "antd";

const FeedCardComponent = props => {
  const {
    id,
    username,
    commentDate,
    positive,
    negative,
    neutral,
    comment
  } = props.comment;

  console.log(username);
  console.log("props from feedcard.js", props);
  return (
    <>
      <FeedCard>
        <Row>
          <Col span={6} style={{ background: "lightblue" }}>
            <strong>{username}</strong>
            <p>{commentDate}</p>
            <h3>
              {Math.abs(positive) > Math.abs(negative) ? positive : negative}
            </h3>
            <strong>
              {Math.abs(positive) > Math.abs(negative) ? "Positive" : "Salty"}
            </strong>
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
