import Image from "next/image";
import { CartItemType } from "../interfaces";
import { updateUserCartFirestore } from "../firebase/firebase.utils";

interface CartItem {
  cartItem: CartItemType;
}
const CartDropdownItems = ({ cartItem }: CartItem) => {
  const {
    count,
    product: { imageUrl, name, price },
  } = cartItem as CartItemType;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    switch (name) {
      case "ADD": {
        updateUserCartFirestore(cartItem.product, "ADD");
        break;
      }
      case "REMOVE": {
        updateUserCartFirestore(cartItem.product, "REMOVE");
        break;
      }
      case "DELETE": {
        updateUserCartFirestore(cartItem.product, "DELETE");
        break;
      }
    }
  };

  return (
    <div className="flex items-center m-2 text-black">
      <div className="image flex flex-col relative w-1/3 h-20">
        <div className="relative w-11/12 h-full bg-[#F8F8F8] rounded-lg">
          <Image
            src={imageUrl}
            className="object-contain"
            unoptimized
            alt={`${name} image`}
            layout="fill"
          />
        </div>
      </div>
      <div className="text ml-2 w-2/3">
        <div className="name">{name}</div>
        <div className="qty flex">
          <div className="">Qty:</div>
          <div className="mx-2">
            <button onClick={handleClick} name="REMOVE">
              ⊖
            </button>
          </div>
          <div className="px-1 w-6 flex justify-center">{count}</div>
          <div className="mx-2">
            <button onClick={handleClick} name="ADD">
              ⊕
            </button>
          </div>
        </div>
        <div className="Unt">Price: {price}</div>
      </div>
      <div className="cancel flex right-4 absolute">
        <button onClick={handleClick} name="DELETE">
          🅧
        </button>
      </div>
    </div>
  );
};

export default CartDropdownItems;
