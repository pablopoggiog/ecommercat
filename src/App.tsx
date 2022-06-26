import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch } from "hooks/reduxHooks";
import { Header } from "./components";
import { Products, Checkout } from "./pages";
import { loadCartFromStorage } from "state/slices/cart/slice";
import { fetchProductsAsync } from "state/slices/products/slice";

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
        {/* This below was my original idea but GH Pages seems to have issues with it, so I'll make the redirection manually from the header */}
        {/* ⬇️ */}
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
