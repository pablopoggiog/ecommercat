import { FC } from "react";
import { Flex, Button, VStack, Text, Image, Divider } from "@chakra-ui/react";
import { Product } from "@/types";
import { DeleteIcon } from "@chakra-ui/icons";

interface CartItemProps {
  product: Product;
  amount: number;
  decrement: () => void;
  increment: () => void;
  remove: () => void;
}

export const RegularItem: FC<CartItemProps> = ({
  product: { name, id, image, type, price },
  amount,
  decrement,
  increment,
  remove,
}) => (
  <>
    <VStack key={id} w="full" gap={5} p={3}>
      <Flex w="full" gap={3} align="center">
        <Image w={6} src={image} alt={`${name} thumbnail`} />
        <Text
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          maxW={["150px", "200px", "200px", "350px"]}
          fontWeight="extrabold"
        >
          {name}
        </Text>
        <Text fontSize="sm" fontWeight="thin">
          {type}
        </Text>
        <Text color="gray.700" ml="auto" fontWeight="semibold">
          ${price}
        </Text>
      </Flex>
      <Flex
        w="full"
        align="center"
        justify="space-between"
        color="whiteAlpha.900"
      >
        <Flex gap={3} align="center">
          <Button colorScheme="teal" onClick={remove}>
            <DeleteIcon />
          </Button>
        </Flex>
        <Flex gap={3} align="center">
          <Button colorScheme="teal" onClick={decrement}>
            -1
          </Button>
          <Text fontSize="lg" fontWeight="bold">
            {amount}
          </Text>
          <Button colorScheme="teal" onClick={increment}>
            +1
          </Button>
        </Flex>
      </Flex>
    </VStack>

    <Divider />
  </>
);
