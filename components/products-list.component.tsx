import { useState, useEffect } from "react";
import Product from "./product.component";
import { useRouter } from "next/router";
import { ProductType } from "../interfaces";
import PageNumber from "../components/page-number.component";
import SortingBar from "./sorting-bar.component";
import Fuse from "fuse.js";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  const numProductsOnPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredList, setFilteredList] = useState(productsList);
  const [sortedList, setSortedList] = useState(filteredList);
  const [dividedList, setDevidedList] = useState(sortedList);
  const router = useRouter();

  const options = {
    threshold: 0.5,
    keys: ["name"],
  };
  const fuse = new Fuse(productsList, options);
  const { name } = router.query;
  useEffect(() => {
    const filteredList =
      name !== undefined && name !== null && name.length > 0
        ? fuse.search(name as string).map((each) => each.item)
        : productsList;
    setFilteredList(filteredList);
    setSortedList(filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, productsList]);

  const handleChange = (index: number) => {
    switch (index) {
      case 0: {
        return productsList;
      }
      case 1: {
        filteredList.sort(
          (product1, product2) => product1.price - product2.price
        );
        break;
      }
      case 2: {
        filteredList.sort(
          (product1, product2) => product2.price - product1.price
        );
        break;
      }
      case 3: {
        filteredList.sort((product1, product2) => {
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
      case 4: {
        filteredList.sort((product1, product2) => {
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
    const sortedList = filteredList.map((product) => product);
    setSortedList(sortedList);
  };

  useEffect(() => {
    const dividedList = sortedList.slice(
      (currentPage - 1) * numProductsOnPage,
      currentPage * numProductsOnPage
    );
    setDevidedList(() => dividedList);
  }, [currentPage, filteredList, sortedList]);

  return (
    <div>
      <div className="w-full flex justify-center my-10 lg:my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center">
          {name !== undefined &&
          name !== null &&
          name.length > 0 &&
          dividedList.length > 0 ? (
            <p className="flex mx-5 gap-x-2 justify-self-start items-end text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
              Search results for
              <p className="text-2xl underline underline-offset-4 decoration-orange-theme italic">
                &quot;{name}&quot;
              </p>
              :
            </p>
          ) : dividedList.length > 0 ? (
            <p className="flex mx-5 gap-x-2 justify-self-start items-end text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
              All products:
            </p>
          ) : null}
          {dividedList.length > 0 ? (
            <div className="flex mx-5 gap-x-2 justify-self-end items-center col-span-1 lg:col-span-2 2xl:col-span-3">
              <SortingBar handleChange={handleChange} />
            </div>
          ) : null}
          {dividedList.length > 0 ? (
            dividedList.map((product: ProductType, index: number) => {
              return (
                <div key={index}>
                  <Product product={product} index={index} />
                </div>
              );
            })
          ) : (
            <p className="flex p-5 gap-x-2 items-end text-xl col-span-1 lg:col-span-2 2xl:col-span-3">
              Couldn&apos;t find products related to
              <p className="text-2xl underline underline-offset-4 decoration-orange-theme italic">
                &quot;{name}&quot;
              </p>
              .
            </p>
          )}
          {dividedList.length > 0 ? (
            <div className="flex m-5 gap-x-2 justify-self-center items-center col-span-1 lg:col-span-2 2xl:col-span-3">
              <PageNumber
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                numPages={Math.ceil(filteredList.length / numProductsOnPage)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
