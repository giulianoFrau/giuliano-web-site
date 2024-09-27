import { skills } from "../options/skills";
import SkillCard from "./SkillCard";
const AppSkills = () => {
  return (
    <div className="app__skills py-6">
      <div className="app__skills__content">
        <h1 className="text-center">Le mie skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  justify-center">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppSkills;
