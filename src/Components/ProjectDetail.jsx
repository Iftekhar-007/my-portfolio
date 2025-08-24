import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

// --Main technology stack used

// --Brief description

// --Live project link

// --GitHub repository link (only client)

// --Challenges faced while developing the project

// --Potential improvements and future plans for the project

const ProjectDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const [project, setProject] = useState("");

  useEffect(() => {
    fetch("/site.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const item = data.find((i) => i.id.toString() === id);
        setProject(item);
      });
  }, [id]);
  return (
    <div className="lg:w-[1440px] mx-auto my-5 lg:my-20 p-6">
      <div>
        <img
          src={project.projectImage}
          alt={project.projectTitle}
          className="rounded-2xl h-[650px] w-full"
        />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black font-bold fontcormorand my-4">
        {project.projectTitle}
      </h2>

      <div>
        <h4 className="text-xl font-bold mb-2">Main Technology used :</h4>
        {project?.mainTechnologyStack?.map((tech, index) => (
          <p key={index} className="btn btn-outline mr-2">
            {tech}
          </p>
        ))}
      </div>

      <p className="text-xl fontcormorand my-2">
        {" "}
        <span className="font-bold">Brief Description :</span>{" "}
        {project.briefDescription}
      </p>

      {/* <p className="text-xl fontcormorand my-2">
        {" "}
        <span className="font-bold">Live Project Link :</span>{" "}
        <NavLink to={project.liveProjectLink} target="_blank">
          {project.liveProjectLink}
        </NavLink>
      </p>

      <p className="text-xl fontcormorand my-2">
        {" "}
        <span className="font-bold">Code :</span>{" "}
        <a href={project.githubClientLink} target="_blank">
          {project.githubClientLink}
        </a>
      </p> */}

      <div className="my-4 flex gap-4">
        {/* Live Project Button */}
        <a
          href={project.liveProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Live Site
        </a>

        {/* View Code Button */}
        <a
          href={project.githubClientLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-900 transition"
        >
          View Code
        </a>
      </div>

      <p className="text-xl fontcormorand my-2">
        {" "}
        <span className="font-bold">Challenge Faced :</span>
        {project.challengesFaced}
      </p>

      <p className="text-xl fontcormorand my-2">
        <span className="font-bold">Potential Improvements :</span>
        {project.potentialImprovements}
      </p>
    </div>
  );
};

export default ProjectDetail;
