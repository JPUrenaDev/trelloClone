import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { TbBellRinging2 } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { RxMagnifyingGlass } from "react-icons/rx";

export const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };

  const handleBur = () => {
    setClicked(false);
  };
  return (
    <>
      <nav className="bg-white flex text-[22px]  items-center justify-between h-[60px] py-[20px]  ">
        <ul className="flex items-center p-2 gap-2 ">
          <li>
            <CgMenuGridR className="hover:bg-slate-300 cursor-pointer" />
          </li>
          <li className="w-[100px] ">
            <img
              src="./public/img/Trello-logo-blue.svg.png"
              className=" hover:bg-slate-300 ] cursor-pointer hover:rounded px-2 py-2 "
              alt="Trello Logo"
            />
          </li>

          <li className="hover:bg-slate-300 cursor-pointer flex items-center gap-1 hover:rounded px-2 py-1">
            Workspaces <IoIosArrowDown />
          </li>
          <li className="hover:bg-slate-300 cursor-pointer flex items-center gap-1 hover:rounded px-2 py-1">
            Recent <IoIosArrowDown />
          </li>
          <li className="hover:bg-slate-300 cursor-pointer flex items-center gap-1 hover:rounded px-2 py-1">
            Starred <IoIosArrowDown />
          </li>
          <li className="hover:bg-slate-300 cursor-pointer flex items-center gap-1 hover:rounded px-2 py-1">
            More <IoIosArrowDown />
          </li>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 h-[40px] w-[40px] focus:outline-none focus:ring focus:ring-violet-300 text-white flex justify-center items-center rounded">
            +
          </button>
        </ul>

        <div className="flex items-center gap-5 mr-2 ">
          <div className="flex relative">
            <input
              placeholder="Search"
              onClick={handleClick}
              onBlur={handleBur}
              className={`${!clicked ? "w-[300px]" : "w-[1000px]"} px-[30px] rounded border-2`}
            ></input>
            <RxMagnifyingGlass className="absolute left-2 top-2 " />
          </div>

          <TbBellRinging2 className="hover:rounded-full cursor-pointer   hover:bg-slate-300 " />

          <FaRegQuestionCircle className="hover:rounded-full cursor-pointer hover:bg-slate-300" />
          <RxAvatar className="bg-yellow-300 hover:rounded-full cursor-pointer hover:bg-slate-300 rounded-full" />
        </div>
      </nav>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
};
