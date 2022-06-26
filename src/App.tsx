import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch } from "hooks/reduxHooks";
import { Header } from "./components";
import { Products, Checkout } from "./pages";

import { loadFromStorage } from "state/slices/cart/slice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFromStorage());
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
