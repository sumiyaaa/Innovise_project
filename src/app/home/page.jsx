// // app/home/page.jsx
// import Image from 'next/image';
// import Link from 'next/link';
// // You might still want to import icons if you're using them directly
// import { CogIcon, ChartBarIcon, UsersIcon, ShieldCheckIcon, HandThumbUpIcon, LightBulbIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';


// export default function HomePage() {
//   // Data for sections (can be fetched from CMS in a real app)
//   const services = [
//     {
//       icon: <CogIcon className="h-12 w-12 text-blue-600 mb-4" />,
//       title: 'ServiceNow Implementation',
//       description: 'Seamlessly deploy ServiceNow across your organization for maximum impact.',
//     },
//     {
//       icon: <ChartBarIcon className="h-12 w-12 text-blue-600 mb-4" />,
//       title: 'ServiceNow Customization & Development',
//       description: 'Tailor ServiceNow to your unique business needs with custom solutions.',
//     },
//     {
//       icon: <UsersIcon className="h-12 w-12 text-blue-600 mb-4" />,
//       title: 'ServiceNow Managed Services',
//       description: 'Ensure optimal performance and continuous improvement with our expert support.',
//     },
//     {
//       icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />,
//       title: 'ServiceNow Advisory & Strategy',
//       description: 'Develop a robust ServiceNow roadmap aligned with your business objectives.',
//     },
//   ];

//   const whyChooseUsFeatures = [
//     {
//       icon: <HandThumbUpIcon className="h-10 w-10 text-green-500" />,
//       title: 'Certified ServiceNow Experts',
//       description: 'Our team holds extensive ServiceNow certifications and real-world experience.',
//     },
//     {
//       icon: <LightBulbIcon className="h-10 w-10 text-yellow-500" />,
//       title: 'Tailored Solutions',
//       description: 'We don’t believe in one-size-fits-all. Our solutions are custom-built for your needs.',
//     },
//     {
//       icon: <BuildingOfficeIcon className="h-10 w-10 text-purple-500" />,
//       title: 'Proven Track Record',
//       description: 'Successful implementations and satisfied clients across various industries.',
//     },
//   ];

//   const testimonials = [
//     {
//       quote: "Innovise transformed our IT service delivery. Their ServiceNow expertise is unmatched!",
//       name: "Jane Doe",
//       title: "IT Director, Global Corp",
//     },
//     {
//       quote: "Professional, efficient, and deeply knowledgeable. Innovise exceeded our expectations.",
//       name: "John Smith",
//       title: "Operations Manager, Tech Solutions",
//     },
//     {
//       quote: "A true partner in our digital journey. Highly recommend their ServiceNow services.",
//       name: "Emily White",
//       title: "Head of Digital, Innovate Co.",
//     },
//   ];

//   const partnerLogos = [
//     '/logos/servicenow-logo.svg', // Ensure these exist in your public/logos folder
//     '/logos/microsoft-logo.svg',
//     '/logos/google-logo.svg',
//     '/logos/aws-logo.svg',
//     // Add more partner/client logos here
//   ];

//   const insights = [
//     {
//       id: 1,
//       title: '5 Ways ServiceNow ITOM Can Transform Your Operations',
//       date: 'July 5, 2025',
//       imageUrl: '/insights/itom-blog.jpg', // Example image
//       slug: 'servicenow-itom-transformation',
//     },
//     {
//       id: 2,
//       title: 'The Future of Work: How ServiceNow HRSD is Redefining Employee Experience',
//       date: 'June 28, 2025',
//       imageUrl: '/insights/hrsd-blog.jpg',
//       slug: 'servicenow-hrsd-future-work',
//     },
//     {
//       id: 3,
//       title: 'Maximizing ROI with ServiceNow CSM: A Comprehensive Guide',
//       date: 'June 20, 2025',
//       imageUrl: '/insights/csm-blog.jpg',
//       slug: 'servicenow-csm-roi-guide',
//     },
//   ];

//   return (
//     <>
//       {/* Header Section */}
//       <header className="bg-white shadow-md py-4 px-6 md:px-12 fixed w-full z-50">
//         <nav className="container mx-auto flex justify-between items-center">
//           <Link href="/">
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <Image
//                 src="/innovise-logo.svg" // Replace with your company logo
//                 alt="Innovise Logo"
//                 width={120}
//                 height={30}
//                 priority
//               />
//             </div>
//           </Link>
//           <ul className="hidden md:flex space-x-8">
//             <li>
//               <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/casestudies" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Case Studies
//               </Link>
//             </li>
//             <li>
//               <Link href="/insights" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Insights
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           {/* Mobile menu button (Hamburger icon) */}
//           <div className="md:hidden">
//             <button className="text-gray-700 focus:outline-none">
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div>
//         </nav>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-24 md:py-32 flex items-center min-h-screen">
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/hero-background.jpg" // Replace with a relevant, high-quality background image
//               alt="ServiceNow Consulting"
//               layout="fill"
//               objectFit="cover"
//               quality={80}
//               className="opacity-20"
//               priority
//             />
//           </div>
//           <div className="container mx-auto px-6 md:px-12 z-10 text-center">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
//               Innovise: Unleashing the Power of ServiceNow
//             </h1>
//             <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
//               Streamline operations, enhance experiences, and drive digital transformation with our expert ServiceNow consulting and implementation services.
//             </p>
//             <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
//               <Link href="/contact">
//                 <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out shadow-lg">
//                   Get a Consultation
//                 </button>
//               </Link>
//               <Link href="/services">
//                 <button className="border border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out shadow-lg">
//                   Our ServiceNow Services
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="py-16 md:py-24 bg-gray-50">
//           <div className="container mx-auto px-6 md:px-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Our Core ServiceNow Offerings
//             </h2>
//             <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
//               Innovise provides a comprehensive suite of ServiceNow services designed to optimize your IT operations, enhance employee and customer experiences, and drive significant business value.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
//                 >
//                   <div className="flex justify-center">{service.icon}</div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-12">
//               <Link href="/services">
//                 <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out shadow-lg">
//                   Explore All Services
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us Section */}
//         <section className="py-16 md:py-24 bg-white">
//           <div className="container mx-auto px-6 md:px-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Why Innovise for ServiceNow?
//             </h2>
//             <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
//               We go beyond standard implementations, delivering innovative and impactful ServiceNow solutions that truly transform your business.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {whyChooseUsFeatures.map((feature, index) => (
//                 <div key={index} className="flex flex-col items-center p-6 rounded-lg">
//                   <div className="mb-4">{feature.icon}</div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-16 md:py-24 bg-blue-700 text-white">
//           <div className="container mx-auto px-6 md:px-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
//                   <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-sm text-gray-600">{testimonial.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Brands We Work With Section */}
//         <section className="py-12 md:py-16 bg-gray-100">
//           <div className="container mx-auto px-6 md:px-12 text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
//               Trusted by Industry Leaders
//             </h2>
//             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
//               {partnerLogos.map((logo, index) => (
//                 <div key={index} className="w-32 h-16 relative flex items-center justify-center">
//                   <Image
//                     src={logo}
//                     alt={`Partner Logo ${index + 1}`}
//                     layout="fill"
//                     objectFit="contain"
//                     className="filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Latest Insights Section */}
//         <section className="py-16 md:py-24 bg-white">
//           <div className="container mx-auto px-6 md:px-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Latest Insights & Resources
//             </h2>
//             <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
//               Stay informed with our expert articles, whitepapers, and industry analysis on ServiceNow and digital transformation.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {insights.map((insight) => (
//                 <div
//                   key={insight.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
//                 >
//                   <Image
//                     src={insight.imageUrl}
//                     alt={insight.title}
//                     width={500}
//                     height={300}
//                     objectFit="cover"
//                     className="w-full h-48"
//                   />
//                   <div className="p-6 text-left">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {insight.title}
//                     </h3>
//                     <p className="text-sm text-gray-500 mb-4">{insight.date}</p>
//                     <Link href={`/insights/${insight.slug}`}>
//                       <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         Read More
//                         <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-12">
//               <Link href="/insights">
//                 <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out shadow-lg">
//                   View All Insights
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Banner */}
//         <section className="bg-indigo-800 text-white py-16 md:py-20 text-center">
//           <div className="container mx-auto px-6 md:px-12">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               Ready to Elevate Your Business with ServiceNow?
//             </h2>
//             <p className="text-xl mb-10 max-w-3xl mx-auto">
//               Contact Innovise today to discuss your unique challenges and discover how ServiceNow can drive unparalleled growth and efficiency.
//             </p>
//             <Link href="/contact">
//               <button className="bg-white text-indigo-800 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-xl transition duration-300 ease-in-out shadow-lg">
//                 Speak to an Expert
//               </button>
//             </Link>
//           </div>
//         </section>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-gray-300 py-12 md:py-16">
//         <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="col-span-1 md:col-span-1">
//             <Link href="/">
//               <div className="flex items-center space-x-2 mb-4 cursor-pointer">
//                 <Image
//                   src="/innovise-logo-light.svg" // A light version of your logo
//                   alt="Innovise Logo"
//                   width={120}
//                   height={30}
//                 />
//               </div>
//             </Link>
//             <p className="text-sm">
//               Innovise is a leading ServiceNow consulting firm, dedicated to transforming businesses through innovative solutions and expert implementation.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               {/* Social Media Icons (replace with actual links) */}
//               <a href="#" className="text-gray-400 hover:text-white transition duration-300">
//                 <img src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition duration-300">
//                 <img src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition duration-300">
//                 <img src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/services" className="hover:text-white transition duration-300">Services</Link></li>
//               <li><Link href="/about" className="hover:text-white transition duration-300">About Us</Link></li>
//               <li><Link href="/casestudies" className="hover:text-white transition duration-300">Case Studies</Link></li>
//               <li><Link href="/insights" className="hover:text-white transition duration-300">Insights</Link></li>
//               <li><Link href="/careers" className="hover:text-white transition duration-300">Careers</Link></li>
//             </ul>
//           </div>

//           {/* ServiceNow Solutions */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">ServiceNow Solutions</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/servicenow/itsm" className="hover:text-white transition duration-300">IT Service Management (ITSM)</Link></li>
//               <li><Link href="/servicenow/itbm" className="hover:text-white transition duration-300">IT Business Management (ITBM)</Link></li>
//               <li><Link href="/servicenow/hrsd" className="hover:text-white transition duration-300">HR Service Delivery (HRSD)</Link></li>
//               <li><Link href="/servicenow/csm" className="hover:text-white transition duration-300">Customer Service Management (CSM)</Link></li>
//               <li><Link href="/servicenow/security-operations" className="hover:text-white transition duration-300">Security Operations</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Contact Us</h3>
//             <p className="text-sm">
//               123 Innovise Street, Suite 456<br />
//               City, Province, Postal Code<br />
//               Country
//             </p>
//             <p className="text-sm mt-4">
//               Email: <a href="mailto:info@innovise.com" className="hover:text-white transition duration-300">info@innovise.com</a><br />
//               Phone: <a href="tel:+1234567890" className="hover:text-white transition duration-300">+1 (234) 567-890</a>
//             </p>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
//           <p>&copy; {new Date().getFullYear()} Innovise. All rights reserved.</p>
//           <p className="mt-2">
//             <Link href="/privacy-policy" className="hover:text-white transition duration-300 mx-2">Privacy Policy</Link> |
//             <Link href="/terms-of-service" className="hover:text-white transition duration-300 mx-2">Terms of Service</Link>
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }