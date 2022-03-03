import React, { Component } from "react";
//import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Transfer from "./pages/Transfer/Transfer";
import MyInventory from "./pages/MyInventory/MyInventory";
import SignUp from "./pages/SignUp";
import Foodbanks from "./pages/Foodbanks";
import TopCont from "./pages/TopCont";
import UserStats from "./pages/UserStats";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import web3Connect from "./pages/Transfer/Web3Connect";
/**
 * *App
 * *The main function handeling the React router
 * @returns
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} exact /> //? Should it have an intro
        page to begin with?
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/myinventory" element={<MyInventory />} />
        <Route path="/foodbanks" element={<Foodbanks />} />
        <Route path="/topcont" element={<TopCont />} />
        <Route path="/userstats" element={<UserStats />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
