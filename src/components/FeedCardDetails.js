import React, { useEffect, useState } from "react";
import { FeedCard } from "../theme/Styled.js";
import { Row, Col } from "antd";
import { fakeCommentData } from "../fakeData.js";

const FeedCardDetails = props => {
  const [userCommentInfo, setUserCommentInfo] = useState([]);

  console.log(userCommentInfo);

  useEffect(() => {
    const searchUsername = props.selectedUsername;
    setUserCommentInfo(
      fakeCommentData.filter(comment => {
        return comment.username === searchUsername;
      })
    );
  }, []);

  console.log("props from FeedCardDetails.js", props);
  return (
    <>
      {userCommentInfo.map(commentItem => {
        const {
          id,
          username,
          commentDate,
          positive,
          negative,
          neutral,
          comment
        } = commentItem;

        return (
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
        );
      })}
    </>
  );
};

export default FeedCardDetails;
