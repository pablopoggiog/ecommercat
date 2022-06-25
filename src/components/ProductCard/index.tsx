import { FC } from "react";
import { VStack, Text, GridItem, Button, Image } from "@chakra-ui/react";
import CartIcon from "assets/cart-icon.png";

type ProductType = string; // TO DO: change to specific product types

interface ProductCardProps {
  name: string;
  type: ProductType;
  price: number;
}

export const ProductCard: FC<ProductCardProps> = ({ name, type, price }) => {
  return (
    <GridItem borderRadius="md" p={5} w="full" h="250" bg="blue.500">
      <VStack h="full" justify="space-around">
        <Text fontWeight="semibold">{name}</Text>
        <Text fontWeight="semibold">{type}</Text>
        <Text fontWeight="semibold">{price}</Text>
        <Button size="lg">
          <Image h="50%" src={CartIcon} />
        </Button>
      </VStack>
    </GridItem>
  );
};