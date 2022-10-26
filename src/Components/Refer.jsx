import React from "react";

const Refer = (props) => {
  return (
    <div className="mx-[2%] mt-16 lg:mt-24">
      <p className="text-center text-base md:text-lg">
        {props.title}
        <span className="text-2xl text-red-400 md:text-3xl">
          {" "}
          {props.bigTitle} !
        </span>
      </p>
      <div className="flex">
        <img
          className="sm:mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] lg:mt-7"
          src={props.img}
          alt="Not found"
        />
        <p className="text-sm font-light lg:mt-12 lg:leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          laboriosam ratione unde aspernatur culpa maiores eaque quibusdam eum
          illum, nihil dolore cum doloribus quam voluptas voluptatem soluta
          alias? Unde, aspernatur.
        </p>
      </div>
    </div>
  );
};

export default Refer;
