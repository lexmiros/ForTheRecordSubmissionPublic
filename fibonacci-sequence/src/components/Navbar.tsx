import React, { useState } from "react";
import "../index.css";

interface NavbarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ setCurrentPage }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (page: string) => {
    setCurrentPage(page);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div
        className={`navbar-button-container ${isDropdownOpen ? "open" : ""}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <button className="navbar-button">Navigate Pages</button>
        <div className={`dropdown ${isDropdownOpen ? "visible" : ""}`}>
          <button onClick={() => handleItemClick("Welcome")}>
            Welcome page
          </button>
          <button onClick={() => handleItemClick("GetFibbonaciLength")}>
            Set Fibonacci Sequence Length
          </button>
          <button onClick={() => handleItemClick("GetDelay")}>Set Delay</button>
          <button onClick={() => handleItemClick("MainPage")}>MainPage</button>
          <button onClick={() => handleItemClick("Goodbye")}>Goodbye</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
