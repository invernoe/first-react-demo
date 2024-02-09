import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NavbarLink from "./NavbarLink";

const Navbar = React.forwardRef((props, ref) => {
  let navLinks = [
    {
      name: "About",
      isActive: true,
      routeLink: "/about",
    },
    {
      name: "Portfolio",
      isActive: false,
      routeLink: "/portfolio",
    },
    {
      name: "Contact",
      isActive: false,
      routeLink: "/contact",
    }
  ];

  let [navLinksState, setNavLinksState] = useState(navLinks);

  function updateActiveLink(index) {
    //deep copy of nav links to not modify state by reference
    let tmpNavLinks = [...navLinksState]

    for (let i = 0; i < tmpNavLinks.length; i++) {
      tmpNavLinks[i].isActive = (i == index? true : false);
    }

    //setting state of links to modify DOM
    setNavLinksState(tmpNavLinks);
  }

  return (
    <nav ref={ref} className="navbar navbar-dark navbar-expand-lg bg-second-color px-3 py-4 position-fixed top-0 start-0 end-0 z-3">
      <div className="container">
        <a className="navbar-brand text-uppercase fs-2 fw-bold" href="#">
          Start Framework
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
            {navLinksState.map((navItem, i) => {
              return <NavbarLink
                key={uuid()}
                navItem={navItem}
                index={i}
                updateActiveLink={updateActiveLink}
              />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
