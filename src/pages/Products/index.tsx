import { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
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

  // useEffect(() => {
  //   console.log("products[0]: ", products[1]);
  // }, [products]);

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
  );
};
