import './App.css';
import Welcome from './Components/Welcome/Welcome';
import CartItem from './Components/Panier/CartItem.jsx'
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import ProductPage from './Components/ProductDisplay/ProductPage';
import ShuffleHero from './Components/Welcome/ShuffleHero';
import SignUp from './Components/SignupPage/sign';
import Login from './Components/loginPage/PageLogin';
import Navbar from './Components/NavBar/navbar';
import Checkout from './Components/CheckoutPage/checkout'
import Panier  from "./Components/Panier/Panier.jsx";
import Filter from './Components/FilterPage/filter.jsx';


function App() {
  return (
    <div className="App">
      <Filter/>
    </div>
  );
}
export default App;
