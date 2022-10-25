import React from "react";
import "./Home.css";
import { GiBookStorm } from "react-icons/gi";
import UserAction from "../../Components/UserAction";
import bank from "../../assets/bank.jpg";
import bank2 from "../../assets/bank6.jpg";
import Info from "../../Components/Info";
import { FaHandSparkles, FaPaperPlane } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import SubInfo from "../../Components/SubInfo";

const Home = () => {
  return (
    <div className="gradient text-white">
      {/* Top bar */}
      <div className="mx-[6%] flex py-4">
        {/* Logo */}
        <div>
          <GiBookStorm className="text-3xl  text-custom-secondary" />
        </div>
        {/* Navbar */}
        <div className="ml-16">
          <ul className="flex">
            <li>
              <a
                className="mr-2 border-b-2 border-custom-secondary p-1 text-sm font-normal"
                href="/"
              >
                Buy
              </a>
            </li>
            <li>
              <a className=" mr-2 p-1 text-sm" href="/">
                Sell
              </a>
            </li>
            <li>
              <a className="mr-2 p-1 text-sm" href="/">
                Help
              </a>
            </li>
          </ul>
        </div>
        {/* Speed Dial */}
        <div>
          <UserAction />
        </div>
      </div>
      {/* Hero Section */}
      <div className="mt-6">
        <p className=" absolute left-[41%] border-b border-custom-secondary font-semibold italic">
          Welcome
        </p>
        {/* images */}
        <div className="flex">
          <div className="absolute z-50 min-h-[19rem] w-full bg-slate-400 opacity-10"></div>

          <div className="mr-10">
            <img
              className="h-full w-[275px] rounded-r-full"
              src={bank}
              alt="Not found"
            />
          </div>
          <div>
            <img
              className="h-full  rounded-l-full"
              src={bank2}
              alt="Not found"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <p className="mt-8 text-center text-sm font-medium">
              How We Can Help You ?
            </p>
            <div className="mt-2 flex justify-center">
              <input
                className="mr-1 rounded-sm bg-custom-main py-1 pl-2 pr-7 text-left outline-none"
                type="text"
                placeholder="Search here ....."
              />
              <button className="cursor-pointer rounded-sm bg-custom-secondary px-5 font-normal text-black outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div>
        {/* top box 1 */}
        <div>
          <div className="mx-[6%] mt-[90px] flex flex-wrap justify-center">
            <Info icon={<FaHandSparkles />} text="Frequently Asked Question" />
            <Info icon={<FaPaperPlane />} text="Send Request To Support" />
            <Info icon={<TbWritingSign />} text="Step By Step Instructions" />
          </div>
        </div>
        {/* bottom box 1 */}
        <div className="mx-[6%] mt-10 pb-32">
          <div className="grid grid-cols-2 gap-2">
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
