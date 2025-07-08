// "use client";
// import React, { useEffect } from "react";

// import particlesJS from "particles.js";
// import ParticalJS from "particles.js";

// export default function ParticlesBackground() {
//   useEffect(() => {
//     if (typeof window !== "undefined" && window.particlesJS) {
//       window.ParticalJS({
//         particles: {
//           number: { value: 80 },
//           color: { value: "#ffffff" },
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: 3 },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//           },
//           move: {
//             enable: true,
//             speed: 6,
//           },
//         },
//         interactivity: {
//           events: {
//             onhover: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//         },
//       });
//     }
//   }, []);

//   return (
//     <div
//       id="particles-js"
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         zIndex: -1,
//       }}
//     />
//   );
// }
