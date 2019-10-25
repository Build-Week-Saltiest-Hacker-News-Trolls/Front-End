import React, { useEffect, useState } from "react";
import { FeedCard } from "../theme/Styled.js";
import { Row, Col } from "antd";

const FeedCardDetails = ({ comment }) => {
  const {
    id,
    author,
    original_comment_time,
    pos,
    neg,
    neu,
    comment_text
  } = comment;

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
                <strong style={{ fontSize: "1.15rem" }}>{author}</strong>
                <p>{original_comment_time}</p>
              </div>
              <div className="leftBottom">
                <h3 style={{ color: "rgba(255, 114, 0, 1)" }}>
                  {Math.abs(pos) > Math.abs(neg) ? pos : neg}
                </h3>
                <strong>
                  {Math.abs(pos) > Math.abs(neg) ? "Positive" : "Salty"}
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
              <p>{comment_text}</p>
            </div>
          </Col>
        </Row>
      </FeedCard>
    </>
  );
};

export default FeedCardDetails;
