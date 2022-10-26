import React from "react";
import "./Signup.css";
import signup from "../../assets/signup.svg";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Signup = () => {
  return (
    <div className="md:flex md:h-screen">
      {/* Image */}
      <div className="gradient flex flex-1 items-center py-2 shadow-lg">
        <img
          src={signup}
          alt="Not Found"
          className="borde mx-auto h-48 w-full md:h-[400px] xl:h-[500px] "
        />
      </div>
      {/* Auth */}
      <div className="mx-[8%] mt-5  flex-1 md:mx-[2%] md:mt-0">
        <p className=" my-4 text-xl font-bold sm:text-[25px] lg:text-3xl">
          Sign up
        </p>
        <form action="">
          <div className="mb-5 sm:mb-7">
            <label htmlFor="" className="sm:text-2xl ">
              {<CgProfile className="mr-2 inline h-5 text-custom-secondary" />}
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-[80%]  border-b border-custom-main py-1 text-sm outline-none"
            />
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="" className="sm:text-2xl">
              {
                <AiOutlineMail className="mr-2 inline h-5 text-custom-secondary" />
              }
            </label>
            <input
              type="text"
              placeholder="E-mail"
              className="w-[80%] border-b border-custom-main py-1 text-sm outline-none"
            />
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="" className="sm:text-2xl">
              {
                <BsFillTelephoneFill className="mr-2 inline h-5 text-custom-secondary" />
              }
            </label>
            <input
              type="text"
              placeholder="Mobile number"
              className="w-[80%] border-b border-custom-main py-1 text-sm outline-none"
            />
          </div>
          <div className="mb-5 sm:mb-7">
            <label htmlFor="" className="sm:text-2xl">
              {
                <AiOutlineLock className="mr-2 inline h-5 text-custom-secondary" />
              }
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-[80%] border-b border-custom-main py-1 text-sm outline-none"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="" className="sm:text-2xl">
              {
                <AiOutlineLock className="mr-2 inline h-5 text-custom-secondary" />
              }
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-[80%] border-b border-custom-main py-1 text-sm outline-none"
            />
          </div>
        </form>

        <p className="text-[11px] font-semibold text-custom-grey sm:mt-1 sm:text-[13px]">
          By signing up, you're agree to our{" "}
          <a href="" className="text-blue-500">
            Term & Conditions{" "}
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-500">
            Privacy Policy
          </a>
        </p>

        <button className="gradient mt-10 w-full cursor-pointer rounded-sm py-2 font-semibold text-white sm:mt-10 md:mt-8 md:py-3">
          Continue
        </button>

        <p className="mt-1 text-center text-sm  text-custom-grey">
          Joined us before?
          <a href="" className="font-semibold  text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
