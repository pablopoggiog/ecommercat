import { Grid, Spinner, Flex } from "@chakra-ui/react";
import { ProductCard } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import { selectProducts } from "state/slices/products/slice";

export const Products = () => {
  const products = useAppSelector(selectProducts);

  return products.length ? (
    <Grid
      m={5}
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={6}
      alignContent="space-around"
      justifyItems="center"
      minH="90vh"
    >
      {products?.map(({ name, type, image }) => (
        <ProductCard
          key={image}
          image={image}
          name={name}
          type={type}
          price={10}
          id={image}
        />
      ))}
    </Grid>
  ) : (
    <Flex w="full" minH="90vh" align="center" justify="center">
      <Spinner />
    </Flex>
  );
};
