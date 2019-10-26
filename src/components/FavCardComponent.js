import React, { useContext } from "react";
import { FeedCard } from "../theme/Styled.js";
import { FavCommentContext } from "../Context/FavCommentContext";

import { Row, Col, Icon } from "antd";

// TODO: link to search bar and send in props
export default function FavCardComponent(props) {
  const {
    id,
    author,
    original_comment_time,
    pos,
    neg,
    neu,
    comment_text
  } = props.commentItem;

  const { removeFromFavComments } = useContext(FavCommentContext);

  return (
    <>
      <FeedCard>
        <div
          onClick={() => {
            removeFromFavComments(id);
          }}
        >
          <Icon type="close" />
        </div>
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
}
