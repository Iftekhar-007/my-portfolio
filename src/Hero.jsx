// import React from "react";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import { NavLink } from "react-router";

// const Hero = () => {
//   return (
//     <div>
//       <div className="bg-[#003146] rounded-2xl">
//         <div className="flex flex-col items-center lg:flex-row lg:p-10">
//           <img
//             src="https://i.ibb.co.com/1f9GLz4G/e8197aa4-3800-4d9c-9a84-c24d0451ee13.jpg"
//             className="max-w-sm rounded-lg shadow-2xl flex-1"
//           />
//           <div className="flex-1 text-center">
//             <h1 className="text-5xl text-[#F9F3EF] text-center font-bold font-[philosopher]">
//               MD. IFTEKHAR HOSSAIN SHAWON
//             </h1>

//             <div className="text-left space-y-2 flex flex-col justify-center items-center">
//               <p className="pt-3 font-[philosopher] text-[#F9F3EF]">
//                 Frontend Web Developer , Wordpress Web Developer
//               </p>
//               <NavLink
//                 to="https://www.linkedin.com/in/md-iftekhar7"
//                 className="text-[#F9F3EF] flex items-center gap-3"
//                 target="_blank"
//               >
//                 <CiLinkedin size={25} />
//                 https://www.linkedin.com/in/md-iftekhar7
//               </NavLink>

//               <NavLink
//                 to="https://github.com/Iftekhar-007"
//                 className="text-[#F9F3EF] flex items-center gap-3"
//                 target="_blank"
//               >
//                 <FaGithub size={25} />
//                 https://github.com/Iftekhar-007
//               </NavLink>
//             </div>

//             <div className="flex-1 flex justify-center pt-3">
//               <button className="btn btn-outline font-[philosopher] text-[#F9F3EF] hover:text-black font-bold">
//                 RESUME
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div className="p-6">
      <div className="bg-[#003146] rounded-2xl p-4 lg:p-0">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:p-10">
          {/* Image */}
          <img
            src="https://i.ibb.co.com/1f9GLz4G/e8197aa4-3800-4d9c-9a84-c24d0451ee13.jpg"
            alt="Iftekhar Hossain Shawon"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-lg shadow-2xl flex-1 object-cover"
          />

          {/* Content */}
          <div className="flex-1 text-center px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F9F3EF] font-bold font-[philosopher] mb-4">
              MD. IFTEKHAR HOSSAIN SHAWON
            </h1>

            <div className="text-left space-y-2 flex flex-col justify-center items-center">
              <p className="pt-3 font-[philosopher] text-sm sm:text-base md:text-lg text-[#F9F3EF] text-center">
                Frontend Web Developer, WordPress Web Developer
              </p>

              {/* LinkedIn */}
              <NavLink
                to="https://www.linkedin.com/in/md-iftekhar7"
                className="text-[#F9F3EF] flex items-center gap-3 break-all"
                target="_blank"
              >
                <CiLinkedin size={30} />
                <span className="text-sm sm:text-base">
                  https://www.linkedin.com/in/md-iftekhar7
                </span>
              </NavLink>

              {/* GitHub */}
              <NavLink
                to="https://github.com/Iftekhar-007"
                className="text-[#F9F3EF] flex items-center gap-3 break-all"
                target="_blank"
              >
                <FaGithub size={25} />
                <span className="text-sm sm:text-base">
                  https://github.com/Iftekhar-007
                </span>
              </NavLink>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center pt-4">
              <button className="btn btn-outline font-[philosopher] text-[#F9F3EF] hover:text-black font-bold text-sm sm:text-base">
                RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
