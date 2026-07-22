import { useRef, useCallback } from "react";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const ProjectCard = ({ project, index }) => {
  const { t } = useLang();
  const cardRef = useRef(null);
  const isReact = project.type === "React";
  const desc = t.projectDesc[project.id];

  const openRepo = (e) => {
    e.stopPropagation();
    window.open(project.repo, "_blank", "noreferrer");
  };

  // Subtle 3D tilt following the pointer; inline transform wins over the CSS hover.
  const handleTilt = useCallback((e) => {
    const el = cardRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-6px)`;
  }, []);

  const resetTilt = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "";
  }, []);

  return (
    <Reveal delay={index * 90}>
      <article
        ref={cardRef}
        className={`project-card glass ${isReact ? "is-react" : "is-vue"}`}
        onClick={() => window.open(project.demo, "_blank", "noreferrer")}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
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
