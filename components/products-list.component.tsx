import { useState, useEffect } from "react";
import Product from "./product.component";
import { useRouter } from "next/router";
import { ProductType } from "../interfaces";
import Pagination from "./pagination.component";
import SortingBar from "./sorting-bar.component";
import Fuse from "fuse.js";
import Loading from "./loading.component";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  const numProductsOnPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredList, setFilteredList] = useState(productsList);
  const [sortedList, setSortedList] = useState(filteredList);
  const [dividedList, setDevidedList] = useState(sortedList);
  const [scrollTop, setScrollTop] = useState(500);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const options = {
    threshold: 0.5,
    keys: ["name"],
  };
  const fuse = new Fuse(productsList, options);
  const name = router.query.name;
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
    if (filteredList.length > 0) {
      switch (index) {
        case 0: {
          filteredList.sort(
            (product1, product2) => product2.sold - product1.sold
          );
          break;
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
    }
  };

  useEffect(() => {
    const dividedList = sortedList.slice(
      (currentPage - 1) * numProductsOnPage,
      currentPage * numProductsOnPage
    );
    setDevidedList(dividedList);
  }, [currentPage, filteredList, sortedList]);

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        const scrollTop = window.innerWidth < 1536 ? 504 : 760;
        setScrollTop(scrollTop);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col h-full w-full justify-start items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center my-10 lg:my-16">
          {name !== undefined &&
          name !== null &&
          name.length > 0 &&
          dividedList.length > 0 ? (
            <p className="flex gap-x-2 justify-self-start items-end text-slate-700 text-base md:text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
              Search results for
              <span className="text-lg md:text-2xl underline underline-offset-4 decoration-orange-theme italic">
                &quot;{name}&quot;
              </span>
              :
            </p>
          ) : (
            dividedList.length > 0 && (
              <p className="flex gap-x-2 justify-self-start items-end text-slate-700 text-lg md:text-2xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
                All products:
              </p>
            )
          )}
          {dividedList.length > 0 && (
            <div className="flex gap-x-2 justify-self-end items-center col-span-1 lg:col-span-2 2xl:col-span-3">
              <SortingBar handleChange={handleChange} />
            </div>
          )}
          {dividedList.length > 0 ? (
            dividedList.map((product: ProductType, index: number) => {
              return (
                <div key={index} className="w-80">
                  <Product
                    product={product}
                    wishlistItems={[]}
                    setLoading={setLoading}
                  />
                </div>
              );
            })
          ) : (
            <p className="flex p-5 gap-x-2 items-end text-base md:text-xl col-span-1 lg:col-span-2 2xl:col-span-3">
              Couldn&apos;t find products related to
              <span className="text-lg md:text-2xl underline underline-offset-4 decoration-orange-theme italic">
                &quot;{name}&quot;
              </span>
              .
            </p>
          )}
        </div>
        {dividedList.length > 0 && (
          <div className="flex justify-center m-5 mt-auto">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              numPages={Math.ceil(filteredList.length / numProductsOnPage)}
              scroll={scrollTop}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsList;
