const SkillCard = ({ name, icon, description }) => {
  return (
    <div className="skill-card text-white p-8 sm:p-4 lg:p-8 rounded-lg flex flex-col gap-3 lg:h-72">
      <i className={icon + " text-5xl flex justify-center text-primary"}></i>
      <h3 className="text-center text-2xl ">{name}</h3>
      <p className="text-center mt-auto lg:mt-0 ">{description}</p>
    </div>
  );
};

export default SkillCard;
