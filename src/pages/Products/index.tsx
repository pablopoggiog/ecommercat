import { useEffect } from "react";
import { Grid, Spinner, Box } from "@chakra-ui/react";
import { ProductCard } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  fetchProductsAsync,
  selectProducts,
} from "state/slices/products/slice";

export const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

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
