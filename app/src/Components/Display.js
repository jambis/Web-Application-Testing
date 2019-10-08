import React from "react";

const Display = ({ strikes, balls, outs }) => {
  return (
    <div>
      <h1>Strikes</h1>
      <h2 data-testid="strikeCount">{strikes}</h2>
      <h1>Balls</h1>
      <h2 data-testid="ballCount">{balls}</h2>
      <h1>Outs</h1>
      <h2 data-testid="outCount">{outs}</h2>
    </div>
  );
};

export default Display;
