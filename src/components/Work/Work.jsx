import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && handleCloseModal();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
           Here's a glimpse into the projects I’ve crafted — each one a step forward in my journey as a developer
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Animation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Modal Box */}
            <motion.div
              className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-4xl max-h-[90vh] relative z-10 flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center items-center p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-sm h-auto object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between p-6 lg:p-8">
                <div>
                  <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 lg:text-base text-sm">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

// in modal image and content is vertical

// import React, { useState, useEffect } from "react";
// import { projects } from "../../constants";
// import { motion, AnimatePresence } from "framer-motion";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   // Close on ESC key
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && handleCloseModal();
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   // Lock background scroll when modal is open
//   useEffect(() => {
//     if (selectedProject) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//     return () => document.body.classList.remove("overflow-hidden");
//   }, [selectedProject]);

//   return (
//     <section
//       id="work"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] font-sans relative"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-xl"
//                 loading="lazy"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
//                 {project.description}
//               </p>
//               <div className="mb-4">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal with Animation */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             onClick={handleCloseModal}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Background Overlay */}
//             <motion.div
//               className="absolute inset-0 bg-black"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.9 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* Modal Box */}
//             <motion.div
//               className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative z-10"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex justify-end p-4">
//                 <button
//                   onClick={handleCloseModal}
//                   className="text-white text-3xl font-bold hover:text-purple-500"
//                 >
//                   &times;
//                 </button>
//               </div>

//               <div className="flex flex-col">
//                 <div className="w-full flex justify-center bg-gray-900 px-4">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="w-auto max-h-[400px] object-contain rounded-xl shadow-2xl"
//                   />
//                 </div>
//                 <div className="lg:p-8 p-6">
//                   <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
//                     {selectedProject.title}
//                   </h3>
//                   <p className="text-gray-400 mb-6 lg:text-base text-xs">
//                     {selectedProject.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {selectedProject.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     <a
//                       href={selectedProject.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                     >
//                       View Code
//                     </a>
//                     <a
//                       href={selectedProject.webapp}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                     >
//                       View Live
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Work;





