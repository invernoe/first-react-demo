import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLink({ navItem, updateActiveLink, index }) {
  const { name, isActive, routeLink } = navItem;

  return (
    <li
      className="nav-item mx-2"
      onClick={() => {
        updateActiveLink(index);
      }}
    >
      <Link
        className={
          "nav-link rounded text-white text-uppercase fw-bolder" + (isActive ? " active" : "")
        }
        aria-current="page"
        to={routeLink}
      >
        {name}
      </Link>
    </li>
  );
}
