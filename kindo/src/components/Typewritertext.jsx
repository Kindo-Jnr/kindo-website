import { useState, useEffect } from "react";

function Typewritertext({ text, speed = 120, delay = 400 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed / 2);
    } else if (index === text.length) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, delay]);

  return (
      <span className="text-white font-mono text-lg whitespace-nowrap animate-pulse">
      {displayedText}
      <span className="animate-blink">_</span>
    </span>
  );
}

export default Typewritertext;
