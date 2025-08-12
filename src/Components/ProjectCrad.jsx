import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const ProjectCrad = () => {
  const [projects, setProjects] = useState("");

  useEffect(() => {
    fetch("/site.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  //   console.log(projects);
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black font-bold fontcormorand mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id}>
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img src={project.projectImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title fontcormorand">
                    {project.projectTitle}
                  </h2>
                  <p className="fontcormorand">{project.briefDescription}</p>
                  <div className="card-actions justify-end">
                    <NavLink
                      to={`/projects/${project.id}`}
                      className="btn bg-black text-white fontcormorand"
                    >
                      View Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCrad;
