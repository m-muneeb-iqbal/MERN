import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Main = ({ showSignupModal }) => {
  return (
    <main>
      <Section1 showSignupModal={showSignupModal} />
      <Section2/>
      <Section3/>
    </main>
  );
};

export default Main;