import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Box4() {
  return (
    <>
      <div
        className="flex flex-row  bg-slate-200 pt-3">
        <div className="h-15 w-16 text-[white] p-4 m-3  font-bold text-2xl  bg-[green] rounded-2xl">
          1
        </div>
        <div className="h-15 w-16 text-[#02B469] p-4 m-3  font-bold text-2xl  bg-[white] rounded-2xl">
          2
        </div>
        <div className="h-15 w-16 text-[#02B469] p-4 m-3  font-bold text-2xl  bg-[white] rounded-2xl">
          3
        </div>
        <div className="h-15 w-16 text-[#02B469] p-4 m-3  font-bold text-2xl  bg-[white] rounded-2xl">
          4
        </div>
        <div className="h-15 w-16 text-[#44df9f] p-4 m-3  font-bold text-2xl  bg-[white] rounded-2xl">
          <ArrowBackIosIcon />
        </div>
      </div>
    </>
  );
}

export default Box4;
