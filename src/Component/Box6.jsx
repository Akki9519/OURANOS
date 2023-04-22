import React from "react";
import WestIcon from "@mui/icons-material/West";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  FacebookRounded,
  Google,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Box6 = () => {
  return (
    <>
      <div
        className="h-14 ml-16 bg-white rounded-2xl flex flex-row mr-12 sm:min-w-min  "
        
      >
        <Link to="/">
          <div className="pl-8 pt-3 ">
            <WestIcon sx={{ color: "gray" }} />
          </div>
        </Link>
        <div
          className="h-10 w-28 rounded-3xl text-gray border-2 border-[gray] pt-1.5 pl-1.5 mb-1  mt-2  lg:ml-auto sm:ml-56 "
          
        >
          <ContentCopyIcon />
          Copy link{" "}
        </div>
        <div className=" pl-8 pt-3 flex flex-row text-[gray]">
          <div className="">
            <LinkedIn />
          </div>
          <div className="pl-6">
            <Twitter />
          </div>
          <div className="pl-6">
            {" "}
            <Google />
          </div>
          <div className="pl-6 mr-5">
            {" "}
            <FacebookRounded />
          </div>
        </div>
      </div>
    </>
  );
};

export default Box6;
