import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Login.css";
import LoginLogic from "./LoginLogic";
const Login = () => {
  const { handleLogin } = LoginLogic();
  const [state, dispach] = useContext(UserContext);
  console.log(state.auth);
  localStorage.setItem("state", JSON.stringify(state));
  return (
    <div className="login-container">
      <img
        src={window.location.origin + "/meta-mask.png"}
        width="300px"
        height="300px"
      />
      <button className="login-btn" type="submit" onClick={handleLogin}>
        Login with metamask
      </button>
    </div>
  );
};

export default Login;
