import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";  
import List from "./Pages/List.jsx";
import Add from "./Pages/Add.jsx";
import Login from "./Pages/Login.jsx";
import Order from "./pages/Order.jsx";
import { adminDataContext } from "./Context/adminContext.jsx";

function App() {
  let { adminData } = useContext(adminDataContext);
  return (
    <>
      {!adminData ? (
        <Login />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
