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
      <button onClick={() => setStrikes(num => ++num)}>Strike</button>
      <button onClick={() => setBalls(num => ++num)}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  );
};

export default Dashboard;
