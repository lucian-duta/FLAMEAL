import React, { Component } from "react";

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

/* 
!The inital boilerplate of the web3 app (may be useful later)
class App extends Component {
  
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    
   
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">FLAMEAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#transefer">Transfer</Nav.Link>
            <Nav.Link href="#inventory">My Inventory</Nav.Link>
            <NavDropdown title="Statistics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#foodbanks">Food Banks</NavDropdown.Item>
              <NavDropdown.Item href="#stats">User Statistics</NavDropdown.Item>
              <NavDropdown.Item href="#contributors">Top Contributors</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="£about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
    
   return (
     <Router>
       <Navbar />
       <Routes>
         <Route path = '/transfer' exact element ={Transfer} />
         <Route path = '/myinventory' exact element ={MyInventory} />
         <Route path = '/foodbanks' exact element ={Foodbanks} />
         <Route path = '/topcont' exact element ={TopCont} />
         <Route path = '/userstats' exact element ={UserStats} />
         <Route path = '/signup' exact element ={SignUp} />
       </Routes>

     </Router>
     
    
      );
   
  }
}
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
