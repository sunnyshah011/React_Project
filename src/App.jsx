import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Placeorder from "./pages/PlaceOrder";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="sm:px-[4vw] md:px-[5vw] lg:px-[7vw]" >
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
