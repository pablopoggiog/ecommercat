import { FC } from "react";
import { Flex, Button, MenuItem, Text, Image } from "@chakra-ui/react";
import { Product } from "@/types";

interface CartItemProps {
  product: Product;
  amount: number;
  decrement: () => void;
  increment: () => void;
}

export const DropdownItem: FC<CartItemProps> = ({
  product: { name, id, image },
  amount,
  decrement,
  increment,
}) => (
  <MenuItem justifyContent="space-between" gap={5}>
    <Image w={6} src={image} />
    <Text w="full" textAlign="left" fontWeight="bold">
      {name}
    </Text>
    <Flex gap={3} align="center">
      <Button onClick={decrement}>-1</Button>
      <Text fontSize="lg" fontWeight="bold">
        {amount}
      </Text>
      <Button onClick={increment}>+1</Button>
    </Flex>
  </MenuItem>
);
