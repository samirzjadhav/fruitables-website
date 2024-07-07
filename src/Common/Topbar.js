import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { a } from "react-router-dom"; // Use this if you are using react-router-dom

const TopBar = () => {
  return (
    <div className="container mx-auto sm:px-4 topbar bg-[#81c408] hidden lg:block">
      <div className="flex justify-between items-center py-2">
        <div className="top-info pl-2 flex">
          <small className="mr-3 flex items-center">
            <IoLocationSharp className="mr-2 text-[#ffb524]" />
            <a to="#" className="text-white">
              123 Street, New York
            </a>
          </small>
          <small className="mr-3 flex items-center">
            <MdEmail className="mr-2 text-[#ffb524]" />
            <a to="#" className="text-white">
              Email@Example.com
            </a>
          </small>
        </div>
        <div className="top-a pr-2 flex items-center">
          <a to="#" className="text-white">
            <small className="text-white mx-2">Privacy Policy</small>
          </a>
          <a to="#" className="text-white">
            <small className="text-white mx-2">Terms of Use</small>
          </a>
          <a to="#" className="text-white">
            <small className="text-white mx-2">Sales and Refunds</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
