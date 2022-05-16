import React from "react";
import Beslider from "./Beslider"


export default function Become() {
  return (
    <>
    <div className="bg-dark hero">
      <div className="container-fluid ">
        <div className="flex flex-col text-white  md:flex-row pt-28 place-content-center">
          <div className="md:mt-40 basis-1/4 ">
            <h1 className="text-6xl md:text-3xl xl:text-6xl monofont  ">
              Become A <br />
              <span className="pink-color ">Creator</span>
            </h1>
            <p >
              Create an account and we’ll get you started in no time! More
              features, profit and freedom - with dedicate support in
              everything.
            </p>
            <button className="f px-5 py-2 text-xs font-medium rounded-md button button--moema button--text-upper">
              Create an account 
            </button>
          </div>
          <div className="basis-3/4">
            <Beslider/>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}
