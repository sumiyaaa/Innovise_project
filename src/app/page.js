// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="page-content hero">
//       <h1>
//         Index<sup>(01)</sup>
//       </h1>
//     </div>
//   );
// }

// import Image from "next/image"; // Keep if you plan to add images later

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-2xl w-full">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
//           Welcome to <span className="text-blue-600">Innovise!</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
//           We're thrilled to have you here. Innovise is dedicated to{" "}
//           <strong className="font-semibold">pioneering innovative solutions</strong> and{" "}
//           <strong className="font-semibold">providing cutting-edge services</strong> that transform
//           businesses and connect communities.
//         </p>
//         <p className="text-md md:text-lg text-gray-600 mb-10">
//           Explore our site to learn more about our mission, values, and how we can{" "}
//           <strong className="text-blue-600">help you achieve your goals</strong>.
//         </p>

//         {/* Optional: Call to action button */}
//         {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
//           Discover Our Services
//         </button> */}

//         {/* Optional: Innovise Logo/Image */}
//         {/* <div className="mt-10">
//           <Image
//             src="/images/innovise-logo.png" // Replace with your actual image path
//             alt="Innovise Logo"
//             width={200}
//             height={200}
//             className="mx-auto"
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// }

// import ParticlesBackground from "@/components/ParticlesBackground";

// export default function Home() {
//   return (
//     <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
//       <ParticlesBackground />
//       <div style={{ position: "relative", zIndex: 1, padding: "2rem", color: "#fff" }}>
//         <h1>Welcome to My Site</h1>
//         <p>This is the homepage with particles background</p>
//       </div>
//     </div>
//   );
// }

import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0f172a]">
      <ParticlesBackground />

      {/* Overlay Blur for Particles */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20 space-y-24">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            Welcome to <span className="text-indigo-400">Innovise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Empowering Business with Intelligent ServiceNow Solutions
          </p>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-300">About Us</h2>
          <p className="text-gray-300 ">
            Innovise is a modern IT company delivering enterprise-grade
            solutions using ServiceNow. Our mission is to help businesses
            streamline workflows, boost productivity, and achieve digital
            transformation.
          </p>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "ServiceNow Consulting",
              desc: "Customized solutions and expert guidance.",
            },
            {
              title: "ITSM Implementation",
              desc: "Streamline IT operations and support.",
            },
            {
              title: "Automation & Workflows",
              desc: "Automate repetitive tasks and reduce errors.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-bold text-indigo-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-300">
            Ready to Innovate?
          </h2>
          <p className="text-gray-300">
            Contact us today and discover how Innovise can elevate your
            business.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
}
