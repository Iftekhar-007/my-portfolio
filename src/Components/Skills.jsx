// import React from "react";

// const Skills = () => {
//   return (
//     <div>
//       <h2 className="text-4xl fotn-bold font-[philosopher] text-left text-white mb-3">
//         Skills I Have ➡️
//       </h2>
//     </div>
//   );
// };

// export default Skills;

import {
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiElementor,
  SiJetbrains,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Node.js", icon: <FaNode className="text-green-400" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-700" /> },
  { name: "Elementor", icon: <SiElementor className="text-pink-500" /> },
  { name: "JetEngine", icon: <SiJetbrains className="text-orange-500" /> },
  { name: "Crocoblock", icon: <FaWordpress className="text-green-500" /> },
];

export default function Skills() {
  return (
    <section className="">
      <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black font-bold fontcormorand mb-4">
        My Skills
      </h2>
      <div className="flex flex-wrap gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-medium fontcormorand text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
