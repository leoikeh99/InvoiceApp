import React from "react";
import logo from "../../images/logo.svg";
import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";
import avatar from "../../images/image-avatar.jpg";

const SideBar = ({ theme, toggleTheme }) => {
  return (
    <div className="fixed top-0 left-0 tab:h-screen h-20 tab:w-sideBar w-full z-40 flex tab:flex-col justify-between items-center bg-bg3 dark:bg-bg2-dark tab:rounded-tr-20 tab:rounded-br-20 transition">
      <img src={logo} alt="" className="tab:h-auto h-full" />
      <ul className="flex tab:flex-col tab:justify-end items-center tab:w-full h-full">
        <li className="tab:py-6 px-6 tab:border-b border-gray2 tab:w-full flex justify-center cursor-pointer">
          <img
            src={theme === "light" ? moon : sun}
            alt=""
            onClick={toggleTheme}
          />
        </li>
        <li className="tab:py-6 px-6 tab:h-auto h-full tab:border-0  border-l border-gray2 tab:block flex items-center">
          <img src={avatar} alt="" className="h-10 w-10 rounded-full" />
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
