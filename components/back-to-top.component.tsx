import { useState, useEffect } from "react";
import Image from "next/image";
import { BiArrowToTop } from "react-icons/bi";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset >= window.innerHeight / 8;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 text-4xl bg-slate-300 bg-opacity-80 backdrop-blur-md rounded-lg">
      <button onClick={handleClick}>
        <div
          className={`flex justify-center items-center relative w-10 h-10  ${
            scrollPosition ? "" : "hidden"
          }`}
        >
          <BiArrowToTop />
        </div>
      </button>
    </div>
  );
};

export default BackToTop;
