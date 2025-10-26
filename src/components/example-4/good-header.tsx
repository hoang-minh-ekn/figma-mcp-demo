import "../../styles/good-header.css";
import GoodLinkButton from "../example-2/good-link-button";

const navLinks = [
  { label: "Benefits", aria: "Jump to product benefits section" },
  { label: "Specifications", aria: "Jump to product specifications section" },
  { label: "How-to", aria: "Jump to product how-to section" },
  { label: "Contact Us", aria: "Jump to contact us section" },
];

const GoodHeader = () => {
  return (
    <header
      className="w-full flex items-center justify-between h-[56px] px-6 bg-white"
      role="banner"
    >
      <div className="flex flex-col justify-center select-none">
        <span className="font-medium text-[30px] leading-[1.2] tracking-[-1.5px] text-black font-link">
          Area
        </span>
      </div>
      <nav className="flex gap-[27px]" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            tabIndex={0}
            aria-label={link.aria}
            className="font-bold text-[14px] leading-[1.4] tracking-[-0.35px] text-black font-link px-2 py-1 rounded-sm focus-visible:outline-2 focus-visible:outline-accent-1 transition-colors hover:text-accent-1"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                (e.target as HTMLElement).click();
              }
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="ml-6">
        <GoodLinkButton />
      </div>
    </header>
  );
};

export default GoodHeader;
