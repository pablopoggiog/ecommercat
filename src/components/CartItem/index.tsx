import { FC } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import {
  incrementProductAmount,
  decrementProductAmount,
  removeProduct,
} from "state/slices/cart/slice";
import { DropdownItem, RegularItem } from "./variants";
import { Product } from "@/types";

interface CartItemProps {
  product: Product;
  isDropdownItem?: boolean;
  amount: number;
}

export const CartItem: FC<CartItemProps> = ({
  product,
  isDropdownItem,
  amount,
}) => {
  const dispatch = useAppDispatch();

  const increment = () => dispatch(incrementProductAmount(product.id));
  const decrement = () => dispatch(decrementProductAmount(product.id));
  const remove = () => dispatch(removeProduct(product.id));

  return isDropdownItem ? (
    <DropdownItem
      product={product}
      amount={amount}
      decrement={decrement}
      increment={increment}
    />
  ) : (
    <RegularItem
      product={product}
      amount={amount}
      decrement={decrement}
      increment={increment}
      remove={remove}
    />
  );
};
