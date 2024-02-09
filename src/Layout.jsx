import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const navbarRef = useRef(null);
  const [navbarHeight, setnavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      const { height } = navbarRef.current.getBoundingClientRect();
      setnavbarHeight(height);
    }
  }, []);

  return (
    <>
      <Navbar ref={navbarRef} />
      <div
        style={{
          marginTop: `${navbarHeight}px`,
          minHeight: `calc(100vh - ${navbarHeight}px)`,
        }}
      >
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
