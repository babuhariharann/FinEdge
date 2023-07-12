import React from "react";
import { category, courses } from "../data/data";
import { motion } from "framer-motion";
import { Categories, Clients } from "../components";

const Service = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section bg-slate-50" id="service">
      <div className="text-center">
        <div className="sm:text-[2.5rem] text-[1.825rem] font-bold mb-5">
          Our Top <span className="text-Teal">Services</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          We help individuals become more flexible and responsible with their
          finances and handle payments smooth and easy
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid lg:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {category.map((item) => {
          return <Categories key={item.id} {...item} />;
        })}
      </motion.div>

      <div className="text-xl font-bold mt-32 ">
        What Our Customes Say{" "}
        <span className="text-Teal font-bold text-2xl">About Us ? </span>
      </div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Clients key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
