import './App.css';
import Welcome from './Components/Welcome/Welcome';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import ProductPage from './Components/ProductDisplay/ProductPage';
import ShuffleHero from './Components/Welcome/ShuffleHero';
import SignUp from './Components/SignupPage/sign';
import Login from './Components/loginPage/PageLogin';
import Navbar from './Components/NavBar/navbar';
import Checkout from './Components/CheckoutPage/checkout'

function App() {
  return (
    <div className="App">
      <Checkout />
    </div>
  );
}
export default App;
