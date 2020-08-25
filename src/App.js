import React from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
