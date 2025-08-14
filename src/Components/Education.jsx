// import React from "react";
// import { CiLinkedin } from "react-icons/ci";
// import { FaBrain, FaGithub, FaUniversity } from "react-icons/fa";
// import { NavLink } from "react-router";

// const Education = () => {
//   return (
//     <div>
//       <div className="bg-[#003146] rounded-2xl">
//         <div className="flex flex-col items-center lg:flex-row-reverse lg:p-10">
//           <img
//             src="https://i.ibb.co.com/39m2MR01/267246021-1350666592070209-883029460890145929-n.jpg"
//             className="max-w-sm rounded-lg shadow-2xl flex-1"
//           />
//           <div className="flex-1 text-center p-10">
//             <h1 className="text-5xl text-[#F9F3EF] text-center font-bold font-[philosopher]">
//               My Educational Qualifications
//             </h1>

//             <div className="text-left space-y-2 flex flex-col justify-center items-center">
//               <p className="pt-3 font-[philosopher] text-[20px] text-[#F9F3EF] flex items-center gap-3">
//                 BSc in Psychology <FaBrain />
//               </p>
//               <p className="font-[philosopher] text-[20px] text-[#F9F3EF] ">
//                 Final Year
//               </p>
//               <p className="font-[philosopher] text-[20px] text-[#F9F3EF] flex items-center gap-3">
//                 National University, Bangladesh <FaUniversity />
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from "react";
import { FaBrain, FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div className="p-6">
      <div className="bg-linear-to-r from-base-200 to-gray-100 shadow-sm rounded-2xl">
        <div className="flex flex-col items-center gap-6 lg:flex-row-reverse lg:p-10">
          <img
            src="https://i.ibb.co.com/1f9GLz4G/e8197aa4-3800-4d9c-9a84-c24d0451ee13.jpg"
            alt="Education"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-lg shadow-2xl flex-1 object-cover"
          />
          <div className="flex-1 text-center p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold fontcormorand mb-6">
              My Educational Qualifications
            </h1>

            <div className="text-left space-y-2 flex flex-col justify-center items-center">
              <p className="pt-3 fontcormorand text-base sm:text-lg md:text-xl text-black flex items-center gap-3">
                BSc in Psychology <FaBrain />
              </p>
              <p className="fontcormorand text-base sm:text-lg md:text-xl text-black flex items-center gap-3">
                Final Year <FaGraduationCap />
              </p>
              <p className="fontcormorand text-base sm:text-lg md:text-xl text-black flex items-center gap-3">
                National University, Bangladesh <FaUniversity />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
