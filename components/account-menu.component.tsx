import { Tab } from "@headlessui/react";
import SignOut from "./sign-out.component";

interface AccountMenuType {
  currentSelection: number;
  setCurrentSelection: (value: number) => void;
  numWishlistItems: number;
}

const AccountMenu = ({
  currentSelection,
  setCurrentSelection,
  numWishlistItems,
}: AccountMenuType) => {
  const tabStyle = (selected: boolean) => {
    return `font-light h-14 m-1 flex items-center justify-start text-left px-2 text-slate-700 rounded-lg focus:outline-none border-2 border-transparent transition-all ease-in-out duration-200 ${
      selected ? "bg-orange-theme shadow text-slate-100" : "hover:bg-slate-100"
    }`;
  };
  const signoutStyle = (selected: boolean) => {
    return `font-light h-14 m-1 flex items-center justify-start text-left px-2 text-red-500 rounded-lg focus:outline-none border-2 border-transparent transition-all ease-in-out duration-200 ${
      selected ? "bg-red-500 shadow text-slate-50" : "hover:border-red-400"
    }`;
  };

  return (
    <div className="flex items-start justify-center h-full md:min-h-content text-sm md:text-base">
      <div className="mx-5 my-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg sticky top-32">
        <Tab.Group
          defaultIndex={1}
          selectedIndex={currentSelection - 1}
          onChange={(index) => {
            setCurrentSelection(index + 1);
          }}
        >
          <Tab.List className="flex flex-col bg-slate-300 rounded-lg shadow">
            <Tab className={({ selected }) => tabStyle(selected)}>Overview</Tab>
            <Tab className={({ selected }) => tabStyle(selected)}>
              Wishlist (
              <span className="underline underline-offset-1">
                {numWishlistItems}
              </span>
              )
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
    </div>
  );
};

export default AccountMenu;
