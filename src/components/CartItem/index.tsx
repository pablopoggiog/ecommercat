import { FC } from "react";
import { Flex, Button, MenuItem, Text } from "@chakra-ui/react";

import { useAppDispatch } from "hooks/reduxHooks";
import {
  incrementProductAmount,
  decrementProductAmount,
} from "state/slices/cart/slice";

interface CartItemProps {
  name: string;
  id: string;
  amount: number;
}

export const CartItem: FC<CartItemProps> = ({ name, id, amount }) => {
  const dispatch = useAppDispatch();

  const increment = () => dispatch(incrementProductAmount(id));
  const decrement = () => dispatch(decrementProductAmount(id));

  return (
    <MenuItem justifyContent="space-between" gap={5}>
      <Text fontWeight="bold">{name}</Text>
      <Flex gap={3} align="center">
        <Button onClick={decrement}>-1</Button>
        <Text fontSize="lg" fontWeight="bold">
          {amount}
        </Text>
        <Button onClick={increment}>+1</Button>
      </Flex>
    </MenuItem>
  );
};
