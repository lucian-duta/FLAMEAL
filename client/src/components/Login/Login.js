import React, { useContext, useEffect, useState } from "react";
import { checkUser } from "../../api/actions";
import { UserContext } from "../../context/UserContext";
import { fetchAddress } from "../../Web3/getData";
import Popup from "../Popup/Pupup";
import "./Login.css";
import LoginLogic from "./LoginLogic";
import RegisterInput from "./RegisterInput";
import validateRegister from "./validateRegister";

/**
 * The function used to handle the login and registration of a user using the {@link LoginLogic} component
 * to perform the authentication
 *
 * @borrows {@link LoginLogic}  to handle the login logic
 * @borrows {@link RegisterInput} as a child component to display the registration form and handle input
 * @borrows {@link Popup} as a child component to display the popup message when the user is new
 * @borrows {@link UserContext} to interact with the global state
 * @borrows {@link fetchAddress} to get the user's address from MetaMask
 * @borrows {@link checkUser} to check if the user is new or not when the component mounts
 * @returns {ReactComponent} the login/register component
 */
const Login = () => {
  //import the login function for web3 auth
  const { handleLogin } = LoginLogic();
  //read the global state
  const [state, dispatch] = useContext(UserContext);
  //temporaly store the state in sessionStorage (to prevent loss on reload)
  sessionStorage.setItem("state", JSON.stringify(state));
  //hooks to hold the organisation name and foodbank state (in case of new user)
  const [orgName, setOrgName] = useState("");
  const [isFoodBank, setisFoodbank] = useState(false);
  //hook to hold the the state of user input component
  const [nameComp, setNameComp] = useState();
  const [errors, setErrors] = useState({});

  //the callbank function used in the child component
  const retrieveInfo = (info) => {
    setOrgName(info.name);
    setisFoodbank(info.isFB);
    setErrors(info.errors);
  };

  useEffect(() => {
    //using the api to check if the user has an account in registered
    checkUser(fetchAddress())
      .then(() => {
        //if the user has an account
        //don't show the input component
        setNameComp("");
      })
      .catch(() => {
        //if the user does not have an accunt
        //show user input
        setNameComp(
          <>
            <RegisterInput sendInfo={retrieveInfo} />
          </>
        );
      });
    //cleanup function to prevent memory leak
    return setNameComp();
  }, [state.auth]);

  return (
    <>
      <div className="login-page">
        {nameComp !== "" && ( // if the user input is shown, display the popup
          <Popup
            content={
              <>
                <b>MetaMask Fox: </b>
                <p>
                  Wow...you don't have an account on FLAMEAL yet. It's about the
                  time you make one. Fill in your organisation's name and tick
                  the box if you are a food bank. Be careful, you won't be able
                  to change this information later. And don't lie...THE FOX
                  KNOWS.
                </p>
              </>
            }
          />
        )}

        <div
          className={` ${
            nameComp !== "" ? "login-container" : "login-container-logged"
          }`}
        >
          <img
            src={window.location.origin + "/meta-mask.png"}
            width="300px"
            height="300px"
            alt="metamask log"
          />
          {nameComp}

          <button
            className="login-btn"
            type="submit"
            onClick={() => {
              if (
                (Object.keys(errors).length === 0 && orgName !== "") ||
                nameComp === ""
              ) {
                handleLogin(orgName, isFoodBank); //call the login function and pass the name and FB state
              }
            }}
          >
            Login with metamask
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;