import Reveal from "./Reveal";

const SkillCard = ({ name, icon, description, index }) => {
  return (
    <Reveal delay={index * 90} className="skill-card glass">
      <div className="skill-card__icon">
        <i className={icon} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </Reveal>
  );
};

export default SkillCard;
