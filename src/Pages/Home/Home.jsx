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
import refer from "../../assets/refer.svg";
import gift from "../../assets/gift.svg";
import Refer from "../../Components/Refer";
import premimum from "../../assets/premimum.svg";
import Footer from "../../Components/Footer";
import hero from "../../assets/hero.svg";
import PaymentCard from "../../Components/PaymentCard";

const Home = () => {
  return (
    <div className="gradient text-white">
      {/* Top bar */}
      <div className="mx-[6%] flex py-4">
        {/* Logo */}
        <div>
          <GiBookStorm className="text-3xl text-custom-secondary  md:text-5xl" />
        </div>
        {/* Navbar */}
        <div className="ml-16">
          <ul className="flex">
            <li>
              <a
                className="mr-2 border-b-2 border-custom-secondary p-1 text-sm font-normal md:mr-7 md:text-lg"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a className=" mr-2 p-1 text-sm md:mr-7 md:text-lg" href="/">
                Sell
              </a>
            </li>
            <li>
              <a className="mr-2 p-1 text-sm md:mr-7 md:text-lg" href="/">
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
        {/* <p className=" absolute left-[41%] border-b border-custom-secondary font-semibold italic">
          Welcome
        </p> */}
        {/* images */}
        {/* <div className="flex">
          <div className="absolute z-50 min-h-[19rem] w-full bg-slate-400 opacity-10"></div>

          <div className="mr-10">
            <img
              className="h-[15rem] w-[300px] rounded-r-full"
              src={bank}
              alt="Not found"
            />
          </div>
          <div>
            <img
              className="h-full w-[300px]  rounded-l-full"
              src={bank2}
              alt="Not found"
            />
          </div>
        </div> */}
        <div className="mx-[8%] text-lg font-semibold md:flex">
          {/* Hero Image */}
          <div className="flex-1 md:mr-5 flex">
            <img src={hero} alt="Not Found" className="my-10 h-[80%]" />
          </div>
          {/* Hero content */}
          <div className="flex-1 ">
            <p className="text-red-400 md:text-2xl lg:text-3xl">Ready To make Money ?</p>
            <p className="text-xs md:mt-3 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio quia, sed corrupti libero a quibusdam doloremque mollitia.
              Magni, eaque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nobis odio quia, sed corrupti libero a quibusdam doloremque
              mollitia. Magni, eaque.
            </p>
            <button className="mt-10 w-[100%] cursor-pointer rounded-sm bg-custom-secondary px-5 py-1 font-normal text-black outline-none">
              Join Us
            </button>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col">
            <p className="mt-8 text-center text-sm font-medium md:text-2xl">
              How We Can Help You ?
            </p>
            <div className="mt-2 flex justify-center">
              <input
                className="mr-1 rounded-sm bg-custom-main md:w-[50%] md:py-3 md:pl-5 py-1 pl-2 pr-7 text-left outline-none"
                type="text"
                placeholder="Search here ....."
              />
              <button className="cursor-pointer rounded-sm bg-custom-secondary md:w-32 px-5 font-normal text-black outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Refer friend */}
      <div className="mx-[5%] mt-28  font-semibold ">
        <div>
          <Refer
            img={refer}
            title="Refer a friend, and start"
            bigTitle="Earning"
          />
          <Refer
            img={gift}
            title="Refer 3 friends, and get a"
            bigTitle="Gift"
          />
          <Refer
            img={premimum}
            title="Make more connection, and become premimum"
            bigTitle="Member"
          />
        </div>
      </div>

      {/* Info */}
      <div>
        {/* top box 1 */}
        <div>
          <div className="mx-[6%] mt-[90px] lg:mt-[120px] flex flex-wrap justify-center">
            <Info icon={<FaHandSparkles />} text="Frequently Asked Question" />
            <Info icon={<FaPaperPlane />} text="Send Request To Support" />
            <Info icon={<TbWritingSign />} text="Step By Step Instructions" />
          </div>
        </div>
        {/* bottom box 1 */}
        <div className="mx-[6%] mt-10 pb-32">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
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

      {/* Payment Card deals */}
      <PaymentCard />

      {/* Footer */}
      <div className="border-t border-custom-grey bg-custom-footer px-5 py-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
