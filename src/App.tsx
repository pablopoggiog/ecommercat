import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
