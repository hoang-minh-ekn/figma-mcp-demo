import React from "react";
import "../../styles/bad-button.css";

const BadButton = () => {
  return (
    <button
      className="relative flex items-center justify-center w-[117px] h-[48px] rounded-[1000px] bg-[--color-badbutton-default] transition-colors duration-200 focus:outline-hidden"
      tabIndex={0}
      aria-label="Learn More"
      type="button"
    >
      <span className="font-bold text-[14px] leading-[1.4] tracking-[-0.35px] text-black font-[var(--font-badbutton)]">
        Learn More
      </span>
      <style>{`
        button:hover {
          background-color: var(--color-badbutton-hover);
        }
        button:hover span {
          color: #fff;
        }
      `}</style>
    </button>
  );
};

export default BadButton;
