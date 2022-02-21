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
        filteredList.sort(
          (product1, product2) => product1.price - product2.price
        );
        break;
      }
      case 1: {
        filteredList.sort(
          (product1, product2) => product2.price - product1.price
        );
        break;
      }
      case 2: {
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
      case 3: {
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
      <div className="flex justify-center my-10 lg:my-16 w-full">
        <SortingBar handleChange={handleChange} />
      </div>
      <div className="w-full flex justify-center my-10 lg:my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center">
          {dividedList.length > 0 ? (
            dividedList.map((product: ProductType, index: number) => {
              return (
                <div key={index}>
                  <Product product={product} index={index} />
                </div>
              );
            })
          ) : (
            <p className="flex gap-x-2 items-end text-xl col-span-1 lg:col-span-2 2xl:col-span-3">
              Didn&apos;t find anything related to
              <p className="text-2xl underline underline-offset-4 decoration-orange-theme italic">
                &quot;{name}&quot;
              </p>
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center my-10 lg:my-16 w-full">
        <PageNumber
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          numPages={Math.ceil(filteredList.length / numProductsOnPage)}
        />
      </div>
    </div>
  );
};

export default ProductsList;
