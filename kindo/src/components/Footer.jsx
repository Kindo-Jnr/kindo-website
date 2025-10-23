import { useState, useEffect } from "react";
import { Clock, Heart } from "lucide-react";
import Typewritertext from "./Typewritertext";
export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const gmt0Time = now.toUTCString().split(" ")[4]; // HH:MM:SS
      setTime(gmt0Time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="w-full py-10 sm:py-8 border-t text-center text-sm sm:text-base flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 px-6"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Left Section */}
      <div className="flex items-center justify-center gap-2">
        <Clock size={20} className="opacity-90" />
        <span className="opacity-90">GMT +0 — {time}</span>
      </div>

      {/* Center Section */}
      <p className="opacity-70 text-xs sm:text-sm">
        © {new Date().getFullYear()} <Typewritertext
                                  text=" Code by Kindo"
                                  speed={200}
                                  delay={2500}
                                />. 
      </p>

      {/* Right Section */}
      <div className="flex items-center justify-center gap-1">
        <span className="opacity-70">All rights reserved</span>
        <Heart size={14} className="text-red-500 animate-pulse" />
        <span className="opacity-70">by KindoTech</span>
      </div>
    </footer>
  );
}
