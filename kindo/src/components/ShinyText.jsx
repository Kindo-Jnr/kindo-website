import React from "react";

const ShinyText = ({
  children,
  disabled = false,
  speed = 3,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`relative inline-block bg-clip-text text-transparent select-none ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 65%)",
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        animationDuration,
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
