import vetrina from "../assets/images/vetrina.webp";
import pokedex from "../assets/images/pokedex.webp";
import country from "../assets/images/country.webp";

export const projects = [
  {
    progetto: "Pokedex",
    id: 0,
    preview: pokedex,
    link_progetto: "https://react-pokedex-zeta-three.vercel.app/",
    framework: "React 18",
    tecnologie:
      "React, Redux, Tailwind CSS, PrimeReact, Axios,Rest API, React Router, Vite",
    link_repo: "https://github.com/giulianoFrau/react-pokedex.git",
  },
  {
    progetto: "Sito vetrina",
    preview: vetrina,
    id: 1,
    link_progetto: "https://sitovetrina.vercel.app/#/homePage",
    framework: "Vue 3",
    tecnologie:
      "Vue, PrimeVue, Tailwind CSS, Pinia, Vue Router, Vite, Rest API, Axios",
    link_repo: "https://github.com/giulianoFrau/vetrina.git",
  },
  {
    progetto: "Country",
    preview: country,
    id: 2,
    link_progetto: "https://react-crud-app-eosin.vercel.app/",
    framework: "React 18",
    tecnologie:
      "React, Redux, Tailwind CSS, PrimeReact, Axios,Rest API, React Router, Vite",
    link_repo: "https://github.com/giulianoFrau/react-approach.git",
  },
];
