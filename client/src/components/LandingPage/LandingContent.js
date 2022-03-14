import React from "react";

const LandingContent = () => {
  return (
    <>
      <div className="landing-content">
        <h1>Introduction:</h1>
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
          src={window.location.origin + "/circularity.png"}
          width="800px"
          height="500px"
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
        />
      </div>
    </>
  );
};
//<a href='https://www.freepik.com/vectors/hand-drawn'>Hand drawn vector created by freepik - www.freepik.com</a>
export default LandingContent;
