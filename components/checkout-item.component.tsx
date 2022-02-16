import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CartItemType } from "../interfaces";
import { updateUserCartFirestore } from "../firebase/firebase.utils";

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

  const close = () => {
    const component = ref.current as HTMLDivElement;
    component.classList.add("opacity-0");
  };

  const subtotal = ((displayValue as number) * price).toFixed(2);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    try {
      switch (name) {
        case "ADD": {
          await updateUserCartFirestore(cartItem.product, "ADD");
          break;
        }
        case "REMOVE": {
          if (cartItem.count === 1) {
            close();
            setTimeout(async () => {
              await updateUserCartFirestore(cartItem.product, "REMOVE");
            }, 500);
            break;
          }
          await updateUserCartFirestore(cartItem.product, "REMOVE");
          break;
        }
        case "DELETE": {
          close();
          setTimeout(async () => {
            await updateUserCartFirestore(cartItem.product, "DELETE");
          }, 500);
          break;
        }
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, max, min } = event.currentTarget;
    const intValue = parseInt(value);
    const intMax = parseInt(max);
    const intMin = parseInt(min);
    try {
      if (isNaN(intValue) || intValue === 0) {
        setDisplayValue("");
      } else {
        let setValue = intValue <= intMax ? intValue : intMax;
        setValue = setValue >= intMin ? setValue : intMin;
        await submitCount(setValue);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleOnBlur = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, min } = event.currentTarget;
    const intMin = parseInt(min);
    const intValue = parseInt(value);
    try {
      if (isNaN(intValue)) {
        setDisplayValue(intMin);
        await submitCount(intMin);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const submitCount = async (setValue: number) => {
    try {
      await updateUserCartFirestore(
        cartItem.product,
        "SET",
        setValue as number
      );
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setDisplayValue(() => count);
  }, [count]);

  return (
    <div className="flex justify-center m-5 w-full text-black">
      <div
        ref={ref}
        className="flex w-full bg-opacity-80 backdrop-blur-sm bg-slate-400 rounded-lg transition-all duration-500 ease-in-out"
      >
        <div className="image flex flex-col relative w-1/3 h-48">
          <div className="relative w-full h-full bg-[#F8F8F8] rounded-l-lg">
            <Image
              src={imageUrl}
              className="object-contain"
              unoptimized
              alt={`${name} image`}
              layout="fill"
            />
          </div>
        </div>
        <div className="text flex flex-col justify-evenly mx-4 px-2 w-2/3">
          <div className="title flex justify-start">
            <div className="name text-2xl">{name}</div>
          </div>
          <div className="details flex items-center justify-between">
            <div className="unt flex items-end">
              <div className="">Unit price: CAD</div>
              <div className="text-xl">{price}</div>
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
            </div>
            <div className="delete text-2xl">
              <button onClick={handleClick} name="DELETE">
                🅧
              </button>
            </div>
          </div>
          <div className="subtotal flex w-full justify-end items-end space-x-2">
            <div className="">Subtotal: CAD</div>
            <div className="text-2xl">{subtotal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
