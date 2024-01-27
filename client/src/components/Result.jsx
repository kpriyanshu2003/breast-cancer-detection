import React from "react";
import Image from "next/image";

function Result(props) {
  return (
    <div className="mt-32 bg-gray-300 p-16 mx-20 rounded-lg">
      <h1 className="text-4xl font-medium text-center">Result</h1>
      <div className="flex items-center  justify-evenly mt-16">
        <Image
          src={props.image}
          alt="image"
          width={200}
          height={200}
          className="w-80 h-80 aspect-square"
        />
        {/* <div className="">
          <span>Prediction Result: </span>
          <span className="text-2xl font-medium">Malignant</span>
          <br />
          <span>Symptoms: </span>
          <span className="text-2xl font-medium">None</span>
        </div> */}
      </div>
    </div>
  );
}

export default Result;
