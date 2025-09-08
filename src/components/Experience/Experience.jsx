
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences , images} from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[6vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => {
          // ref + inView for animation trigger
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, amount: 0.2 });

          // Direction-aware animation
          const fromLeft = index % 2 === 0;
          const initialX = fromLeft ? -80 : 80; // smaller offset for smoother entry

          return (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row items-center mb-20 ${
                fromLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-200 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={images[1]}
                  alt={`${experience.company} logo`}
                  className="w-3/4 h-3/4 object-contain rounded-full"
                />
              </div>

              {/* Content Section with Smooth Animation */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: initialX }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                  delay: index * 0.15, // smoother stagger
                }}
                className={`w-full sm:w-5/12 p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md 
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  fromLeft ? "sm:ml-auto" : "sm:mr-auto"
                } mt-20 sm:mt-0`}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* Company Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Role, Company Name, and Date */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;






