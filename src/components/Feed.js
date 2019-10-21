import React from "react";
import { FeedCard } from "../theme/Styled.js";
import { Row, Col } from "antd";

const Feed = () => {
  return (
    <>
      {/* Map over incoming comments */}
      <FeedCard>
        <Row>
          <Col span={6} style={{ background: "lightblue" }}>
            <p>Username</p>
            <p>01/01/2020</p>
            <h3>10/10</h3>
            <p>Rating</p>
          </Col>
          <Col span={18} style={{ background: "lightblue" }}>
            <p>Comment</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              dolores itaque reprehenderit sapiente voluptatem ratione debitis
              iure, sed quae nostrum officiis dicta voluptates hic ea?
            </p>
          </Col>
        </Row>
      </FeedCard>
    </>
  );
};

export default Feed;
