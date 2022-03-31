import axios from "axios";
import { fetchData } from "../../Web3/getData";
import jwt from "jsonwebtoken";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

let url = "http://localhost:5000/users";

const LoginLogic = () => {
  const [state, dispach] = useContext(UserContext);
  const navigate = useNavigate();
  const web3 = fetchData();
  //main function to trigger the login process
  const handleLogin = (orgName, isFoodBank) => {
    localStorage.clear();
    dispach({
      type: "de_auth",
    });
    //payload send to api
    const payload = {
      publicAddress: web3.accounts[0],
      name: orgName,
      isFoodBank: isFoodBank,
    };
    console.log("payload: ", payload);
    //attempt to register as new user
    axios
      .post(`${url}/register`, payload)
      //if the user is new
      .then((res) => {
        alert("You registered succesfully, now you can use MetaMask to login.");
      })
      //if the user already exists
      .catch((e) => {
        console.log("err fromn axios", e);
        //Attempt login of the user in case account exists
        loginUser(payload.publicAddress)
          .then((res) => {
            console.log("RES FROM LOGIN", res);
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
              console.log("Foodbank state:", isFoodBank);
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

  //function to handle the login process
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
          //sign the nonce
          signNonce(nonce, publicAddress)
            .then((res) => {
              //verify the signature
              verifySign(nonce, res)
                .then((resp) => {
                  console.log("SUCC VER: ", resp);
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
              if (e.code === 4001) {
                reject("refused");
              } else {
                console.log("idk");

                reject(e);
              }
              console.log("Error from sign nonce:", e);
            });
        })
        .catch((e) => {
          reject(e);
          console.log("axiossss", e.message);
        });
    });
  };
  //function the verify the web3 signature
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

  //a function to authenticate the user in back-end
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

  //function to sign the nonce from the back-end
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
