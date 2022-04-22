import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Intro from "./pages/Intro";
import Transfer from "./pages/Transfer/Transfer";
import MyInventory from "./pages/MyInventory/MyInventory";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import Foodbanks from "./pages/Foodbanks";
import TopCont from "./pages/TopCont";
import UserStats from "./pages/UserStats";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ChangeFB from "./pages/ChangeFB";
import Explorer from "./pages/Explorer";
/**
 * React functional component to display the application, wrapped in a router to point to the different pages
 *
 * @returns {ReactComponent} the application component
 */

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} exact />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/myinventory" element={<MyInventory />} />
        <Route path="/foodbanks" element={<Foodbanks />} />
        <Route path="/topcont" element={<TopCont />} />
        <Route path="/userstats" element={<UserStats />} />
        <Route path="/signup" element={<LoginRegisterPage />} />
        <Route path="/changefb" element={<ChangeFB />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
