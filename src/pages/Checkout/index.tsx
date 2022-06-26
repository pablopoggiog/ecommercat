import {
  Flex,
  useColorModeValue,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useAppSelector } from "hooks/reduxHooks";

import { CartItem } from "components";
import { cartReducer } from "state/slices/cart/slice";

export const Checkout = () => {
  const backgroundColor = useColorModeValue("gray.400", "gray.700");
  const totalPriceColor = useColorModeValue("gray.700", "gray.400");

  const { cartList, totalPrice } = useAppSelector(cartReducer);

  return (
    <Flex
      bgColor={backgroundColor}
      m={{ base: 5, md: 10 }}
      p={{ base: 5, md: 10, lg: 20 }}
      rounded="lg"
      minH="85vh"
    >
      <VStack gap={8} w="full" h="full" align="space-between">
        <VStack gap={8} w="full" h="full" align="space-between">
          {cartList?.map(({ product, amount }) => (
            <CartItem key={product.id} product={product} amount={amount} />
          ))}
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="flex-end"
          w="full"
          gap={5}
          mt="auto"
        >
          <Text color={totalPriceColor} fontSize="lg" fontWeight="bold">
            Total: ${totalPrice}
          </Text>

          <Button colorScheme="teal">Finish Purchase</Button>
        </Flex>
      </VStack>
    </Flex>
  );
};