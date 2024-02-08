import React from "react";
import { TbTemplate } from "react-icons/tb";
import { MdPerson } from "react-icons/md";

export const SideBar = () => {
  return (
    <>
      <div className="bg-sky-500/50 w-[100%] ">
        <div className="flex gap-3 mt-3 ">
          <div className="w-[50px] h-[50px] bg-gradient-to-r from-pink-500 to-yellow-500 ml-3 rounded-md flex items-center justify-center text-[25px] text-white font-bold">
            F
          </div>
          <div className="flex flex-col gap-1">
            <label className="cursor-pointer">Actividades</label>
            <label>Free</label>
          </div>
        </div>
        <nav className="ml-[20px] mt-[20px]  w-[300px] flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <TbTemplate />
            Boards
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <MdPerson />
            Members
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <MdPerson />
            Members
          </div>
        </nav>
      </div>
    </>
  );
};
+0;
