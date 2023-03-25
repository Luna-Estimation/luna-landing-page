import { AboutLuna } from "../WhatIsLuna/WhatIsLuna";
import { Steps } from "../Steps/Steps";

export const About = () => {
  return (
    <div className="m-auto max-w-[80vw] flex flex-col pb-40">
      <AboutLuna />
      <Steps />
    </div>
  );
};
