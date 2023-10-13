import { Link, useLocation } from "react-router-dom";
import React from "react";
import iconMap from "./iconMap";
import "../style"

function KanbasNavigation() {
  const links = [
      " ",
      "Account",
      "Dashboard",
      "Courses",
      "Calendar",
      "Inbox",
      "History",
      "Studio",
      "Help",
  ];
  const { pathname } = useLocation();
  return (
      <div className="list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
              {iconMap[link]}
              {link}
            </Link>
        ))}
      </div>
  );
}
export default KanbasNavigation;