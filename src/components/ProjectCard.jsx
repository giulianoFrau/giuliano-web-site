import { Image } from "primereact/image";

const ProjectCard = ({
  progetto,
  link_progetto,
  framework,
  tecnologie,
  link_repo,
  preview,
}) => {
  return (
    <div
      className={`project-card project-card-${framework} cursor-pointer hover:scale-105 transition-all duration-100 text-white p-8 sm:p-4 lg:py-8 rounded-lg flex flex-col gap-3  transition-opacity duration-500  `}
      onClick={() => window.open(link_progetto)}
    >
      <Image src={preview} alt="Image" />
      <h3
        className={`text-center text-2xl ${
          framework === "React 18" ? "text-primary" : "text-vue"
        }`}
      >
        {progetto}
      </h3>
      <p className="text-center">
        Framework utilizzato: <br />
        <span
          className={`text-${framework === "React 18" ? "primary" : "vue"}`}
        >
          {framework}
        </span>
      </p>
      <p className="text-center">
        Tecnologie utilizzate: <br />
        <span
          className={`text-${framework === "React 18" ? "primary" : "vue"}`}
        >
          {tecnologie}
        </span>
      </p>
      <p className="text-center mt-auto lg:mt-0 ">
        Repository: <br />
        <span
          className={`text-${framework === "React 18" ? "primary" : "vue"} `}
        >
          {link_repo}
        </span>
      </p>
    </div>
  );
};

export default ProjectCard;
