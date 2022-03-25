import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
import smoothscroll from "smoothscroll-polyfill";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  let timer: any = null;
  const handleScroll = () => {
    const position = window.pageYOffset >= window.innerHeight / 8;
    setScrollPosition(position);

    clearTimeout(timer);
    timer = setTimeout(() => {
      setScrollPosition(() => false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-20 right-2 lg:bottom-10 lg:right-10 text-lg z-50 bg-slate-800 text-slate-100 bg-opacity-60 backdrop-blur-md rounded-lg hover:bg-opacity-80 transition-all ease-in-out duration-200 ${
        scrollPosition || "opacity-0"
      }`}
    >
      <button onClick={handleClick}>
        <div className="flex justify-center items-center relative w-8 h-8 text-sm md:text-base">
          <BiArrowToTop />
        </div>
      </button>
    </div>
  );
};

export default BackToTop;
