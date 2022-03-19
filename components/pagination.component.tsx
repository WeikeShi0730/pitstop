import { Tab } from "@headlessui/react";
import { useEffect } from "react";

interface PageNumberType {
  setCurrentPage: (currentPage: number) => void;
  numPages: number;
  currentPage: number;
  scroll?: number;
}

const Pagination = ({
  setCurrentPage,
  numPages,
  currentPage,
  scroll,
}: PageNumberType) => {
  let pageList = [];

  for (var i = 0; i < numPages; i++) {
    pageList.push(
      <Tab key={i} className={({ selected }) => tabStyle(selected)}>
        {i + 1}
      </Tab>
    );
  }

  const tabStyle = (selected: boolean) => {
    return `font-light w-8 py-1 leading-5 text-slate-700 rounded-lg focus:outline-none ${
      selected
        ? "bg-orange-theme shadow text-slate-100"
        : "hover:bg-slate-100 text-slate-700"
    }`;
  };

  useEffect(() => {
    const prev = document.getElementsByClassName("buttonPrev")[0];
    const next = document.getElementsByClassName("buttonNext")[0];
    prev.classList.remove("text-slate-400");
    prev.classList.remove("hover:bg-transparent");
    next.classList.remove("text-slate-400");
    next.classList.remove("hover:bg-transparent");
    if (currentPage === 1) {
      prev.classList.add("text-slate-400");
      prev.classList.add("hover:bg-transparent");
    }
    if (currentPage === numPages || numPages === 0) {
      next.classList.add("text-slate-400");
      next.classList.add("hover:bg-transparent");
    }
  }, [currentPage, numPages]);

  const backToTop = () => {
    window.scroll({
      top: scroll,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Tab.Group
        defaultIndex={1}
        selectedIndex={currentPage - 1}
        onChange={(index) => {
          setCurrentPage(index + 1);
          backToTop();
        }}
      >
        <Tab.List className="flex w-fit max-w-full p-1 gap-x-1 bg-slate-300 rounded-lg shadow">
          <button
            className="buttonPrev w-8 py-1 leading-5 text-slate-700 rounded-lg hover:bg-slate-100"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
              backToTop();
            }}
          >
            &#60;
          </button>
          {pageList}
          <button
            className="buttonNext w-8 py-1 leading-5 text-slate-700 rounded-lg hover:bg-slate-100"
            disabled={currentPage === numPages || numPages === 0}
            onClick={() => {
              setCurrentPage(currentPage + 1);
              backToTop();
            }}
          >
            &#62;
          </button>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Pagination;
