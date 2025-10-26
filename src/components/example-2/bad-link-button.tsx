import React from "react";
import "../../styles/bad-link-button.css";

// Figma asset URLs
const arrowDefault =
  "http://localhost:3845/assets/7902fe4950c3e1d8a078752ca4f060564757f930.svg";
const arrowHover =
  "http://localhost:3845/assets/5597ae04caf6b5557e1f010f38aae84c68bf0722.svg";

const BadLinkButton: React.FC = () => {
  return (
    <div className="flex gap-4">
      {/* Default state */}
      <a
        href="#"
        tabIndex={0}
        aria-label="Learn More"
        className="relative flex items-center justify-center w-[127px] h-[48px] rounded-pill bg-accent-1 group outline-hidden focus-visible:ring-2 focus-visible:ring-accent-3 transition-colors duration-200"
      >
        <span className="font-link font-bold text-[14px] leading-link tracking-[-0.35px] text-on-accent-1 text-center whitespace-nowrap ml-[10px]">
          Learn More
        </span>
        <img
          src={arrowDefault}
          alt=""
          className="block w-[7px] h-[20px] ml-auto mr-[14px]"
        />
      </a>
      {/* Hover state (for demo only, not interactive) */}
      <a
        href="#"
        tabIndex={0}
        aria-label="Learn More (hover)"
        className="relative flex items-center justify-center w-[127px] h-[48px] rounded-pill bg-accent-3 group outline-hidden focus-visible:ring-2 focus-visible:ring-accent-3 transition-colors duration-200"
      >
        <span className="font-link font-bold text-[14px] leading-link tracking-[-0.35px] text-on-accent-1 text-center whitespace-nowrap ml-[10px]">
          Learn More
        </span>
        <img
          src={arrowHover}
          alt=""
          className="block w-[7px] h-[20px] ml-auto mr-[14px]"
        />
      </a>
    </div>
  );
};

export default BadLinkButton;
