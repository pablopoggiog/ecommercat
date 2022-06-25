import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components";
import { Products, Checkout } from "./pages";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);

export default App;
