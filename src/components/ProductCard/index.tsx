import React, { FC, useState } from "react";
import { VStack, Text, GridItem } from "@chakra-ui/react";

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
        <Text>{name}</Text>
        <Text>{type}</Text>
        <Text>{price}</Text>
      </VStack>
    </GridItem>
  );
};
