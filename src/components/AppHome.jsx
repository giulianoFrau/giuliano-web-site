import { useLang } from "../i18n/LanguageContext";
import { CV_URL } from "../config";

const TECH = [
  "Vue.js",
  "React",
  "JavaScript",
  "Sass",
  "Quasar",
  "Tailwind",
  "PrimeVue",
  "PrimeFlex",
];

const AppHome = () => {
  const { t } = useLang();

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <span className="badge">
          <span className="badge__dot" />
          {t.hero.badge}
        </span>

        <h1 className="hero__title">
          {t.hero.greeting}
          <br />
          <span className="gradient-text">{t.hero.role}</span>
        </h1>

        <p className="hero__aspiration">
          <i className="pi pi-arrow-right" /> {t.hero.aspiration}
        </p>

        <p className="hero__subtitle">{t.hero.subtitle}</p>

        <div className="hero__cta">
          <a
            className="btn btn--primary"
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
          >
            <i className="pi pi-download" /> {t.hero.cv}
          </a>
          <button
            className="btn btn--ghost"
            onClick={() =>
              document
                .getElementById("project")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <i className="pi pi-th-large" /> {t.hero.projects}
          </button>
        </div>

        <div className="hero__tech">
          {TECH.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label={t.hero.scroll}
      >
        {t.hero.scroll}
        <i className="pi pi-chevron-down" />
      </button>
    </section>
  );
};

export default AppHome;
