import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";
const SideBar = () => {
  const NAV_LINKS = [
    {
      link: "/",
      label: "Home",
      icon: <GoHomeFill />,
    },
    {
      link: "/category",
      label: "Category",
      icon: <MdDashboard />,
    },
    {
      link: "/games",
      label: "Games",
      icon: <MdDashboard />,
    },
    {
      link: "/wishlist",
      label: "WIshlist",
      icon: <FaHeart />,
    },
    {
      link: "/friends",
      label: "Friends",
      icon: <BsFillPeopleFill />,
    },
  ];
  return (
    <div className="col-span-2">
      <div className="py-5 px-10 gap-3 h-screen sticky inset-0  flex flex-col bg-black/30 items-start">
        <Logo />
        {NAV_LINKS.map((navlink, idx) => (
          <NavLink key={idx} {...navlink} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
