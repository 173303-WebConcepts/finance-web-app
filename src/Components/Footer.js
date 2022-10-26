import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <h5 className="mb-1 text-xl font-bold">Company Name</h5>
      <span className=" text-sm text-custom-grey">
        Copyright
        <span className="mx-1">
          <AiOutlineCopyrightCircle className="inline" />
        </span>
        Company, Inc.
      </span>

      <div className="mt-7">
        <a href="" className="underline">
          Legal Stuff
        </a>
        <span className="mx-3 text-custom-grey">|</span>
        <a href="" className="underline">
          Privacy Policy
        </a>
        <span className="mx-3 text-custom-grey">|</span>
        <a href="" className="underline">
          Security
        </a>
      </div>
    </div>
  );
};

export default Footer;
