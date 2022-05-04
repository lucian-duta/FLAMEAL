import React from "react";
import circularity from "../../assets/circularity.png";
import smartppl from "../../assets/smartppl.png";
/**
 * The function to return the text and images used in the landing page
 * @category LandingPage
 * @component
 * @returns {ReactComponent} the text and images used in the landing page
 */
const LandingContent = () => {
  return (
    <>
      <div className="landing-content">
        <h1>Introduction:</h1>
        <p>
          This project's scope was to provide a decentralized software solution
          to help communities redistribute food and other forms of help for the
          ones in need. But after extensive research, we discovered that a large
          amount of surplus food gets generated at all stages of food production
          and commercialization. The problem was that edible surplus food would
          be discarded and transformed into waste food most of the time. FLAMEAL
          aims to use food circularity theory to close the gaps in the food
          cycle. On the other hand, research suggests that many people suffer
          from food poverty or food insecurity. Combining the concepts, FLAMEAL
          aims to redistribute the surplus food while contributing to
          Sustainable Development Goal (<b>SDG</b>) 2: Zero Hunger, proposed by
          the United Nations. With increased interest in surplus food generated
          by retail, to be redistributed by foodbanks which can use it to manage
          emerging cases at a local level. In addition, FLAMEAL aims to provide
          transparency in the world of food charity and help the community make
          informed decisions.
        </p>
      </div>
      <div className="landing-content-img">
        <img
          src={circularity}
          width="800px"
          height="500px"
          alt=" representing circulariy theroy in food sector"
        />
      </div>
      <div className="landing-content">
        <h1>Blockchain:</h1>
        <p>
          FLAMEAL interacts with a smart contract on the Ethereum blockchain to
          store transactions securely and transparently. When an entity wants to
          donate, a transaction is initiated. The addresses of both the receiver
          and the sender and the goods sent are stored in the smart contract.
          Smart contracts are an excellent way to connect tangible goods with
          blockchain. One of the biggest advantages is that it removes the need
          for a central authority to be trusted by the users. Statistics,
          metrics and reports are automatically generated based on the data
          stored on the blockchain, which is available to anyone. The blockchain
          provides immutability, provenance, and transparency, which means we
          know where the goods come from and where they went. No one can ever
          change that.
        </p>
      </div>
      <div className="landing-content-img">
        <img
          src={smartppl}
          width="1000px"
          height="500px"
          alt=" presenting the process flow with smart contracts"
        />
      </div>
      <div className="landing-content-creds">
        <p>
          This project used graphical elements from{" "}
          <a href="https://www.freepik.com/" target="_blank">
            Freepik
          </a>{" "}
          and{" "}
          <a href="https://www.flaticon.com/" target="_blank">
            Flaticon
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default LandingContent;
