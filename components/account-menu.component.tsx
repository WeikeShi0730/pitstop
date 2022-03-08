import { Tab } from "@headlessui/react";
import SignOut from "./sign-out.component";

const AccountMenu = ({ currentSelection, setCurrentSelection }: any) => {
  const tabStyle = (selected: boolean) => {
    return `font-light h-14 m-1 flex items-center justify-start px-5 text-slate-700 rounded-lg focus:outline-none border-2 border-transparent ${
      selected ? "bg-orange-theme shadow text-slate-50" : "hover:bg-slate-50"
    }`;
  };
  const signoutStyle = (selected: boolean) => {
    return `font-light h-14 m-1 flex items-center justify-start px-5 text-red-500 rounded-lg focus:outline-none border-2 border-transparent ${
      selected ? "bg-red-500 shadow text-slate-100" : "hover:border-red-400"
    }`;
  };

  return (
    <div className="w-72 m-5">
      <Tab.Group
        defaultIndex={1}
        selectedIndex={currentSelection - 1}
        onChange={(index) => {
          setCurrentSelection(index + 1);
        }}
      >
        <Tab.List className="flex flex-col bg-slate-300 rounded-lg shadow">
          <Tab className={({ selected }) => tabStyle(selected)}>
            Account overview
          </Tab>
          <Tab className={({ selected }) => tabStyle(selected)}>Wishlist</Tab>
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
