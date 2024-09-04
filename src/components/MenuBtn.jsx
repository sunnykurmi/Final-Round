import React, { useState } from "react";


export const MenuBtn = ({ toggleMenu }) => {
  const [state, setState] = useState("hamburger");

  const handleClick = () => {
    const newState = state === "hamburger" ? "x" : "hamburger";
    setState(newState);
    toggleMenu(); // Call the parent toggleMenu function
  };

  return (
    <button
      id="menu-btn"
      data-state={state}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
