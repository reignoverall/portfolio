import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hey, I'm{" "}
        <span className="red-gradient_text font-semibold drop-shadow">
          Ginika
        </span>{" "}
        !
      </h1>
      <p className="text-sm font-light flex text-left mt-7 ">
        I was raised in Nigeria, moved to Texas and found my way to Utah where I
        am currently pursuing a Computer Science Degree.
        <br />{" "}
        <p>
          I have interests in :{" "}
          <strong className="text-red-700">FullStack Development</strong> ,
          <strong className="text-blue-700">Fintech</strong> and{" "}
          <strong className="text-green-700">Machine Learning</strong>
        </p>
      </p>
      <div className="py-10 flex flex-col">
        <h3 className="text-xl">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="text-xl underline">Work Experience</h3>
        <p>No Technical Experience yet !</p>
      </div>
      <div className="mt-12 flex hidden ">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-lg font-poppins">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font md font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((dot, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black font-normal pl-1"
                  >
                    {dot}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200"></hr>
      <CTA />
    </section>
  );
};

export default About;
