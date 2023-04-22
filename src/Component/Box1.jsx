import React, { useState } from "react";
import image1 from "./../Images/markus-spiske-EK8QN9O0wRk-unsplash.jpg";
import image2 from "../Images/farmer.png";
import MenuIcon from "@mui/icons-material/Menu";

const Box1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <img
        src={image1}
        alt=""
        className="w-screen  "
        style={{ height: "730px" }}
      />
      <div className="letter1 flex flex-row font-semibold text-center pl-72  h-36 w-screen bg-gray-100 bg-opacity-25 pt-10">
        <div className="letter ml-13 mt-14 sm:ml-20">
          <img src={image2} alt="" />
        </div>
        <div className="sm:hidden md:hidden lg:flex lg:flex-row  ">
          <div className="pl-56 text-slate-200 hover:text-white">Home</div>
          <div className="pl-8 text-slate-200 hover:text-white">About </div>
          <div className="pl-8 text-slate-200 hover:text-white">Product</div>
          <div className="pl-8 text-slate-200 hover:text-white">Support</div>
          <div className="pl-8 ">Blog</div>
          <div className=" h-12 w-40 bg-[#59d96a] ml-28  pb-2 font-bold text-sm pt-3 rounded-3xl  ">
          Buy now
        </div>
        </div>
        <div className="hidden max-md:flex max-md:flex-row ">
          <MenuIcon
            sx={{ margin: "20px", marginLeft: "100px", fontSize: "60px" }}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          {isMenuOpen && (
          <div className="pt-3 mt-3 text-center  shadow w-40 text-white lg:hidden md:flex md:flex-col sm:flex   sm:flex-col">
            <div className=" text-xl font-bold hover:bg-sky-700 ">Home</div>
            <div className="text-xl font-bold hover:bg-sky-700 ">About</div>
            <div className="text-xl font-bold hover:bg-sky-700 ">Product</div>
            <div className="text-xl font-bold hover:bg-sky-700 ">Support</div>
            <div className="pl-8 text-xl ">Blog</div>
            <div className=" h-12 w-40 bg-[#59d96a] ml-2  pb-2 font-bold text-sm pt-3 rounded-3xl  ">
          Buy now
        </div>
          </div>
        )}
        </div>
        <div className=" h-12 w-40 bg-[#59d96a] ml-28 pl-2 pb-1 font-bold text-sm pt-3 rounded-3xl sm:hidden ">
          Buy now
        </div>

        <div />
        

        <div className="letter2 w-screen text-center sm:pb-24">
          Transforming Agriculture with Technology
        </div>
        <div className="letter3 text-justifyfont-bold text-2xl pt-32 sm:pt-72">
          Revolutionizing Agriculture through Innovation Explore the Latest
          Trends and Technologies in Agri-Tech with Ouranos Robotics' Leading
          Blog
        </div>
      </div>
    </>
  );
};

export default Box1;

