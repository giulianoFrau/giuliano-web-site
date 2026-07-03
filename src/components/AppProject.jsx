import { projects } from "../options/projects";
import { useLang } from "../i18n/LanguageContext";
import ProjectCard from "./ProjectCard";

const AppProject = () => {
  const { t } = useLang();

  return (
    <section className="section projects" id="project">
      <div className="section__head">
        <span className="section__eyebrow">{t.projects.eyebrow}</span>
        <h2 className="section__title">{t.projects.title}</h2>
        <p className="section__subtitle">{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AppProject;
