import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Box2 = () => {
  return (
    <>
      <div className="flex flex-col   ">
        <div className=" ml-28 mt-14 h-14 w-96 rounded-2xl  bg-[white] sm:ml-16  ">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="pr-10  ml-8 pt-2 text-2xl text-white outline-white  outline-0"
            />
            <SearchIcon sx={{ color: "gray" }} />
          </div>
        </div>
        <div
          className="  ml-28 mt-10 h-96 w-96 bg-[white] rounded-2xl sm:ml-16 "
          style={{ height: "450px" }}
        >
          <div className="font-bold text-2xl pl-14 pt-5">Categories</div>
          <div className="pl-14 font-normal pt-5">Automation</div>
          <hr className="ml-8 mr-8 text-[gray] mt-2"></hr>
          <br />
          <div className="pl-14 font-normal ">IoT</div>
          <hr className="ml-8 mr-8 text-[gray] mt-2"></hr>
          <br />
          <div className="pl-14 font-normal">Precision Agriculture</div>
          <hr className="ml-8 mr-8 text-[gray] mt-2"></hr>
          <br />
          <div className="pl-14 font-normal">Sustainable Farming</div>
          <hr className="ml-8 mr-8 text-[gray] mt-2"></hr>
          <br />
          <div className="pl-14 font-normal">Industry News </div>
          <hr className="ml-8 mr-8 text-[gray] mt-2"></hr>
          <br />
          <div className="pl-14 font-normal">Case Studies</div>
          <hr className="ml-8 mr-8 text-[gray] mt-2"></hr>
          <br />
          <div className="pl-14 font-normal">Tips & Tricks</div>
        </div>

        <div
          className=" ml-28 mt-14 h-96 w-96 bg-white rounded-2xl sm:ml-16 "
          style={{ height: "547px" }}
        >
          <div className="font-bold text-2xl pl-10 pt-10">Top Posts</div>
          <div className="pt-14 mb-3">
            <span className="pl-3 font-bold text-4xl text-black ">1</span> How
            Regenerative Agriculture is Changing name <br />
            <span className="text-xs pl-10">
              Sustainable Farming - March, 2022
            </span>
          </div>
          <div className="">
            <span className=" pl-3 font-bold text-4xl text-black">2</span>{" "}
            Precision Agriculture 2.0
            <br />
            <span className="text-xs pl-10">
              Sustainable Farming - March, 2022
            </span>
          </div>
          <div className="">
            <span className=" pl-3 font-bold text-4xl text-black">3</span> The
            Impact of Technology on the Agriculture <br />
            <span className="text-xs pl-10">
              Expert Insights - November 2021
            </span>
          </div>
          <div className="">
            <span className=" pl-3 font-bold text-4xl text-black">4</span>{" "}
            Breaking Ground
            <br />
            <span className="text-xs pl-10">Industry News - May 2022</span>
          </div>
          <div className="">
            <span className=" pl-3 font-bold text-4xl text-black">5</span> How
            Ouranos Robotics' Smart Sensors Work
            <br />
            <span className="text-xs pl-10"> IoT - July 2021</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box2;
