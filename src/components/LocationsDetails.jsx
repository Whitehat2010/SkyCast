import React from "react";

const LocationsDetails = (a) => {
  console.log(a)
  return (
    <div className=" min-h-[15vh] min-w-full bg-[#00000088] rounded-2xl overflow-auto">
      <div className="text-4xl text-center pt-4 pb-4 font-bold">{a.tempC}</div>
      <div className="text-2xl font-semibold text-center">{a.location}</div>
      <div className="text-right pr-7 font-medium mt-4 mb-2">{a.tempF}</div>
    </div>
  );
};

export default LocationsDetails;
