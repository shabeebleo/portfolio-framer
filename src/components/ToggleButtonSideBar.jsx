import React, { useState } from "react";

function ToggleButtonSideBar({ setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setOpen((prev) => !prev); // Toggle the state in the parent component
  };

  return (
    <button
      onClick={toggleOpen}
      className="cursor-pointer w-[50px] h-[50px] fixed top-[25px] left-[25px] bg-transparent border-none rounded-full z-10 flex items-center justify-center"
    >
      {isOpen ? (
        // Cross icon when isOpen is true
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            // d="M6 12L18 12M6 12L18 12"

            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default ToggleButtonSideBar;



