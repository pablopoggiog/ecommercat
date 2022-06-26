import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch } from "hooks/reduxHooks";
import { Header } from "./components";
import { Products, Checkout } from "./pages";
import { loadCartFromStorage } from "state/slices/cart";
import { fetchProductsAsync } from "state/slices/products";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/ecommercat"
          element={<Navigate replace to="/ecommercat/products" />}
        />

        <Route path="/ecommercat/products" element={<Products />} />
        <Route path="/ecommercat/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
