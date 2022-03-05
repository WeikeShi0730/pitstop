import { RefObject, useState } from "react";
import { CartItemType } from "../interfaces";
import { updateUserCartFirestore } from "../firebase/firebase.utils";

const useCartItemChange = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const close = (ref: any) => {
    const component = ref.current as HTMLDivElement;
    component.classList.add("opacity-0");
  };

  const handler = async (
    cartItem: CartItemType,
    action: string,
    ref: RefObject<HTMLDivElement>,
    value?: number
  ) => {
    try {
      switch (action) {
        case "ADD": {
          setLoading(true);
          await updateUserCartFirestore(cartItem.product, "ADD");
          setLoading(false);
          break;
        }
        case "REMOVE": {
          if (cartItem.count === 1) {
            close(ref);
            setLoading(true);
            setTimeout(async () => {
              await updateUserCartFirestore(cartItem.product, "REMOVE");
              setLoading(false);
            }, 500);
            break;
          }
          setLoading(true);
          await updateUserCartFirestore(cartItem.product, "REMOVE");
          setLoading(false);
          break;
        }
        case "DELETE": {
          close(ref);
          setLoading(true);
          setTimeout(async () => {
            await updateUserCartFirestore(cartItem.product, "DELETE");
            setLoading(false);
          }, 500);
          break;
        }
        case "SET": {
          setLoading(true);
          await updateUserCartFirestore(cartItem.product, "SET", value);
          setLoading(false);
          break;
        }
        default:
          break;
      }
    } catch (error: any) {
      setLoading(false);
      throw error;
    }
  };

  return [loading, handler] as const;
};

export default useCartItemChange;
