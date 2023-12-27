import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets_3d/assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
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
      <InfoBox
        text="Internships: Fidelity Investments: FullStack Development Role"
        link={"/about"}
        btnText={"Learn More"}
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text="Project Number 2"
        link={"/Projects"}
        btnText={"Learn More"}
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox text="Talk to Me !" link={"/contact"} btnText={"Learn More"} />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
