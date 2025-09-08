// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {

//   // className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "../../constants";
import  { images }  from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => {
          // ref + inView for animation trigger
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, amount: 0.2 });

          // Direction-aware animation
          const fromLeft = index % 2 === 0;
          const initialX = fromLeft ? -80 : 80;

          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center mb-20 ${
                fromLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4  border-[#8245ec] w-10 h-10 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10"
              >
                <img
                  src={images[0]}
                  alt={`Logo of ${edu}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Animated Content Section */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: initialX }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                  delay: index * 0.15,
                }}
                className={`w-full sm:w-5/12 p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  fromLeft ? "sm:ml-auto" : "sm:mr-auto"
                } mt-20 sm:mt-0`}
              >
                {/* Flex container for logo + text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo */}
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={`Logo of ${edu.school}`}
                      className="w-full h-full object-scale-down"
                    />
                  </div>

                  {/* Degree, School, Date */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300 mt-1">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                    {edu.gradingSystem === "CGPA" ? (
                      <p className="mt-4 text-gray-400 font-bold">CGPA: {edu.grade}</p>
                    ) : (
                      <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                    )} 
                  </div>
                </div>

                {/* Grade + Description */}
                {/* <p className="mt-4 text-gray-400 font-bold">CGPA: {edu.grade}</p> */}
                {/* <p className="mt-2 text-gray-400">{edu.desc}</p> */}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;



 

 

