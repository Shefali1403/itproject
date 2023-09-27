import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
import Productpage from "./pages/Productpage";
import Singleproduct from "./pages/Singleproduct";
import Errorpage from "./pages/Errorpage";

import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App=()=>{
  return(
    <Router>
      <div className="maincontainer">

      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
        <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="*" element={<Errorpage/>}/>

      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}
export default App;
