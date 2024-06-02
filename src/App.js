import Nav from "./components/Nav";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainApp from "./Pages/MainApp";

function App() {
  return (
    <div className="flex ">
      <div className=" bg-[#686bf6]  p-5  w-[15%] h-[100vh] sticky top-0">
        <Nav />
      </div>
      <div className="w-[86%] relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Tables" element={<MainApp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
