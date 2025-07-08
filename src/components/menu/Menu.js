// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// import "@/components/menu/menu.css";

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// const menuLinks = [
//   { path: "Home", label: "/home" },
//   { path: "About Us", label: "/about-us" },
//   { path: "Services", label: "/services" },
//   // { name: "Solutions", href: "/solutions" },
//   { path: "Contact", label: "/contact" },
//   // { name: "Order", href: "/order" },
// ];

// export const Menu = () => {
//   const continer = useRef();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const tl = useRef();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useGSAP(
//     () => {
//       gsap.set(".menu-link-item-holder", { y: 75 });

//       tl.current = gsap
//         .timeline({ paused: true })
//        .to(".menu-overlay", {
//   duration: 1.25,
//   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // ✅ Fixed
//   ease: "power4.inOut",
// })

//         .to(".menu-link-item-holder", {
//           y: 0,
//           duration: 1,
//           stagger: 0.1,
//           ease: "power4.inOut",
//           delay: 0.75,
//         });
//     },
//     { scope: continer }
//   );

//   useEffect(() => {
//     if (isMenuOpen) {
//        tl.current.play();
//     }else {
//        tl.current.reverse();
// }
// }, [isMenuOpen]);

//   return (
//     <div className="menu-container" ref={continer}>
//       <div className="menu-bar">
//         <div className="menu-logo">
//           <Link href="/">Innovise</Link>
//         </div>
//         <div className="menu-open" onClick={toggleMenu}>
//           <p>Menu</p>
//         </div>
//       </div>
//       <div className="menu-overlay">
//         <div className="menu-overlay-bar">
//           <div className="menu-close">
//             <Link href="/">Codegrid </Link>
//           </div>
//           <div className="menu-close" onClick={toggleMenu}>
//             <p>close</p>
//           </div>
//         </div>
//         <div className="menu-close-icon">
//           <p>&#x2715;</p>
//         </div>
//         <div className="menu-copy">
//           <div className="menu-links">
//             {menuLinks.map((link, index) => (
//               <div className="menu-link-item" key={index}>
//                 <div className="menu-link-item-holder" onClick={toggleMenu}>
//                   <Link href={link.label} className="menu-link">
//                     {link.path}
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="menu-info">
//             <div className="menu-info-col">
//               <a href="#">X &#8599;</a>
//               <a href="#">Instagram &#8599;</a>
//               <a href="#">LinkdIn &#8599;</a>
//               <a href="#">Faacebook &#8599;</a>
//             </div>
//             <div className="menu-info-col">
//               <p>@gmail.com</p>
//               <p>+92 0000000</p>
//             </div>
//           </div>
//         </div>

//         <div className="menu-preview">
//           <p>View Showreel</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import "@/components/menu/menu.css";

// const menuLinks = [
//   { path: "Home", label: "/home" },
//   { path: "Work", label: "/work" },
//   { path: "About", label: "/about-us" },
//   { path: "Contact", label: "/contact" },
//   { path: "Lab", label: "/lab" },
// ];

// const Menu = () => {
//   const container = useRef();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const tl = useRef();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useGSAP(() => {
//     gsap.set(".menu-link-item-holder", { y: 75 });
//     tl.current = gsap.timeline({ paused: true })
//       .to(".menu-overlay", {
//         duration: 1.2,
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         ease: "power4.inOut"
//       })
//       .to(".menu-link-item-holder", {
//         y: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power4.out",
//         delay: 0.3
//       });
//   }, { scope: container });

//   useEffect(() => {
//     if (isMenuOpen) {
//       tl.current.play();
//     } else {
//       tl.current.reverse();
//     }
//   }, [isMenuOpen]);

//   return (
//     <div className="menu-container" ref={container}>
//       <div className="menu-bar">
//         <div className="menu-logo">
//           <Link href="/">Innovise</Link>
//         </div>
//         <div className="menu-open" onClick={toggleMenu}>
//           <p>Menu</p>
//         </div>
//       </div>

//       <div className="menu-overlay">
//         {/* <div className="menu-overlay-bar">
//           <div className="menu-close-left">
//             <Link href="/">CODEGRID</Link>
//           </div>
//           <div className="menu-close-right" onClick={toggleMenu}>
//             <p>CLOSE</p>
//           </div>
//         </div> */}
//         <div className="menu-overlay-bar">
//     <div className="menu-logo">
//       {/* <Link href="/">CODEGRID</Link> */}
//     </div>
//     <div className="menu-close" onClick={toggleMenu}>
//       <p>CLOSE MENU</p>
//     </div>
//   </div>

//         <div className="menu-center">
//           {menuLinks.map((link, index) => (
//             <div className="menu-link-item" key={index}>
//               <div className="menu-link-item-holder" onClick={toggleMenu}>
//                 <Link href={link.label}>{link.path}</Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="menu-footer">
//           <div className="menu-info">
//             <a href="#">X ↗</a>
//             <a href="#">Instagram ↗</a>
//             <a href="#">LinkedIn ↗</a>
//             <a href="#">Behance ↗</a>
//             <a href="#">Dribbble ↗</a>
//           </div>
//           <div className="menu-contact">
//             <p>info@codegrid.com</p>
//             <p>0923 3984 23</p>
//           </div>
//           <div className="menu-preview">
//             <p>VIEW SHOWREEL</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

//is main close kaam nahi kr raha hn

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import "@/components/menu/menu.css";

// const menuLinks = [
//   { path: "Home", label: "/home" },
//   { path: "Work", label: "/work" },
//   { path: "Services", label: "/work" },
//   { path: "Solution", label: "/work" },

//   { path: "About", label: "/about-us" },
//   { path: "Contact", label: "/contact" },

// ];

// const Menu = () => {
//   const container = useRef();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const tl = useRef();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useGSAP(() => {
//     gsap.set(".menu-link-item-holder", { y: 75 });
//     tl.current = gsap.timeline({ paused: true })
//       .to(".menu-overlay", {
//         duration: 1.2,
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         ease: "power4.inOut"
//       })
//       .to(".menu-link-item-holder", {
//         y: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power4.out",
//         delay: 0.3
//       });
//   }, { scope: container });

//   useEffect(() => {
//     if (isMenuOpen) {
//       tl.current.play();
//     } else {
//       tl.current.reverse();
//     }
//   }, [isMenuOpen]);

//   return (
//     <div className="menu-container" ref={container}>
//       {/* Top bar */}
//       <div className="menu-bar">
//         <div className="menu-logo">
//           <Link href="/">
//             <img src="/images/logo.png" alt="Innovise Logo" className="h-8 w-auto" />
//           </Link>
//         </div>
//         <div className="menu-open" onClick={toggleMenu}>
//           <p>Menu</p>
//         </div>
//       </div>

//       {/* Menu overlay */}
//       <div className="menu-overlay">
//         <div className="menu-overlay-bar">
//           <div className="menu-logo">
//             {/* <Link href="/">
//               <img src="/images/logo.png" alt="Innovise Logo" className="h-8 w-auto" />
//             </Link> */}
//           </div>
//           <div className="menu-close" onClick={toggleMenu}>
//             <p style={{ fontSize: "1.5rem", cursor: "pointer" }}>✕</p>
//           </div>
//         </div>

//         {/* Center nav links */}
//         <div className="menu-center">
//           {menuLinks.map((link, index) => (
//             <div className="menu-link-item" key={index}>
//               <div className="menu-link-item-holder" onClick={toggleMenu}>
//                 <Link href={link.label}>{link.path}</Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="menu-footer">
//           <div className="menu-info">

//             <a href="#">Instagram ↗</a>
//             <a href="#">LinkedIn ↗</a>
//             <a href="#">Behance ↗</a>
//             <a href="#">Dribbble ↗</a>
//           </div>
//           <div className="menu-contact">
//             <p>hr.innovise@gmail.com</p>
//             <p>0923 3984 23</p>
//           </div>
//           <div className="menu-preview">
//             <p>VIEW SHOWREEL</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "@/components/menu/menu.css";

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
    <div className="menu-container" ref={container}>
      {/* Top bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Innovise Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      {/* Menu overlay with open class toggle */}
      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-overlay-bar">
          <div className="menu-logo">{/* Optional logo inside overlay */}</div>
          <div className="menu-close" onClick={toggleMenu}>
            <p style={{ fontSize: "1.5rem", cursor: "pointer" }}></p>
          </div>
        </div>

        {/* Center nav links */}
        <div className="menu-center">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <Link href={link.label}>{link.path}</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="menu-footer">
          <div className="menu-info">
            <a href="#">Instagram ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Behance ↗</a>
            <a href="#">Dribbble ↗</a>
          </div>
          {/* <div className="menu-contact">
            <p>hr.innovise@gmail.com</p>
            <p>0923 3984 23</p>
          </div> */}
          <div className="menu-preview">
            <p>hr.innovise@gmail.com</p>
            <p>0923 3984 23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
