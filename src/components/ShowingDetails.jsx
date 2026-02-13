import React from "react";
import LocationsDetails from "./LocationsDetails";

const ShowingDetails = () => {
  return (
    <>
      <div className="min-h-75 w-[90%] bg-amber-50 rounded-2xl ">
        <div className="flex flex-wrap ">
          <div>
            <LocationsDetails />
            <div></div>
          </div>
          <div>
            <div className="">
              
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowingDetails;
