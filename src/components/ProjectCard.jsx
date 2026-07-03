import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const ProjectCard = ({ project, index }) => {
  const { t } = useLang();
  const isReact = project.type === "React";
  const desc = t.projectDesc[project.id];

  const openRepo = (e) => {
    e.stopPropagation();
    window.open(project.repo, "_blank", "noreferrer");
  };

  return (
    <Reveal delay={index * 90}>
      <article
        className={`project-card glass ${isReact ? "is-react" : "is-vue"}`}
        onClick={() => window.open(project.demo, "_blank", "noreferrer")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && window.open(project.demo, "_blank", "noreferrer")}
      >
        <div className="project-card__media">
          <img src={project.preview} alt={project.name} loading="lazy" />
          <span className="project-card__open">
            {t.projects.open} <i className="pi pi-arrow-up-right" />
          </span>
        </div>

        <div className="project-card__body">
          <div className="project-card__head">
            <h3 className="project-card__title">
              <span className="project-card__dot" />
              {project.name}
            </h3>
            <span className="project-card__fw">{project.framework}</span>
          </div>

          <p className="project-card__desc">{desc}</p>

          <div className="project-card__stack">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-card__footer">
            <span className="project-card__link">
              {t.projects.open} <i className="pi pi-external-link" />
            </span>
            <button className="project-card__repo" onClick={openRepo} aria-label={t.projects.code}>
              <i className="pi pi-github" /> {t.projects.code}
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default ProjectCard;
