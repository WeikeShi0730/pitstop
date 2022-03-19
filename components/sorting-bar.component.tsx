import { Tab } from "@headlessui/react";

interface SortingBarType {
  handleChange: (index: number) => void;
}

const SortingBar = ({ handleChange }: SortingBarType) => {
  const tabStyle = (selected: boolean) => {
    return `font-light w-full p-1 leading-5 text-slate-700 rounded-lg focus:outline-none ${
      selected
        ? "bg-orange-theme shadow text-slate-100"
        : "hover:bg-slate-100 text-slate-700"
    }`;
  };
  return (
    <div>
      <Tab.Group onChange={(index) => handleChange(index)}>
        <Tab.List className="flex w-[21rem] p-1 gap-x-1 bg-slate-300 rounded-lg shadow">
          <Tab className={({ selected }) => tabStyle(selected)}>Popular</Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>Price ⤴</Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>Price ⤵</Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>A - Z</Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>Z - A</Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default SortingBar;
