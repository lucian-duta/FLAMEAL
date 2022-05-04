import React from "react";
import "./Instructions.css";
import metaNet from "../../assets/meta-net.jpg";
import metaAdd from "../../assets/meta-add.jpg";
import metaNetConfig from "../../assets/meta-net-config.png";
const Instructions = () => {
  return (
    <>
      <div className="instructions-container">
        <h1>Configure the wallet</h1>
        <p>
          <b>Step 1:</b> Install{" "}
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
          >
            MetaMask
          </a>{" "}
          and create an account.
        </p>
        <p>
          On mobile devices, you can download the MetaMask App for{" "}
          <a
            href="https://play.google.com/store/apps/details?id=io.metamask"
            target="_blank"
          >
            Android
          </a>{" "}
          or{" "}
          <a
            href="https://apps.apple.com/gb/app/metamask-blockchain-wallet/id1438144202"
            target="_blank"
          >
            IOS
          </a>
        </p>
        <p>
          <b>Step 2:</b> Click on the "current network" button
        </p>
        <div className="instruct-img-meta-add">
          <img src={metaNet} alt="meta-net" />
        </div>
        <p>
          <b>Step 3:</b> Click on the "add network" button
        </p>
        <div className="instruct-img">
          <img src={metaAdd} alt="meta-add" />
        </div>
        <p>
          {" "}
          <b>Step 4:</b> Fill the network form with the following information:
        </p>
        <div className="instruct-net-form">
          <p>
            <b>Network Name:</b> FlamealRM
          </p>
          <p>
            <b>New RPC URL: </b>https://eth.techlmd.co.uk
          </p>
          <p>
            <b>Chain ID: </b>1337
          </p>
          <p>
            <b>Currency Symbol ID: </b>eth
          </p>
          <br></br>
          <p>
            <b>Ignore any errors and click save</b>
          </p>
        </div>

        <div className="instruct-img-net">
          <img
            src={metaNetConfig}
            width="700px"
            height="500px"
            alt="meta-net-config"
          />
        </div>
        <p>
          The wallet is now configured, for more information on how to use the
          platform take a look at the{" "}
          <a href="https://youtu.be/hvknVXfV-rk" target="_blank">
            video demo
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default Instructions;
