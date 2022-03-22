import axios from "axios";
import { fetchData } from "../../Web3/getData";
import jwt from "jsonwebtoken";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

let url = "http://localhost:5000/users";

const LoginLogic = () => {
  const [state, dispach] = useContext(UserContext);

  const web3 = fetchData();
  //main function to trigger the login process
  const handleLogin = () => {
    localStorage.clear();
    dispach({
      type: "de_auth",
    });
    //payload send to api
    const payload = {
      publicAddress: web3.accounts[0],
    };
    //attempt to register as new user
    axios
      .post(`${url}/register`, payload)
      //if the user already exists
      .catch((e) => {
        console.log("err fromn axios", e);
        //Attempt login of the user in case account exists
        loginUser(payload.publicAddress)
          .then((res) => {
            const decodedToken = jwt.verify(res.data, "secret123");
            console.log("TOKEN:  ", decodedToken);
            if (decodedToken.publicAddress === payload.publicAddress) {
              console.log("AUTH SUCCESFULL");
              dispach({
                type: "auth",
              });
              dispach({
                type: "address",
                payload: payload.publicAddress,
              });
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
          const nonce = res.data;
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
                      //if the user is authenticated return jwt
                      resolve(res);
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

  const verifySign = (nonce, sign) => {
    return new Promise((resolve, reject) => {
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

  const authUser = (publicAddress, verifiedSign) => {
    return new Promise((resolve, reject) => {
      const payload = {
        address: publicAddress,
        decodedAdd: verifiedSign,
      };
      axios
        .post(`${url}/auth`, payload)
        .then((rees) => {
          resolve(rees);
          console.log("jwt token", rees);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };
  const signNonce = (nonce, publicAddress) => {
    return new Promise((resolve, reject) =>
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
