import React from "react";
import hero from "../assets/img/home.png";
import { logos } from "../data/data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            Your Secure Bank
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Pay , Invest, Save <br /> your Cash with a <br /> single bank
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Finedge is the bank that does it all.Manage everything directly and
            easy with finedge
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Know More
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
        <p className="text-center text-4xl font-bold mt-10">
          More than
          <span className="text-Teal text-3xl text-center"> 10,000 </span>
          <span>active users</span>
          <br />
          trust Finedge
        </p>
      </div>
    </div>
  );
};

export default Home;
