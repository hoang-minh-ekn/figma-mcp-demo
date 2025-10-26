import React from "react";
import "../../styles/header-with-bem.css";

const ARROW_ICON =
  "http://localhost:3845/assets/8769a731cb4f6590c854db1925bf5148fc332070.svg";

const navLinks = [
  { label: "Benefits", aria: "Jump to product benefits section" },
  { label: "Specifications", aria: "Jump to product specifications section" },
  { label: "How-to", aria: "Jump to product how-to section" },
  { label: "Contact Us", aria: "Jump to contact us section" },
];

const HeaderWithBEM = () => {
  return (
    <header className="header" data-name="header" data-node-id="182:1081">
      <div className="header__brand" data-node-id="182:1063">
        <span className="leading-header">Area</span>
      </div>
      <nav
        className="header__nav"
        data-name="header__navigation"
        data-node-id="182:1082"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className="header__nav-link"
            tabIndex={0}
            aria-label={link.aria}
            role="link"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div
        className="header__cta"
        data-name="header__cta"
        data-node-id="182:1119"
        tabIndex={0}
        role="button"
        aria-label="Learn more"
      >
        <span>Learn More</span>
        <span className="header__cta-icon">
          <img
            src={ARROW_ICON}
            alt="Arrow icon"
            className="block w-[7px] h-[6px]"
          />
        </span>
      </div>
    </header>
  );
};

export default HeaderWithBEM;
