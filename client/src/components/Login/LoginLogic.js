import axios from "axios";
import { fetchData } from "../../Web3/getData";
import jwt from "jsonwebtoken";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

let url = "https://flameal.herokuapp.com/users";

/**
 * The function used to handle the Web3 authentication logic using MetaMask
 *
 * !IMPORTANT! The user must use MetaMask for the function to work as it is entirely dependent on the {@link fetchData} function
 * @category Login
 * @function LoginLogic
 * @returns {Function} {@link handleLogin} the function to be called when authentication is attempted
 */
const LoginLogic = () => {
  //hook to handle the global state
  const [state, dispach] = useContext(UserContext);
  //hook to handle the navigation component
  const navigate = useNavigate();
  //constant to hold the Web3 instance elements
  const web3 = fetchData();

  /**
   * The function used to register or authenticate a user using MetaMask
   * - The data from {@link payload} is sent to the backend API to register the user
   * - If the user does not exist in the database, the user is registered without being authenticated
   * - If the user exists in the database, the authentication process is started
   *
   * !Important! The nonce is used to prevent replay attacks and it will be regenerated every time the user attempts to login regardless of the success of the authentication
   *
   * @param {String} orgName the name of the organisation to be registered if the user is new
   * @param {Boolean} isFoodBank the state of the user's foodbank status
   * @throws {Error} initially throws an error if the user is new
   * @throws {Error} throws an error if the user is not new and the authentication fails
   */
  const handleLogin = (orgName, isFoodBank) => {
    //clearing the browser cache to avoid conflicts
    window.sessionStorage.clear();
    //updating the global state to deauthenticate user
    dispach({
      type: "de_auth",
    });
    //payload send to api
    const payload = {
      publicAddress: web3.accounts[0],
      name: orgName,
      isFoodBank: isFoodBank,
    };
    //console.log("payload: ", payload);

    //attempt to register as new user
    axios
      .post(`${url}/register`, payload)
      //if the user is new
      .then((res) => {
        alert("You registered succesfully, now you can use MetaMask to login.");
        navigate("/");
      })
      //if the user already exists
      .catch((e) => {
        //console.log("err fromn axios", e);

        //Attempt login of the user in case account exists
        loginUser(payload.publicAddress)
          .then((res) => {
            //console.log("RES FROM LOGIN", res);
            //decrypt the token
            const decodedToken = jwt.verify(res.jwt, "secret123");
            //if the address held in the token is the same as the current user address
            if (decodedToken.publicAddress === payload.publicAddress) {
              //authenticate the user
              dispach({
                type: "auth",
              });
              dispach({
                type: "address",
                payload: payload.publicAddress,
              });

              //console.log("Foodbank state:", isFoodBank);

              if (res.isFoodBank) {
                dispach({
                  type: "isfb",
                });
              }
              navigate("/");
            }
          })
          .catch((e) => {
            console.log(e);
          });
      });
  };
  /**
   * The function used to login the user if the user is already registered
   * @param {String} publicAddress - the address of the user to be authenticated
   * @returns {Promise<Objcet>} a promise that resolves to the jwt token and the fodbank status of the user
   */
  const loginUser = (publicAddress) => {
    return new Promise((resolve, reject) => {
      //retreieve the nonce from the database
      axios
        .get(`${url}/login/${publicAddress}`)
        .then((res) => {
          const nonce = res.data.nonce;
          const isfbState = res.data.isFoodBank;
          console.log("FOOD BANK STATE FROM API: ", isfbState);
          console.log("response from login", res.data);
          //sign the nonce using MetaMask
          signNonce(nonce, publicAddress)
            .then((res) => {
              //verify the signature
              verifySign(nonce, res)
                .then((resp) => {
                  //console.log("SUCC VER: ", resp);
                  //if the signature could be verified
                  //send to api for validation
                  authUser(publicAddress, resp)
                    .then((res) => {
                      let response = {
                        jwt: res.data,
                        isFoodBank: isfbState,
                      };
                      //if the user is authenticated return jwt
                      resolve(response);
                    })
                    .catch((e) => {
                      reject(e);
                    });
                })
                .catch((err) => {
                  reject(err);
                  console.log("fail VER: ", err);
                });
            })
            .catch((e) => {
              //if there is a problem connection with the network
              if (e.code === 4001) {
                alert(
                  "You have refused to sign your personal nonce using MetaMask. If you wish to log in please sign the nonce when promted."
                );
                reject("refused");
              } else {
                reject(e);
              }
              console.log("Error from sign nonce:", e);
            });
        })
        .catch((e) => {
          reject(e);
          console.log("API ERROR: ", e.message);
        });
    });
  };

  /**
   * The function used to verify the user's signature generated by MetaMask
   * @param {String} nonce the nonce of the user
   * @param {Object} sign the Web3 signature generated by MetaMask
   * @returns {Promise<Object>} the promise that resolves if the signature is verified using MetaMask or rejects if the signature is invalid
   */
  const verifySign = (nonce, sign) => {
    return new Promise((resolve, reject) => {
      //using the function provided by Metamask to decrypt the message without a private key exposed
      web3.web3.eth.personal
        .ecRecover(nonce, sign)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  /**
   * The function used to authenticate the user using the backend API. The approch is to send a {@link payload}
   * to the API to check if the user exists and if so verify the signature validity. If the authentication is successful
   * the backend API will send a {@link jwt} to the front end.
   *
   * TODO: Avoid sending the decoded public address to the API.
   *
   * @param {String} publicAddress the address of the user to be authenticated
   * @param {String} verifiedSign the verified signature of the user
   * @returns {Promise<Object>} the promise that resolves to the jwt token
   */
  const authUser = (publicAddress, verifiedSign) => {
    return new Promise((resolve, reject) => {
      const payload = {
        address: publicAddress,
        decodedAdd: verifiedSign,
      };
      //send the actual address and the decrypted address to the backend
      axios
        .post(`${url}/auth`, payload)
        .then((rees) => {
          //if the backend confirmes the user, it will send a JWT(Java Web Token)
          resolve(rees);
          console.log("jwt token", rees);
        })
        //otherwise the request will be rejected
        .catch((e) => {
          reject(e);
        });
    });
  };

  /**
   * The function used to sign the nonce using MetaMask. When the function is called the user will be promted to sign it by confirming with MetaMask.
   * @param {String} nonce the perosnal nonce of the user
   * @param {String} publicAddress the address of the user to be authenticated
   * @returns {Promise<Object>} the promise that resolves to the signature generated by MetaMask or rejects if the user denies the signature
   */
  const signNonce = (nonce, publicAddress) => {
    return new Promise((resolve, reject) =>
      //using the metamask sign function to ask the user to sign the nonce from the backend
      web3.web3.eth.personal
        .sign(nonce, publicAddress)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        })
    );
  };
  return { handleLogin };
};

export default LoginLogic;
