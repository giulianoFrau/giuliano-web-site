import { useState, useEffect, useRef } from "react";

const SkillCard = ({ name, icon, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Disconnetti dopo aver rilevato l'entrata nel viewport
          }
        });
      },
      {
        threshold: 0.1, // La card è visibile al 10%
        rootMargin: "100px", // Inizia a osservare 100px prima che l'elemento entri nel viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`skill-card text-white p-8 sm:p-4 lg:p-8 rounded-lg flex flex-col gap-3 lg:h-72 transition-opacity duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.4}s` }} // Delay tra le card
    >
      <i className={icon + " text-5xl flex justify-center text-primary"}></i>
      <h3 className="text-center text-2xl ">{name}</h3>
      <p className="text-center mt-auto lg:mt-0 ">{description}</p>
    </div>
  );
};

export default SkillCard;
