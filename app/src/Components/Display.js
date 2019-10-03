import React from "react";

const Display = ({ strikes, balls }) => {
  return (
    <div>
      <h1>Strikes</h1>
      <h2>{strikes}</h2>
      <h1>Balls</h1>
      <h2>{balls}</h2>
    </div>
  );
};

export default Display;
