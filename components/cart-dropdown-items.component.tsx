import Image from "next/image";
import { CartItemType } from "../interfaces";

interface CartItem {
  cartItem: CartItemType | undefined;
}
const CartDropdownItems = ({ cartItem }: CartItem) => {
  const {
    count,
    product: { imageUrl, name, price },
  } = cartItem as CartItemType;

  return (
    <div className="flex items-center m-2 text-black">
      <div className="image flex flex-col relative w-20 h-20">
        <Image
          src={imageUrl}
          className="w-full h-full object-contain rounded-lg"
          unoptimized
          alt={`${name} image`}
          layout="fill"
        />
      </div>
      {/* !!!!!!!!!!!!!!!!!!!!text occupy image space.............. */}
      <div className="text ml-2">
        <div className="name">{name}</div>
        <div className="qty flex">
          <div className="">Qty:</div>
          <div className="mx-2">⊖</div>
          <div className="">{count}</div>
          <div className="mx-2">⊕</div>
        </div>
        <div className="Unt">Price: {price}</div>
      </div>
      <div className="cancel flex right-2 absolute">🅧</div>
    </div>
  );
};

export default CartDropdownItems;
