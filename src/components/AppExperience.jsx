import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const AppExperience = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className="section experience" id="experience">
      <div className="section__head">
        <span className="section__eyebrow">{a.eyebrow}</span>
        <h2 className="section__title">{a.title}</h2>
        <p className="section__subtitle">{a.subtitle}</p>
      </div>

      <div className="exp">
        <Reveal className="about-card glass">
          <div className="about-card__avatar">
            <img src="https://i.postimg.cc/YCfBtQBm/dev.webp" alt="Giuliano Frau" loading="lazy" />
          </div>
          <div>
            <h3 className="about-card__title">{a.aboutTitle}</h3>
            <p className="about-card__text">{a.aboutText}</p>
          </div>
        </Reveal>

        <div className="timeline">
          {a.timeline.map((item, i) => (
            <Reveal key={item.role} delay={i * 100} className="tl-item">
              <span className="tl-period chip">{item.period}</span>
              <h3 className="tl-role">{item.role}</h3>
              <p className="tl-place">{item.place}</p>
              <ul className="tl-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tl-stack">
                {item.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="goal glass">
          <span className="goal__tag chip">{a.goalTag}</span>
          <h3 className="goal__title gradient-text">{a.goalTitle}</h3>
          <p className="goal__text">{a.goalText}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default AppExperience;
