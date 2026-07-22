import { useState, useEffect } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { CV_URL, SECTION_IDS } from "../config";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const AppMenu = () => {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "skills", label: t.nav.skills },
    { id: "project", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  const go = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <span
        className="nav__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => go("home")} aria-label="Giuliano Frau">
          <span className="gradient-text">GF</span>
          <span className="nav__logo-dot" />
        </button>

        <nav className="nav__links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav__link ${active === l.id ? "is-active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__lang" onClick={toggle} aria-label="Change language">
            <span className={lang === "it" ? "is-active" : ""}>IT</span>
            <span className="nav__lang-sep">/</span>
            <span className={lang === "en" ? "is-active" : ""}>EN</span>
          </button>
          <a className="btn btn--primary btn--sm nav__cv" href={CV_URL} target="_blank" rel="noreferrer">
            <i className="pi pi-download" /> {t.hero.cv}
          </a>
          <button
            className="nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <i className={`pi ${open ? "pi-times" : "pi-bars"}`} />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <button key={l.id} className="nav__mobile-link" onClick={() => go(l.id)}>
            {l.label}
          </button>
        ))}
        <a className="btn btn--primary nav__mobile-cv" href={CV_URL} target="_blank" rel="noreferrer">
          <i className="pi pi-download" /> {t.hero.cv}
        </a>
      </div>
    </header>
  );
};

export default AppMenu;
