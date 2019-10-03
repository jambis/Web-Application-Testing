import React, { useState, useEffect } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  useEffect(() => {
    if (balls === 4 || strikes === 3) {
      setStrikes(0);
      setBalls(0);
    }
  }, [strikes, balls]);

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  const handleFoul = () => {
    if (strikes < 2) setStrikes(num => ++num);
  };

  return (
    <div>
      <Display strikes={strikes} balls={balls} />
      <button
        data-testid="strikeButton"
        onClick={() => setStrikes(num => ++num)}
      >
        Strike
      </button>
      <button data-testid="ballButton" onClick={() => setBalls(num => ++num)}>
        Ball
      </button>
      <button data-testid="foulButton" onClick={handleFoul}>
        Foul
      </button>
      <button data-testid="hitButton" onClick={handleHit}>
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
