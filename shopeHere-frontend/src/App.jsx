import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/login";
import Registration from "./Page/registration";
import Navbar from "./components/Navbar";
import Collection from "./Page/collection";
import About from "./Page/about";
import Contect from "./Page/contect";
import ProductDetails from "./Page/productDetails";
import { userDataContext } from "./context/userContext";
import Order from "./Page/Order";

function App() {
  const { userData } = useContext(userDataContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route
          path="/collection"
          element={userData ? <Collection /> : <Login />}
        />
        <Route path="/about" element={userData ? <About /> : <Login />} />
        <Route path="/contect" element={userData ? <Contect /> : <Login />} />
        <Route path="/order" element={userData ? <Order /> : <Login />} />
        <Route
          path="/productDetails/:productId"
          element={userData ? <ProductDetails /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
