import React from "react";

const LandingContent = () => {
  return (
    <>
      <div className="landing-content">
        <h1>Introduction:</h1>
        <p>
          This project's scope was to provide a decentralized software solution
          to help communities redistribute food and other forms of help for the
          ones in need. But after extensive research, we discovered that a large
          amount of surplus food is generated at all stages of food production
          and commercialization. The problem was that edible surplus food would
          be discarded and transformed into waste food most of the time. FLAMEAL
          aims to use food circularity theory to close the gaps in the food
          cycle. On the other hand, research suggests that many people suffer
          from food poverty or food insecurity. Combining the concepts, FLAMEAL
          aims to redistribute the surplus food generated by the food chain.
          With increased interest in surplus food generated by retail, to be
          redistributed foodbanks which can use it to manage emerging cases at a
          local level. While food chain entities can donate straight to people
          in need, the data suggested that the most common concern in food banks
          is not having enough products to distribute.
        </p>
      </div>
      <div className="landing-content-img">
        <img
          src={window.location.origin + "/circularity.png"}
          width="800px"
          height="500px"
          alt=" representing circulariy theroy in food sector"
        />
      </div>
      <div className="landing-content">
        <h1>Blockchain:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fringilla diam eu ligula mattis dictum. Nulla ultricies ante eget
          purus posuere, eget dapibus magna aliquam. Sed vitae tristique nulla.
          Sed facilisis, diam et tempus imperdiet, magna urna pulvinar eros, ut
          volutpat odio arcu ac dolor. Maecenas congue, ante sodales ultrices
          facilisis, eros lacus viverra lacus, id lobortis purus nisl sed lorem.
          In quam leo, sodales sed quam rutrum, bibendum egestas neque. Etiam
          iaculis risus magna, sed tincidunt orci efficitur a. Proin pretium
          tellus viverra dui fringilla, a pharetra quam pellentesque. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nulla a elementum leo. Fusce dictum massa a lectus
          ultrices, sit amet hendrerit metus fringilla. Phasellus vitae luctus
          nulla. Donec volutpat tellus eu luctus bibendum.
        </p>
      </div>
      <div className="landing-content-img">
        <img
          src={window.location.origin + "/smartppl.png"}
          width="1000px"
          height="500px"
          alt=" presenting the process flow with smart contracts"
        />
      </div>
    </>
  );
};
//<a href='https://www.freepik.com/vectors/hand-drawn'>Hand drawn vector created by freepik - www.freepik.com</a>
export default LandingContent;
