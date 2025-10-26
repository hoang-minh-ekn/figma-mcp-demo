import React from "react";
import "../../styles/good-button.css";

type GoodButtonProps = {
  label?: string;
  className?: string;
};

const GoodButton: React.FC<GoodButtonProps> = ({
  label = "Learn More",
  className,
}) => {
  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={label}
      className={[
        "flex items-center justify-center gap-2 px-[22px] py-[14px]",
        "rounded-pill-sm bg-accent-2 text-link font-link font-bold text-link text-[14px] leading-link tracking-[-0.35px]",
        "transition-colors duration-200",
        "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-3",
        "hover:bg-accent-3 hover:text-on-accent-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </button>
  );
};

export default GoodButton;
