import { OrderHistoryItemType } from "../interfaces/index";
import { Disclosure, Transition } from "@headlessui/react";
import { RiArrowUpSLine } from "react-icons/ri";
import Image from "next/image";
import { imgLoader } from "../utils/image-loader";

interface OrderHistoryItem {
  orderHistoryItem: OrderHistoryItemType;
}

const OrderHistoryDisclosure = ({ orderHistoryItem }: OrderHistoryItem) => {
  const { timeStamp, items } = orderHistoryItem;
  const total = items
    .reduce((acc: number, current) => {
      return acc + current.count * current.product.price;
    }, 0)
    .toFixed(2);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="font-light flex justify-between items-center w-full px-4 py-2 text-left text-slate-700 bg-slate-400 rounded-lg bg-opacity-50 backdrop-blur-sm hover:bg-slate-400">
            <span>{timeStamp}</span>
            <RiArrowUpSLine
              className={`${open ? "transform rotate-180" : ""} w-5 h-5`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition-all ease-in-out duration-200"
            enterFrom="transform opacity-0 scale-90"
            enterTo="transform opacity-100 scale-100"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-90"
          >
            {/* {open && ( */}
            <Disclosure.Panel
              static
              className="w-full flex flex-col items-center justify-center my-2"
            >
              {items.map((item, index) => {
                const {
                  count,
                  product: { name, imageUrl, price },
                } = item;
                const subtotal = (count * price).toFixed(2);
                return (
                  <div
                    key={index}
                    className="flex justify-center w-full my-2 text-slate-700"
                  >
                    <div className="flex w-full bg-opacity-30 bg-slate-100 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-slate-500">
                      <div className="image flex flex-col relative w-1/3 h-28">
                        <div className="relative h-full bg-[#F8F8F8] rounded-l-lg">
                          <Image
                            src={imageUrl}
                            className="object-contain"
                            unoptimized
                            loader={imgLoader}
                            alt={`${name} image`}
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div className="text flex flex-col justify-evenly mx-2 w-2/3">
                        <div className="title flex justify-start">
                          <div className="name text-lg">{name}</div>
                        </div>
                        <div className="details flex items-center justify-between text-slate-500">
                          <div className="unt flex items-center justify-start">
                            <div>CAD</div>
                            <div className="text-lg ml-1">{price}</div>
                            <div className="">/ea</div>
                          </div>
                          <div className="qty flex items-center">
                            <div className="">Qty: {count}</div>
                          </div>
                        </div>
                        <div className="subtotal flex w-full justify-end items-end space-x-2 text-slate-600">
                          <div className="">Subtotal: CAD</div>
                          <div className="text-lg">{subtotal}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex w-full justify-end items-end m-2 text-xl">
                Total: {total}
              </div>
            </Disclosure.Panel>
            {/* )} */}
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default OrderHistoryDisclosure;
