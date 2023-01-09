import React from "react";
import Demo from "../../../assets/images/demo.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex h-auto w-full pt-24">
        <div className="w-2/3 h-fit">
          <p className="text-9xl">Viva</p>
          <p className="text-9xl ml-44 mt-12">la Vida</p>
        </div>
        <div className="w-1/3 h-fit">
          <img
            className="h-96 w-full object-cover rounded-md"
            src={Demo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
