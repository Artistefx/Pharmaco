import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import ProductPage from "./Components/ProductDisplay/ProductPage";
import SignUp from "./Components/SignupPage/sign";
import Login from "./Components/loginPage/PageLogin";
import Navbar from "./Components/NavBar/navbar";
import Checkout from "./Components/CheckoutPage/checkout";
import Panier from "./Components/Panier/Panier";
import Filter from "./Components/FilterPage/filter";
import Footer from "./Components/Footer/footer";
import sommePage from "./Components/SommePage/sommePage";
import ScrollToTop from "./Components/ScrollReset";
import Cart from "./Components//Panier/CartComp";
import CartProvider from "./Components/Panier/CartProvider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <Navbar toggleCart={toggleCart} />
          {isCartVisible && <Cart />}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/product" element={<ProductDisplay />} />
            <Route path="/productPage/:productId" element={<ProductPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/filtre" element={<Filter />} />
            <Route path="/somme" element={<sommePage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
