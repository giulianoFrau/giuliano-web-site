import { useState, useCallback } from "react";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { SOCIALS } from "../config";

const AppContact = () => {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  // Copy the address (always works) and also try to open the mail client
  // for users who have one configured.
  const handleEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SOCIALS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable — the mailto below is the fallback */
    }
    window.location.href = `mailto:${SOCIALS.email}`;
  }, []);

  const socials = [
    { icon: "pi pi-linkedin", href: SOCIALS.linkedin, label: "LinkedIn", external: true },
    { icon: "pi pi-github", href: SOCIALS.github, label: "GitHub", external: true },
  ];

  return (
    <section className="section contact" id="contact">
      <Reveal className="contact__inner">
        <span className="section__eyebrow">{t.contact.eyebrow}</span>
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="section__subtitle">{t.contact.subtitle}</p>

        <button type="button" className="btn btn--primary contact__cta" onClick={handleEmail}>
          <i className="pi pi-send" /> {t.contact.cta}
        </button>

        <span className={`contact__toast ${copied ? "is-visible" : ""}`} aria-live="polite">
          <i className="pi pi-check-circle" /> {t.contact.copied}
        </span>

        <div className="contact__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              className="social glass"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              <i className={s.icon} />
            </a>
          ))}
          <button
            type="button"
            className="social glass"
            onClick={handleEmail}
            aria-label="Email"
            title={SOCIALS.email}
          >
            <i className="pi pi-envelope" />
          </button>
        </div>
      </Reveal>

      <footer className="footer">
        <span>© {year} Giuliano Frau — {t.footer.built}</span>
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {t.footer.backToTop} <i className="pi pi-arrow-up" />
        </button>
      </footer>
    </section>
  );
};

export default AppContact;
