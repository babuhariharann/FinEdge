import React from "react";
import about from "../assets/img/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            <h1 className="border-b-4 w-fit border-Teal sm:text-[2.5rem] text-[1.825rem] font-bold">
              About Us
            </h1>
            <p className="mt-3">
              We provide the <br /> best{" "}
              <span className="text-Teal">online courses</span>
            </p>
          </div>
          <p className="text-sm text-gray leading-7 mb-4 ">
            FinEdge is a cutting-edge fintech startup dedicated to
            revolutionizing cross-border payments. Our vision is to enable
            seamless transactions for individuals and businesses, transcending
            geographical boundaries.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
