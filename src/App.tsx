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
        <Route index element={<Navigate replace to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
