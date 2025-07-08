"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "Home", label: "/home" },
  { path: "Work", label: "/work" },
  { path: "Services", label: "/services" },
  { path: "Solution", label: "/solution" },
  { path: "About", label: "/about" },
  { path: "Contact", label: "/contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.3,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="relative z-10" ref={container}>
      {/* Top bar */}
      <div className="fixed top-0 left-0 w-full py-8 flex justify-between items-center z-100 bg-transparent">
        <div className="h-24 w-auto">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Innovise Logo"
              className="h-32 w-auto object-contain"
            />
          </Link>
        </div>
        <div
          className="text-red-500 cursor-pointer text-lg font-bold"
          onClick={toggleMenu}
        >
          <p>Menu</p>
        </div>
      </div>

      {/* Menu overlay with open class toggle */}
      <div
        className={`fixed top-0 left-0 bg-green-400 w-screen h-screen p-8 z-99 flex flex-col justify-between clip-path-polygon overflow-hidden opacity-0 pointer-events-none transition-opacity duration-400 ease-linear ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <div className="flex justify-between items-center p-8">
          <div className="h-8 w-auto">{/* Optional logo inside overlay */}</div>
          <div
            className="text-black cursor-pointer text-2xl font-bold"
            onClick={toggleMenu}
          >
            <p>&#x2715;</p>
          </div>
        </div>

        {/* Center nav links */}
        <div className="flex flex-col gap-3 pl-24">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <Link href={link.label}>
                  <p className="text-6xl font-medium text-black uppercase hover:text-gray-600 transition-colors duration-300">
                    {link.path}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end text-xs uppercase px-8 py-8 flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <a href="#">Instagram ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Behance ↗</a>
            <a href="#">Dribbble ↗</a>
          </div>
          <div className="flex flex-col gap-1">
            <p>hr.innovise@gmail.com</p>
            <p>0923 3984 23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
