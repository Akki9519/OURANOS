import React from "react";
import Box1 from './Box1'
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
const Page1 = () => {
  

  return (
    <>
      <Box1 />
      <div className=" bg-slate-200 ">
      
       
        <div className="md:hidden sm:grid cols-1 lg:hidden">
        <Box3/><Box2/></div>
       

       
        <div className="lg:flex lg:flex-row md:hidden sm:hidden"><Box2/>
        <Box3/></div>
       
       
        
      </div>
      <div className="bg-slate-200 flex text-center justify-center">
        <Box4 />
      </div>
    </>
  );
};

export default Page1;
