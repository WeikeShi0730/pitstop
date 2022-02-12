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

  const subtotal = (count * price).toFixed(2);

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
          await updateUserCartFirestore(cartItem.product, "REMOVE");
          break;
        }
        case "DELETE": {
          await updateUserCartFirestore(cartItem.product, "DELETE");
          break;
        }
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
    // event.preventDefault();
    const { value, max } = event.currentTarget;
    // should have 0 count
    let intValue = parseInt(value) <= parseInt(max) ? value : max;
    try {
      await updateUserCartFirestore(
        cartItem.product,
        "SET",
        parseInt(intValue)
      );
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex justify-center m-2 text-black  h-full">
      <div className="flex w-2/3 h-full bg-opacity-80 backdrop-blur-sm bg-slate-400 rounded-lg">
        <div className="image flex flex-col relative w-1/3 h-48">
          <div className="relative w-full h-full bg-[#F8F8F8] rounded-lg">
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
              <div className="px-1 flex justify-center text-xl">
                {/* {count} */}
                <form>
                  <input
                    className="w-12 bg-transparent text-center underline underline-offset-2 decoration-1"
                    type="number"
                    value={count}
                    onChange={handleChange}
                    max={999}
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