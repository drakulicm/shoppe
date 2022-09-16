import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, HomePage, Shop, ProductPage, CartPage } from "./pages";
import { Footer, Navbar } from "./widgets";
const App = () => {
  useEffect(() => {
    window.document.title = "Shoppe";
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <div className="flex-grow" />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
