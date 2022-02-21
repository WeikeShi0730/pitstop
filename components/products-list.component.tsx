import { useState, useEffect } from "react";
import Product from "./product.component";
import { Tab } from "@headlessui/react";
import { ProductType } from "../interfaces";
import PageNumber from "../components/page-number.component";
import SortingBar from "./sorting-bar.component";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  const numProductsOnPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedList, setSortedList] = useState(productsList);
  const [dividedList, setDevidedList] = useState(productsList);
  
  useEffect(() => {
    const newer = sortedList.slice(
      (currentPage - 1) * numProductsOnPage,
      currentPage * numProductsOnPage
    );
    setDevidedList(newer);
  }, [currentPage, sortedList]);


  return (
    <div>
      <div className="flex justify-center mt-16 w-full">
        <SortingBar productsList={productsList} setSortedList={setSortedList}/>
      </div>
      <div className="w-full flex justify-center my-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center">
          {dividedList.map((product: ProductType, index: number) => {
            return (
              <div key={index}>
                <Product product={product} index={index} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center my-16 w-full">
        <PageNumber
          productsList={productsList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          numProductsOnPage={numProductsOnPage}
        />
      </div>
    </div>
  );
};

export default ProductsList;
