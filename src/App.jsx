import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Placeorder from "./pages/PlaceOrder";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="px-5 sm:px-[5vw] md:px-[8vw] lg:px-[12vw] h-[200vh]" >
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
