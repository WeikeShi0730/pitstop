import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CartItemType } from "../interfaces";
import useCartItemChange from "../utils/use-cart-item-action";
import Loading from "./loading.component";

interface CartItem {
  cartItem: CartItemType;
}

const CheckoutItem = ({ cartItem }: CartItem) => {
  const {
    count,
    product: { imageUrl, name, price },
  } = cartItem as CartItemType;

  const [displayValue, setDisplayValue] = useState<number | string>(count);
  const ref = useRef<HTMLDivElement>(null);
  const [loading, handler] = useCartItemChange();

  const subtotal = ((displayValue as number) * price).toFixed(2);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    try {
      handler(cartItem, name, ref);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value, max, min } = event.currentTarget;
    const intValue = parseInt(value);
    const intMax = parseInt(max);
    const intMin = parseInt(min);
    if (isNaN(intValue) || intValue === 0) {
      setDisplayValue("");
    } else {
      let setValue = intValue <= intMax ? intValue : intMax;
      setValue = setValue >= intMin ? setValue : intMin;
      handler(cartItem, name, ref, setValue);
    }
  };

  const handleOnBlur = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value, min } = event.currentTarget;
    const intMin = parseInt(min);
    const intValue = parseInt(value);
    if (isNaN(intValue)) {
      setDisplayValue(intMin);
      handler(cartItem, name, ref, intMin);
    }
  };

  useEffect(() => {
    setDisplayValue(() => count);
    return () => setDisplayValue("");
  }, [count]);

  return (
    <>
      {loading && <Loading />}
      <div className="flex justify-center w-full sm:w-2/3 mx-5 text-slate-700">
        <div
          ref={ref}
          className="flex w-full bg-opacity-30 bg-slate-100 rounded-lg transition-all duration-500 ease-in-out shadow-md hover:shadow-slate-500"
        >
          <div className="image flex flex-col relative w-1/3 h-48">
            <div className="relative w-full h-full bg-[#F8F8F8] rounded-l-lg">
              <Image
                src={imageUrl}
                className="object-contain rounded-l-lg"
                unoptimized
                alt={`${name} image`}
                layout="fill"
              />
            </div>
          </div>
          <div className="text flex flex-col justify-evenly mx-4 w-2/3">
            <div className="title flex justify-start">
              <div className="name text-2xl">{name}</div>
            </div>
            <div className="details flex flex-col md:flex-row items-center justify-between">
              <div className="unt flex items-end justify-start">
                <div>CAD</div>
                <div className="text-xl ml-1">{price}</div>
                <div className="">/ea</div>
              </div>
              <div className="qty flex items-center">
                <div className="">Qty:</div>
                <div className="mx-3 text-xl">
                  <button onClick={handleClick} name="REMOVE">
                    ⊖
                  </button>
                </div>
                <div className="flex justify-center text-xl">
                  <form>
                    <input
                      className="w-10 bg-transparent text-center underline underline-offset-2 decoration-1 outline-none"
                      type="number"
                      name="SET"
                      value={displayValue}
                      onChange={handleChange}
                      onBlur={handleOnBlur}
                      max="999"
                      min="1"
                    />
                  </form>
                </div>
                <div className="mx-3 text-xl">
                  <button onClick={handleClick} name="ADD">
                    ⊕
                  </button>
                </div>
                <div className="delete text-2xl">
                  <button onClick={handleClick} name="DELETE">
                    🅧
                  </button>
                </div>
              </div>
            </div>
            <div className="subtotal flex w-full justify-end items-end space-x-2">
              <div className="">Subtotal: CAD</div>
              <div className="text-2xl">{subtotal}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
