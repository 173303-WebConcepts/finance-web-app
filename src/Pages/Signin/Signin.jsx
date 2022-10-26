import React from "react";
import "./Signin.css";
import signin from "../../assets/signup.svg";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Signin = () => {
  return (
    <div className="md:flex md:h-screen">
      {/* Image */}
      <div className="gradient flex items-center flex-1 py-2 shadow-lg">
        <img
          src={signin}
          alt="Not Found"
          className=" mx-auto h-48 md:h-[400px] xl:h-[500px] w-full "
        />
      </div>
      {/* Auth */}
      <div className="mx-[8%] mt-5 flex-1 md:mx-[2%] md:mt-0">
        <p className=" my-4 text-xl font-bold sm:my-8 sm:text-[25px] lg:text-3xl">
          Sign up
        </p>
        <form action="">
          <div className="mb-5">
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
          <div className="mb-5">
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
        </form>

        <p className="text-right text-[11px] font-semibold text-custom-grey">
          Forgot Password?
        </p>

        <button className="gradient mt-10 w-full cursor-pointer rounded-sm py-2 font-semibold text-white sm:mt-10 md:mt-8 md:py-3">
          Continue
        </button>

        <p className="mt-1 text-center text-sm  text-custom-grey">
          Donn't have an account?{" "}
          <a href="" className="font-semibold  text-blue-500">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
