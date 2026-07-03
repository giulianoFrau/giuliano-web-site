import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const AppStats = () => {
  const { t } = useLang();

  return (
    <section className="facts-section">
      <div className="facts">
        {t.facts.map((fact, i) => (
          <Reveal key={fact.label} delay={i * 90} className="fact glass">
            <div className="fact__value gradient-text">{fact.value}</div>
            <div className="fact__label">{fact.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default AppStats;
