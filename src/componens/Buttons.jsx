import React, { useState } from "react";

const Buttons = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="items-center text-center mt-[5%]">
      <h1 className="text-[#152C5E] font-bold w-[135px] h-[38px] opacity-[0px] text-center m-auto text-[32px]">
        Markets
      </h1>
      {/* დიდ ეკრანზე */}
      <div className="hidden lg:flex w-full justify-around mt-[100px] px-[200px] py-[0]">
        <button
          className="hover:[transition:0.5s] hover:text-[#152C5E] hover:bg-[white] w-[202px] h-[53px] pt-[15px] pr-[59px] pb-[14px] pl-[58px] gap-0 rounded-[30px] text-[white] text-[16px] font-bold bg-[#152C5E]"
          onClick={() => alert(props.name1)}
        >
          {props.name1}
        </button>
        <button
          className="hover:[transition:0.5s] hover:text-[#152C5E] hover:bg-[white] w-[202px] h-[53px] pt-[15px] pr-[59px] pb-[14px] pl-[58px] gap-0 rounded-[30px] text-[white] text-[16px] font-bold bg-[#152C5E]"
          onClick={() => alert(props.name2)}
        >
          {props.name2}
        </button>
        <button
          className="hover:[transition:0.5s] hover:text-[#152C5E] hover:bg-[white] w-[202px] h-[53px] pt-[15px] pr-[59px] pb-[14px] pl-[58px] gap-0 rounded-[30px] text-[white] text-[16px] font-bold bg-[#152C5E]"
          onClick={() => alert(props.name3)}
        >
          {props.name3}
        </button>
      </div>

      {/* პატარა ეკრანზე */}
      <div className="lg:hidden w-full flex justify-center mt-[50px]">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="hover:[transition:0.5s] hover:text-[white] hover:bg-[#152C5E] w-[202px] h-[53px] rounded-[30px] text-[#152C5E] text-[16px] font-bold bg-[white]"
          >
            Markets
          </button>
          {dropdownVisible && (
            <div className="absolute w-[200px] bg-white border border-gray-200 rounded-md shadow-lg mt-2">
              <button
                className="w-full text-left px-4 py-2 hover:bg-[#152C5E] hover:text-white transition"
                onClick={() => alert(props.name1)}
              >
                {props.name1}
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-[#152C5E] hover:text-white transition"
                onClick={() => alert(props.name2)}
              >
                {props.name2}
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-[#152C5E] hover:text-white transition"
                onClick={() => alert(props.name3)}
              >
                {props.name3}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
