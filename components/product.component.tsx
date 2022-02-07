import { useState, useEffect } from "react";
import { ProductType, CartItemType } from "../interfaces";
import Image from "next/image";
import { imgLoader } from "./image-loader";
import { updateUserCartFirestore } from "../firebase/firebase.utils";

interface Product {
  product: ProductType;
  index: number;
}

const Product = ({ product, index }: Product) => {
  const { id, name, imageUrl, price } = product;
  // const [cartItems, setCartItems] = useState([]);

  // Dynamic styles
  const mlauto = index % 2 === 0 ? "" : "ml-auto";
  const flexrowreverse = index % 2 === 0 ? "flex-row-reverse" : "";
  const skew = index % 2 === 0 ? "-skew-x-12" : "skew-x-12";

  const handleClick = async () => {
    await updateUserCartFirestore(product);
  };

  // const handleClick = () => {
  //   cartItems.forEach((cartItem, index) => {
  //     console.log(index);
  //     console.log("ININNNNNI");
  //     // if (cartItem.product.name === name) {
  //     //   console.log("found");
  //     //   const [cartItem, ...otherCartItems] = cartItems;
  //     //   const newNumber = cartItem.number + 1;
  //     //   const newItem = {
  //     //     product: product,
  //     //     number: newNumber,
  //     //   };
  //     //   setCartItems([...otherCartItems, newItem]);
  //     //   return;
  //     // } else {
  //     //   console.log("new");
  //     //   setCartItems((cartItems) => [
  //     //     ...cartItems,
  //     //     { product: product, number: 1 },
  //     //   ]);
  //     //   return;
  //     // }
  //   });
  //   // setCart((cartItems) => [...cartItems, newCartItem]);
  // };

  // useEffect(() => {
  //   const updateUserCart = async () => {
  //     try {
  //       await updateUserCartFirestore(cartItems);
  //     } catch (error: any) {
  //       console.error(error.message);
  //     }
  //   };
  //   updateUserCart();
  // }, [cartItems]);

  return (
    <div className="flex justify-center mx-auto w-full">
      <div
        className={`relative flex m-10 w-2/3 bg-slate-200 ${flexrowreverse}`}
      >
        <div className="flex relative w-1/2 h-48 justify-center items-center m-auto p-3">
          <Image
            src={imageUrl}
            className="w-full h-full object-contain"
            loader={imgLoader}
            unoptimized
            alt={`${name} image`}
            layout="fill"
          />
        </div>
        <div
          className={`absolute left-1/2 -translate-x-1/2 bg-slate-200 w-1/12 h-full z-50 ${skew}`}
        ></div>
        <div className={`flex flex-col p-10 bg-slate-400 w-1/2`}>
          <div className={`text-3xl my-3 ${mlauto}`}>{name}</div>
          <div className={`flex items-center gap-3 mt-24 ${mlauto}`}>
            <div className="flex items-end gap-1">
              <div className="">CAD</div>
              <div className="text-2xl">{price}</div>
            </div>
            <button
              onClick={handleClick}
              className="bg-orange-theme text-slate-200 w-fit p-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

{
  /* <div className="flex relative w-48 h-48">
        <Image
          src={imageUrl}
          className="w-full h-full object-cover"
          loader={imgLoader}
          unoptimized
          alt={`${name} background image`}
          layout="fill"
        />
      </div> */
}
