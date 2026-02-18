import {useState} from "react";

import Searchbox from "./Searchbox";
import ShowingDetails from "./ShowingDetails";


const WheatherApp = () => {
  const [inputValue, setInputValue] = useState("");
  function setInputValueWheather(a) {
    setInputValue(a);
    
  }
   
  return (
    <div className="w-full  h-full ">
      <div className="flex justify-center items-center min-h-[calc(90vh-65px)] flex-col w-full gap-10 m-auto  rounded-2xl ">
        <Searchbox props={setInputValueWheather} />
        <ShowingDetails data={inputValue} />
      </div>
    </div>
  );
};

export default WheatherApp;
