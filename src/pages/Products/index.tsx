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
  //   console.log("products[0]: ", products[0]);
  // }, [products]);

  return (
    <Grid m={5} templateColumns="repeat(5, 1fr)" gap={6}>
      {products?.map(({ name, type, image }, index) => (
        // I can just safely use the index as key bc I won't be removing items from the list
        <ProductCard key={index} name={name} type={type} price={10} />
      ))}
    </Grid>
  );
};
