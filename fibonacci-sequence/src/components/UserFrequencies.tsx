import React from "react";
import "../index.css";
import { sortUserFrequencies } from "../utils/userFrequenciesUtils";
import { isInFibonacciSequence } from "../utils/fibonacciSequenceUitls";
import { formatNumberToScientificNotation } from "../utils/inputCleaningUtils";

interface UserFrequenciesProps {
  userInputFrequencies: Map<bigint, number>;
  fibonacciSequence: Array<bigint>;
}

const UserFrequencies = ({
  userInputFrequencies,
  fibonacciSequence,
}: UserFrequenciesProps) => {
  const sortedEntries = sortUserFrequencies(userInputFrequencies);

  const containerStyle: React.CSSProperties = {
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxHeight: "400px", // Set a specific height for the container
    overflowY: "auto", // Enable vertical scrolling
  };

  const listStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: "0",
  };

  const headerStyle: React.CSSProperties = {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const itemStyle: React.CSSProperties = {
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <h2>User Input Frequencies</h2>
      <ul style={listStyle}>
        <li style={headerStyle}>
          <span style={{ flex: 1, textAlign: "center" }}>Number</span>
          <span style={{ flex: 1, textAlign: "center" }}>Frequency</span>
          <span style={{ flex: 1, textAlign: "center" }}>
            In Fibonacci Sequence
          </span>
        </li>
        {sortedEntries.map(([number, frequency]) => (
          <li key={number.toString()} style={itemStyle}>
            <span style={{ flex: 1, textAlign: "center" }}>
              {formatNumberToScientificNotation(number)}
            </span>
            <span style={{ flex: 1, textAlign: "center" }}>{frequency}</span>
            <span style={{ flex: 1, textAlign: "center" }}>
              {isInFibonacciSequence(fibonacciSequence, number) ? "Yes" : "No"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFrequencies;
