import { Link, useLocation } from "react-router-dom";
import React from "react";
import iconMap from "./iconMap";
import styles from '../style';

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
        {links.map((link, index) => {
          const isActive = pathname.includes(link);
          const combinedStyles = {
            ...styles.parentNavLink,
            color: isActive ? "red" : "white",
          };
          return (
              <Link
                  key={index}
                  to={`/Kanbas/${link}`}
                  className={`list-group-item p-2 border-0 ${isActive && "active"} ${isActive && "bg-white"}`}
                  style={combinedStyles}>

                {iconMap[link]}
                {link}
              </Link>
          );
        })}
      </div>
  );
}
export default KanbasNavigation;
