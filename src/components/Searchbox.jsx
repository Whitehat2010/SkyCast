import { use } from "react";
import { useEffect, useState } from "react";

const Searchbox = (a) => {
  let placeName = a.props;

  const [inputValue, setinputValue] = useState("");
  function tt(e) {
    setinputValue(e);
  }
  function SubmitForm(e) {
   
    e.preventDefault();
    placeName(inputValue);
    
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          SubmitForm(e);
        }}
      >
        <div className="relative flex justify-center w-75 p-4 bg-[#ffffff6d] rounded-2xl flex-col gap-4">
          <input
            id="search-box"
            type="text"
            value={inputValue}
            placeholder="Enter The Place Name"
            className="pt-3 pb-3 pl-2 pr-2  border-2 rounded-[3px] w-full outline-none "
            onChange={(e) => {
              tt(e.target.value);
            }}
          />
          <button className="bg-[#339c87] p-3 rounded-2xl">Find Details</button>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
