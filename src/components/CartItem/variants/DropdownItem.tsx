import { FC } from "react";
import {
  Flex,
  Button,
  MenuItem,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
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
}) => {
  const amountColor = useColorModeValue("gray.700", "gray.300");

  return (
    <MenuItem justifyContent="space-between" gap={5} maxW="90vw">
      <Image w={6} src={image} />
      <Text w="full" textAlign="left" fontWeight="bold">
        {name}
      </Text>
      <Flex gap={3} align="center">
        <Button colorScheme="teal" onClick={decrement}>
          -1
        </Button>
        <Text color={amountColor} fontSize="lg" fontWeight="bold">
          {amount}
        </Text>
        <Button colorScheme="teal" onClick={increment}>
          +1
        </Button>
      </Flex>
    </MenuItem>
  );
};
