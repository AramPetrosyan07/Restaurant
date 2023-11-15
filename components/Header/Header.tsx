// components/ScrollHeader.js
"use client";
import React, { useState, useEffect } from "react";

const ScrollHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledDown = prevScrollPos < currentScrollPos;

    setVisible(!(isScrolledDown && currentScrollPos > 100));
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full fixed bg-white shadow-lg ${
        visible ? "block" : "hidden"
      }`}
    >
      {/* Your header content goes here */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Your Website Header</h1>
      </div>
    </header>
  );
};

export default ScrollHeader;
