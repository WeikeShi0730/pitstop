import { useState } from "react";
import { Tab } from "@headlessui/react";
import SignOut from "./sign-out.component";

const AccountMenu = () => {
  const [currentSelection, setCurrentSelection] = useState(0);

  const tabStyle = (selected: boolean) => {
    return `font-light h-16 m-0.5 flex items-center justify-center text-slate-700 rounded-lg focus:outline-none ${
      selected ? "bg-orange-theme shadow text-slate-50" : "hover:bg-slate-50"
    }`;
  };
  const signoutStyle = (selected: boolean) => {
    return `font-light h-16 m-0.5 flex items-center justify-center text-red-500 rounded-lg focus:outline-none ${
      selected
        ? "bg-red-500 shadow text-slate-100"
        : "hover:border-red-400 hover:border-2"
    }`;
  };

  return (
    <div className="w-72">
      <Tab.Group
        defaultIndex={1}
        selectedIndex={currentSelection - 1}
        onChange={(index) => {
          setCurrentSelection(index + 1);
        }}
      >
        <Tab.List className="flex flex-col bg-slate-300 rounded-lg shadow">
          <Tab className={({ selected }) => tabStyle(selected)}>
            Order history
          </Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>
            Order history
          </Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>
            Order history
          </Tab>
          <Tab className={({ selected }) => signoutStyle(selected)}>
            <SignOut />
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default AccountMenu;
