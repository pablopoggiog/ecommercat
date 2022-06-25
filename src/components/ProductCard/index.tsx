import { FC } from "react";
import { VStack, Text, GridItem, Button, Image, Flex } from "@chakra-ui/react";
import { useAppDispatch } from "hooks/reduxHooks";
import { addProduct } from "state/slices/cart/slice";
import CartIcon from "assets/cart-icon.png";
import { Product } from "types";

export const ProductCard: FC<Product> = ({ name, type, price, image }) => {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addProduct({ name, type, price, image }));
  };

  return (
    <GridItem borderRadius="md" p={5} w="full" h="250" bg="gray.500">
      <VStack h="full" justify="space-around">
        <Image src={image} h={150} />
        <Flex>
          <Text fontWeight="semibold">{name}</Text>&nbsp;·&nbsp;
          <Text fontSize="sm" m={0} color="gray.400" fontWeight="semibold">
            {type}
          </Text>
        </Flex>
        <Flex justify="space-between" w="full">
          <Text fontSize="xx-large" fontWeight="semibold">
            ${price}
          </Text>
          <Button onClick={addToCart} size="lg">
            <Image h="50%" src={CartIcon} />
          </Button>
        </Flex>
      </VStack>
    </GridItem>
  );
};
