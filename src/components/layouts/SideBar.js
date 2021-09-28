import React from "react";
import logo from "../../images/logo.svg";
import moon from "../../images/icon-moon.svg";
import avatar from "../../images/image-avatar.jpg";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen z-40 flex flex-col justify-between items-center bg-bg3 rounded-tr-20 rounded-br-20">
      <img src={logo} alt="" />
      <ul className="flex flex-col items-center w-full">
        <li className="py-6 border-b border-gray2 w-full flex justify-center cursor-pointer">
          <img src={moon} alt="" />
        </li>
        <li className="py-6">
          <img src={avatar} alt="" className="h-10 w-10 rounded-full" />
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
