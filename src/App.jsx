import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {
  const [popup, Setpopup] = useState(false);
  return (
    <>
      {popup ? <LoginPopup Setpopup={Setpopup} /> : <> </>}
      <div className="app">
        <Navbar Setpopup={Setpopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
