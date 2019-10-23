import React, { useState, useEffect } from "react";

import { Statistic, Icon, Progress } from "antd";

const Graph = ({ comments }) => {
  const [currentMood, setCurrentMood] = useState({
    positive: 0,
    negative: 0
  });

  useEffect(() => {
    let mood = {
      positive: 0,
      negative: 0
    };
    let positive = comments.map(comment => {
      return (mood.positive += comment.positive);
    });
    let negative = comments.map(comment => {
      return (mood.negative += comment.negative);
    });

    const positiveAggregate = mood.positive / comments.length;
    const negativeAggregate = mood.negative / comments.length;
    console.log(positiveAggregate, negativeAggregate);
    setCurrentMood({
      positive: positiveAggregate * 100,
      negative: negativeAggregate * -100
    });
  }, [comments]);

  return (
    <div>
      <Statistic
        title="Total Comments"
        value={comments.length}
        prefix={<Icon type="number" />}
      />
      <Statistic
        title="Overall Mood"
        value={
          currentMood.positive * currentMood.negative > 0
            ? "Positive"
            : "Negative"
        }
        prefix={<Icon type="fire" />}
      />
      <p>Positive</p>
      <Progress percent={currentMood.positive} status="active" />
      <p>Negative</p>
      <Progress percent={currentMood.negative} status="active" />
      {/* <Progress percent={props.comments.positive} status="active" /> */}
      {/* {console.log(aggregateMood())}; */}
    </div>
  );
};

export default Graph;
