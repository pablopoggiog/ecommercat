import { FC, useState } from "react";
import {
  VStack,
  Text,
  GridItem,
  Button,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAppDispatch } from "hooks/reduxHooks";
import { addProduct } from "state/slices/cart/slice";
import CartIcon from "assets/cart-icon.png";
import { Product } from "types";

// const AnimatedImage = motion(Image);
const AnimatedGridItem = motion(GridItem);

export const ProductCard: FC<Product> = ({ name, type, price, image, id }) => {
  const [buttonText, setButtonText] = useState<string>();
  const dispatch = useAppDispatch();

  const imageBackgroundColor = useColorModeValue("gray.300", "gray.700");

  const addToCart = () => {
    dispatch(addProduct({ name, type, price, image, id }));

    setButtonText("Added!");
    setTimeout(() => {
      setButtonText("");
    }, 4000);
  };

  return (
    <AnimatedGridItem
      rounded="md"
      w="full"
      h="250"
      bg={imageBackgroundColor}
      overflow="hidden"
      animate={{ opacity: [0, 0.9, 1], scale: [1, 1.05, 1] }}
      transition={{ duration: 0.7, time: [0, 0.95, 1] }}
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
          bgColor="teal.500"
          color="white"
          px={2}
          pb={1}
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
          <Flex justify="space-between" w="full" align="center">
            <Text fontSize={["xl", "x-large"]} fontWeight="semibold">
              ${price}
            </Text>
            <Button onClick={addToCart} size="md">
              {buttonText || <Image h="50%" src={CartIcon} />}
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </AnimatedGridItem>
  );
};
