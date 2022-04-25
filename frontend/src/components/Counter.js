import React, { useEffect, useState } from "react";
import numbers from "../api";

export default function Home() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getNumber = async () => {
      const response = await numbers.get("/number");
      setNumber(response.data.number.value);
    };
    getNumber();
  }, [number]);

  const incrementNumber = async () => {
    const response = await numbers.post('/number')
    setNumber(response.data.number.value)
  };

  const resetNumber = async () => {
    const response = await numbers.post("/number/reset");
    setNumber(response.data.number.value);
  };

  return (
    <div className="container">
      <h1 className="title">Morpher Test Challenge 2</h1>
      <p className="number">{`Number: ${number}`}</p>
      <div>
        <button className="increment" onClick={() => incrementNumber()}>
          Increment
        </button>
        <button className="reset" onClick={() => resetNumber()}>
          Reset Number
        </button>
      </div>
    </div>
  );
}
