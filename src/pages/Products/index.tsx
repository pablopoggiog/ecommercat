import { Grid, Spinner, Box } from "@chakra-ui/react";
import { ProductCard } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import { selectProducts } from "state/slices/products/slice";

export const Products = () => {
  const products = useAppSelector(selectProducts);

  return (
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
      {products.length
        ? products?.map(({ name, type, image }) => (
            <ProductCard
              key={image}
              image={image}
              name={name}
              type={type}
              price={10}
              id={image}
            />
          ))
        : Array(30)
            .fill("")
            .map((el) => (
              <Box>
                <Spinner />
              </Box>
            ))}
    </Grid>
  );
};
