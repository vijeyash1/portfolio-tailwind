import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTime } from "react-timer-hook";
function Header() {
  const menuItems = [
    {
      title: "HOME",
      KEY: "/",
    },
    {
      title: "CONTACTS",
      KEY: "/contacts",
    },
    {
      title: "PROJECTS",
      KEY: "/projects",
    },
  ];
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    <div className="text-white font-mont">
      <div className="flex bg-theme justify-between items-center p-2 shadow-lg">
        <div>
          <h1 className="text-4xl font-bold">Portfolio Website</h1>
        </div>
        <div className="font-lg bg-blue-400 p-2 rounded-md">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          <span>{ampm}</span>
        </div>
        <div className="flex">
          {menuItems.map((item) => {
            return (
              <li className="list-none mx-5" key={item.KEY}>
                <Link to={`/${item.KEY}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
