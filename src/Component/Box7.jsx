import React from "react";
import Box2 from "./Box2";
const Box7 = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="mr-12 ">
          <Box2 />
        </div>
        <div className="w-96 ml-28 mt-4 sm:ml-16">
          <div className="font-bold text-2xl text-black">Comments</div>
          <div>
            <input
              type="text"
              placeholder="Write Comment"
              className=" mt-3  mb-3 h-12 w-96 pl-3 rounded-lg border-2 border-[green]"
            ></input>
          </div>
          <div className="">
            <div className="font-semibold">Harsh Gogri</div>
            <div className="pb-1 text-gray text-xs">
              Great read, very informative!
            </div>
            <div className="font-semibold">Shalini B</div>
            <div className=" pb-1 text-gray text-xs">
              I've been trying to switch to organic produce but the cost is a
              barrier. Hopefully, as more people demand organic, the price will
              come down.
            </div>
            <div className="font-semibold">Deepak Sahu</div>
            <div className=" pb-1 text-gray text-xs">
              It's so important to support local farmers and food systems, and
              organic farming is a key part of that
            </div>
            <div className="font-semibold">Arjun Patwa</div>
            <div className="pb-1 text-gray text-xs">
              As someone who grew up in a rural area and has seen the impact of
              conventional farming on environment and local communities, I
              appreciate the message of this article. We need to shift towards
              sustainable and equitable agriculture practices if we want to
              protect the planet and our health.
            </div>

            <div className="font-semibold">Rajesh Pandey</div>
            <div className="pb-1 text-gray text-xs">
              Important topic, thanks for raising awareness!
            </div>
            <div className="font-semibold">Niharika K</div>
            <div className="pb-1 text-gray text-xs">
              I love that organic farming promotes biodiversity and protects
              natural resources. We need more of this
            </div>
            <div className="font-semibold">Vivek Patil</div>
            <div className="pb-1 text-gray text-xs">
              This article does a great job of highlighting the benefits of
              organic farming without demonizing conventional agriculture.
            </div>
            <div className="font-semibold">Aryan Singh</div>
            <div className="pb-1 text-gray text-xs">
              I'm impressed by the research cited in this article about the
              health benefits of organic produce. It's important to remember
              that food is not just about calories or taste, but also about the
              nutrients and chemicals we consume. Choosing organic is a way to
              promote both personal and planetary health.
            </div>
            <div className="font-semibold">Siddhi Pandey</div>
            <div className="pb-1 text-gray text-xs">
              I appreciate the discussion on the challenges of organic farming.
              It's not a perfect solution, but it's a step in the right
              direction
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box7;
