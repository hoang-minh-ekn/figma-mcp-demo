import "../../styles/good-link-button.css";
import React from "react";

const ARROW_SVG = (
  <svg
    className="link-button__icon"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GoodLinkButton: React.FC = () => (
  <a
    href="#"
    className="link-button"
    tabIndex={0}
    aria-label="Learn More"
    role="button"
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        (e.target as HTMLElement).click();
      }
    }}
  >
    <span className="sr-only">Learn More</span>
    <span aria-hidden="true">Learn More</span>
    {ARROW_SVG}
  </a>
);

export default GoodLinkButton;
