import React from "react";
import image3 from "../Images/alex-block-9p3HzaZMC4g-unsplash.jpg";
import image4 from "../Images/ant-rozetsky--c0PJUAtpSo-unsplash.jpg";
import image8 from "../Images/eduardo-prim-3u51-uLQICc-unsplash.jpg";
import image5 from "../Images/jake-gard-CetB-bTDBtY-unsplash.jpg";
import image6 from "../Images/saikiran-kesari-zSn8VuwV7Kg-unsplash.jpg";
import image7 from "../Images/who-s-denilo-xj7HV0FvSg0-unsplash.jpg";
import { Link } from "react-router-dom";

const Box3 = () => {
  return (
    <>
      <div className="sm:grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-14">
        <Link to="/page2">
          <div
            className=" ml-14 mt-14 h-96 w-96  bg-white  rounded-2xl"
            style={{ height: "547px", width: "405px" }}
          >
            <div>
              <img
                src={image3}
                alt=""
                className="h-80 w-96 rounded-t-2xl"
                style={{ width: "547px" }}
              />
              <div className="text-[gray] text-sm pl-5 pt-3">
                Sustainable Farming - April 2023
              </div>
              <div className="font-bold pt-5 pl-3">
                Organic Farming: How It Can Help Save the Planet
              </div>
              <div className="font-medium text-[gray] pl-3 pt-2">
                Learn about the benefits of organic farming and how it can help
                reduce the environmental impact of agriculture.
              </div>
              <div className="text-[green] pt-2 pl-3">Read Full Article</div>
            </div>
          </div>
        </Link>

        <div
          className=" mt-14 h-96 w-96 hover-bg-white-200 bg-white rounded-2xl sm:ml-14"
          style={{ height: "547px", width: "400px" }}
        >
          <div>
            <img
              src={image4}
              alt=""
              className="h-80 w-96 rounded-t-2xl"
              style={{ width: "547px" }}
            />
            <div className="text-[gray] text-sm pl-5 pt-3">
              {" "}
              IoT - April 2023
            </div>
            <div className="font-bold pt-5 pl-3">
              The Internet of Things and Precision Agriculture: A Match Made in
              Heaven
            </div>
            <div className="font-medium text-[gray] pl-3 pt-2">
              The Internet of Things and Precision Agriculture: A Match Made in
              Heaven
            </div>
            <div className="text-[green] pt-2 pl-3">Read Full Article</div>
          </div>
        </div>

        <div
          className=" ml-14 h-96 w-96 hover-bg-white-200 bg-white  rounded-2xl"
          style={{ height: "547px", width: "400px" }}
        >
          <div>
            <img
              src={image8}
              alt=""
              className="h-80 w-96 rounded-t-2xl"
              style={{ width: "547px" }}
            />
            <div className="text-[gray] text-sm pl-5 pt-3">
              Sustainable Farming - February 2023
            </div>
            <div className="font-bold pt-5 pl-3">
              The Business Case for Sustainable Farming: Why it Makes Financial
              Sense
            </div>
            <div className="font-medium text-[gray] pl-3 pt-2">
              Explore the economic benefits of sustainable farming practices,
              from reduced input costs.
            </div>
            <div className="text-[green] pt-2 pl-3">Read Full Article</div>
          </div>
        </div>

        <div
          className="h-96 w-96 hover-bg-white-200 bg-white rounded-2xl  sm:ml-14"
          style={{ height: "547px", width: "400px" }}
        >
          <div>
            <img
              src={image5}
              alt=""
              className="h-80 w-96 rounded-t-2xl"
              style={{ width: "547px" }}
            />
            <div className="text-[gray] text-sm pl-5 pt-3">
              Automation - March 2023
            </div>
            <div className="font-bold pt-5 pl-3">Automation - March 2023</div>
            <div className="font-medium text-[gray] pl-3 pt-2">
              Find out how automation can increase productivity on the farm, and
              learn about the latest tools and technologies.
            </div>
            <div className="text-[green] pt-2 pl-3">Read Full Article</div>
          </div>
        </div>

        <div
          className="ml-14 h-96 w-96 hover-bg-white-200 bg-white  rounded-2xl"
          style={{ height: "547px", width: "400px" }}
        >
          <div>
            <img
              src={image6}
              alt=""
              className="h-80 w-96 rounded-t-2xl"
              style={{ width: "547px" }}
            />
            <div className="text-[gray] text-sm pl-5 pt-3">
              Expert Insights - February 2023
            </div>
            <div className="font-bold pt-5 pl-3">
              Expert Insights: The coming future of Agri-Tech
            </div>
            <div className="font-medium text-[gray] pl-3 pt-2">
              Hear from top experts in the field about the latest trends and
              technologies shaping the future of Agri-tech.
            </div>
            <div className="text-[green] pt-2 pl-3">Read Full Article</div>
          </div>
        </div>

        <div
          className="h-96 w-96 hover-bg-white-200 bg-white rounded-2xl  sm:ml-14"
          style={{ height: "547px", width: "400px" }}
        >
          <div>
            <img
              src={image7}
              alt=""
              className="h-80 w-96 rounded-t-2xl"
              style={{ width: "547px" }}
            />
            <div className="text-[gray] text-sm pl-5 pt-3">
              Precision Agriculture - January 2023
            </div>
            <div className="font-bold pt-5 pl-3">
              Maximizing Crop Yields with Precision Planting
            </div>
            <div className="font-medium text-[gray] pl-3 pt-2">
              Discover how precision planting can help farmers maximize their
              crop yields while reducing waste and costs.
            </div>
            <div className="text-[green] pt-2 pl-3">Read Full Article</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box3;
