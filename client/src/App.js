import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Transfer from "./pages/Transfer/Transfer";
import MyInventory from "./pages/MyInventory/MyInventory";
import SignUp from "./pages/SignUp";
import Foodbanks from "./pages/Foodbanks";
import TopCont from "./pages/TopContributors/TopCont";
import UserStats from "./pages/UserStats";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ChangeFB from "./pages/ChangeFB";
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
        <Route path="/" element={<Intro />} exact />

        <Route path="/transfer" element={<Transfer />} />
        <Route path="/myinventory" element={<MyInventory />} />
        <Route path="/foodbanks" element={<Foodbanks />} />
        <Route path="/topcont" element={<TopCont />} />
        <Route path="/userstats" element={<UserStats />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/changefb" element={<ChangeFB />} />
      </Routes>
    </Router>
  );
}

export default App;
