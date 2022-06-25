import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products, Header } from "./components";

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
