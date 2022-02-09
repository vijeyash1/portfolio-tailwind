import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <div className="text-white font-mont">
      <div className="flex bg-theme justify-between items-center p-2 shadow-lg">
        <div>
          <h1 className="text-4xl font-bold">VIJESH</h1>
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
