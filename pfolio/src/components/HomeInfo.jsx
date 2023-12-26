import React from "react";
import { Link } from "react-router-dom";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    {text}
    <Link to={link}>{btnText}</Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-red py-5 px-8 text-white mx-5">
      Welcome ! I am <span className="font-semibold">Samuel Onwukeme</span>
      <br />A Software Engineer at the University of Utah.
    </h1>
  ),
  2: (
    <h1>
      <InfoBox />
    </h1>
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
