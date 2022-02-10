import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// for adding responsiveness to our site we need to look into tailwind breakpoints
function Header() {
  const [showmenu, setshowmenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "HOME",
      key: "/",
    },
    {
      title: "CONTACTS",
      key: "/contacts",
    },
    {
      title: "PROJECTS",
      key: "/projects",
    },
  ];
  const path = window.location.pathname;

  return (
    <div className="text-white font-mont fixed inset-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showmenu !== "md:hidden" ? "md:flex-col" : "flex-row"
        }`}
      >
        <div className=" flex justify-between w-full items-center">
          <h1 className="text-4xl font-bold md:text-xl">Portfolio Website</h1>

          <FaBars
            onClick={() => {
              showmenu === "md:hidden"
                ? setshowmenu("")
                : setshowmenu("md:hidden");
            }}
            className="3xl:hidden font-bold lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
          />
        </div>

        <div className={`flex md:hidden `}>
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 key={item.key} ${
                  item.key === path && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div
          className={`md:flex mt-5 items-start justify-start w-full
           md:flex-col lg:hidden 3xl:hidden 2xl:hidden xl:hidden ${showmenu} `}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none my-2  py-1 key={item.key} ${
                  item.key === path && "bg-white text-black rounded-md px-5"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
