import { FC } from "react";
import {
  VStack,
  Text,
  GridItem,
  Button,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAppDispatch } from "hooks/reduxHooks";
import { addProduct } from "state/slices/cart/slice";
import CartIcon from "assets/cart-icon.png";
import { Product } from "types";

export const ProductCard: FC<Product> = ({ name, type, price, image, id }) => {
  const dispatch = useAppDispatch();

  const imageBackgroundColor = useColorModeValue("gray.300", "gray.700");
  const descriptionBackgroundColor = useColorModeValue("blue.200", "gray.500");

  const addToCart = () => {
    dispatch(addProduct({ name, type, price, image, id }));
  };

  return (
    <GridItem
      rounded="md"
      w="full"
      h="250"
      bg={imageBackgroundColor}
      overflow="hidden"
    >
      <VStack h="full" justify="space-between">
        <Flex h={160} w="full" m="auto" position="relative">
          <Image src={image} h="85%" m="auto" />
          <Text
            fontSize={["xs", "sm"]}
            m={0}
            fontWeight="semibold"
            position="absolute"
            right={[1, 1, 3]}
            bottom={-2}
          >
            {type}
          </Text>
        </Flex>
        <VStack
          w="full"
          h="fit-content"
          bgColor={descriptionBackgroundColor}
          px={2}
          py={0.5}
          rounded="lg"
        >
          <Flex>
            <Text
              fontSize={["sm", "md"]}
              fontWeight="semibold"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              maxW={["150px", "200px", "200px", "350px"]}
            >
              {name}
            </Text>
          </Flex>
          <Flex justify="space-between" w="full">
            <Text fontSize="x-large" fontWeight="semibold">
              ${price}
            </Text>
            <Button onClick={addToCart} size="md">
              <Image h="50%" src={CartIcon} />
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </GridItem>
  );
};
