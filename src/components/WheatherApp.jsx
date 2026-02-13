import React from "react";

import Searchbox from "./Searchbox";
import ShowingDetails from "./ShowingDetails";
import Sidebar from "./Sidebar";

const WheatherApp = () => {
  return (
    <div className="w-full  h-full ">
      <div className="flex justify-center items-center min-h-[calc(90vh-65px)] flex-col w-full gap-10 m-auto  rounded-2xl ">
        <Searchbox />
        <ShowingDetails />
      </div>
    </div>
  );
};

export default WheatherApp;
