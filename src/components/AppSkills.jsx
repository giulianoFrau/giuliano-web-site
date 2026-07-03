import { useLang } from "../i18n/LanguageContext";
import SkillCard from "./SkillCard";
import Reveal from "./Reveal";

const AppSkills = () => {
  const { t } = useLang();

  return (
    <section className="section skills" id="skills">
      <div className="section__head">
        <span className="section__eyebrow">{t.skills.eyebrow}</span>
        <h2 className="section__title">{t.skills.title}</h2>
        <p className="section__subtitle">{t.skills.subtitle}</p>
      </div>

      <div className="skills-grid">
        {t.skills.items.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            description={skill.description}
            index={index}
          />
        ))}
      </div>

      <Reveal className="ai-card glass" delay={150}>
        <div className="ai-card__icon">
          <i className="pi pi-microchip-ai" />
        </div>
        <div className="ai-card__body">
          <h3>{t.skills.aiTitle}</h3>
          <p>{t.skills.aiText}</p>
        </div>
        <div className="ai-card__tools">
          {t.skills.aiTools.map((tool) => (
            <span key={tool} className="chip ai-chip">
              {tool}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default AppSkills;
