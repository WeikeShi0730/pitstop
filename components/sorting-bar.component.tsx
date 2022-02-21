import { Tab } from "@headlessui/react";
import { ProductType } from "../interfaces";

interface SortingBarType {
  productsList: ProductType[];
  setSortedList: (sortedList: ProductType[]) => void;
}

const SortingBar = ({ productsList, setSortedList }: SortingBarType) => {
  const handleChange = (index: number) => {
    switch (index) {
      case 0: {
        productsList.sort(
          (product1, product2) => product1.price - product2.price
        );
        break;
      }
      case 1: {
        productsList.sort(
          (product1, product2) => product2.price - product1.price
        );
        break;
      }
      case 2: {
        productsList.sort((product1, product2) => {
          var nameProduct1 = product1.name.toUpperCase();
          var nameProduct2 = product2.name.toUpperCase();
          if (nameProduct1 < nameProduct2) {
            return -1;
          }
          if (nameProduct1 > nameProduct2) {
            return 1;
          }
          return 0;
        });
        break;
      }
      case 3: {
        productsList.sort((product1, product2) => {
          var nameProduct1 = product1.name.toUpperCase();
          var nameProduct2 = product2.name.toUpperCase();
          if (nameProduct1 > nameProduct2) {
            return -1;
          }
          if (nameProduct1 < nameProduct2) {
            return 1;
          }
          return 0;
        });
        break;
      }
      default:
        break;
    }
    const productsListCopy = productsList.map((product) => product);
    setSortedList(productsListCopy);
  };
  const tabStyle = (selected: boolean) => {
    return `w-full py-1 leading-5 text-slate-700 rounded-lg focus:outline-none ${
      selected
        ? "bg-orange-theme shadow text-slate-50"
        : "hover:bg-slate-50 text-slate-700"
    }`;
  };
  return (
    <div>
      <Tab.Group onChange={(index) => handleChange(index)}>
        <Tab.List className="flex w-72 p-1 gap-x-1 bg-slate-300 rounded-lg shadow">
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
