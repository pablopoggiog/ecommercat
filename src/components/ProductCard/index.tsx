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
import { ReactComponent as CartIcon } from "assets/cart-icon.svg";
import { Product } from "types";

const AnimatedImage = motion(Image);

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
    <GridItem
      rounded="md"
      w="full"
      h="250"
      bg={imageBackgroundColor}
      overflow="hidden"
    >
      <VStack h="full" justify="space-between">
        <Flex h={160} w="full" m="auto" position="relative">
          <AnimatedImage
            src={image}
            h="85%"
            m="auto"
            layout
            animate={{
              opacity: [0, 0.5, 1],
              scale: [0.1, 1.1, 1],
              x: [-30, 30, 0],
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
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
            <Text fontSize={["lg", "xl"]} fontWeight="semibold">
              ${price}
            </Text>
            <Button
              color="whiteAlpha.900"
              bgColor="whiteAlpha.500"
              colorScheme="whiteAlpha"
              onClick={addToCart}
              size="md"
            >
              {buttonText || <CartIcon />}
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </GridItem>
  );
};
