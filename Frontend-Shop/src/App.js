import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./Components/Welcome/Welcome";
import SummaryPage from "./Components/CheckoutPage/SummaryPage";
import ProductPage from "./Components/ProductDisplay/ProductPage";
import SignUp from "./Components/SignupPage/sign";
import Login from "./Components/loginPage/PageLogin";
import Navbar from "./Components/NavBar/navbar";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";
import Filter from "./Components/FilterPage/filter";
import Footer from "./Components/Footer/footer";
import ScrollToTop from "./Components/ScrollReset";
import Cart from "./Components//Panier/CartComp";
/* import "./App.css"; */

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <div className="App">
      <Navbar toggleCart={toggleCart} />
      {isCartVisible && <Cart />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/productPage/:productId" element={<ProductPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/filtre" element={<Filter />} />
          <Route path="/somme" element={<sommePage />} />
          <Route path="/orderSummary" element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
