import { projects } from "../options/projects";
import ProjectCard from "./ProjectCard";

const AppProject = () => {
  return (
    <div className="app__project py-8">
      <div className="app__project__content">
        <h1 className="text-center">Alcuni dei miei progetti</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              progetto={project.progetto}
              link_progetto={project.link_progetto}
              framework={project.framework}
              tecnologie={project.tecnologie}
              link_repo={project.link_repo}
              preview={project.preview}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppProject;
