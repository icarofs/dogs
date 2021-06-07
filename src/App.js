import React from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/User/User";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Photo from "./components/Photo/Photo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="foto/:id" element={<Photo />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
