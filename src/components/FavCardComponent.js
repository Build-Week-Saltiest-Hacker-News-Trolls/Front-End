import React from "react";
import { FeedCard } from "../theme/Styled.js";

import { Row, Col, Icon } from "antd";

// TODO: link to search bar and send in props
export default function FavCardComponent(props) {
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
        <Icon
          type="heart"
          theme="twoTone"
          twoToneColor="rgba(204, 41, 54, 1)"
        />
        <button
          className="-remove-fav-icon"
          onClick={props.removeFromFavComments(comment)}
        >
          <Icon
            type="delete"
            theme="twoTone"
            twoToneColor="rgba(204, 41, 54, 1)"
          />
          <strong>Remove from Favorites</strong>
        </button>
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
              <div classname="leftTop">
                <strong style={{ fontSize: "1.15rem" }}>{username}</strong>
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
}
