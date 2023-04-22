import React from "react";
import Box5 from "./Box5";
import Box6 from "./Box6";
import Box7 from "./Box7";
const Page2 = () => {
  return (
    <div className="bg-slate-100 ">
      <div className="pt-8 ">
        <Box6 />
      </div>
      <div className="  sm: grid-cols-1 lg:flex flex-row">
        <Box5 />
        <Box7 />
      </div>
    </div>
  );
};

export default Page2;
