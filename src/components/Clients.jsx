import React from "react";

const Clients = ({ image, title, name, rating }) => {
  return (
    <div className="p-5 shadow-lg min-w-[25rem] bg-white rounded-md">
      <div className="flex justify-start gap-3 ">
        <div className="">
          <img
            src={image}
            alt=""
            className="rounded-full overflow-hidden w-16 h-16 border-Teal border-4"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-Teal text-lg font-bold">{name}</p>
          <img src={rating} alt="" className="w-20" />
        </div>
      </div>
      <p className="mt-5 text-gray ">{title}</p>
    </div>
  );
};

export default Clients;

/* <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
<img src={image} alt="" />

<div className="text-sm mt-5">{`"${title}"`}</div>
<div></div>
</div> */
