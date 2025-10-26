import "../../styles/bad-header.css";

const ArrowIcon = () => (
  <svg
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="block max-w-none size-full"
  >
    <path
      d="M0.5 5.5L5.5 0.5M5.5 0.5V5.5M5.5 0.5H0.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const navLinks = [
  { label: "Benefits", aria: "Jump to product benefits section" },
  { label: "Specifications", aria: "Jump to product specifications section" },
  { label: "How-to", aria: "Jump to product how-to section" },
  { label: "Contact Us", aria: "Jump to contact us section" },
];

const BadHeader = () => {
  return (
    <header className="relative w-full h-[56px] flex items-center bg-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-center">
        <span className="font-medium text-[30px] leading-[1.2] tracking-[-1.5px] text-black font-link select-none">
          Area
        </span>
      </div>
      <nav
        className="absolute left-[328px] top-1/2 -translate-y-1/2 flex gap-[60px]"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            tabIndex={0}
            aria-label={link.aria}
            className="font-bold text-[14px] leading-[1.4] tracking-[-0.35px] text-black font-link focus-visible:outline-2 focus-visible:outline-accent-1 px-2 py-1 rounded-sm transition-colors hover:text-accent-1"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#"
        tabIndex={0}
        aria-label="Learn more"
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-[22px] py-[14px] rounded-full bg-accent-1 text-white font-bold text-[14px] leading-[1.4] tracking-[-0.35px] font-link focus-visible:outline-2 focus-visible:outline-accent-1 transition-colors hover:bg-accent-4"
      >
        <span>Learn More</span>
        <span className="ml-1 w-[7px] h-[6px] flex items-center">
          <ArrowIcon />
        </span>
      </a>
    </header>
  );
};

export default BadHeader;
