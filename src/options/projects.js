import toDoApp from "../assets/img/toDoApp.png";

// Language-neutral project data. Descriptions live in translations (projectDesc[id]).
export const projects = [
  {
    id: 0,
    name: "Pokedex",
    type: "React",
    framework: "React 18",
    preview: "https://i.postimg.cc/ncsHf3kR/pokedex.webp",
    demo: "https://react-pokedex-zeta-three.vercel.app/",
    repo: "https://github.com/giulianoFrau/react-pokedex.git",
    stack: ["React", "Redux", "Tailwind", "PrimeReact", "Axios", "REST API", "Vite"],
  },
  {
    id: 1,
    name: "Sito vetrina",
    type: "Vue",
    framework: "Vue 3",
    preview: "https://i.postimg.cc/9QhFPGdL/vetrina.webp",
    demo: "https://sitovetrina.vercel.app/#/homePage",
    repo: "https://github.com/giulianoFrau/vetrina.git",
    stack: ["Vue", "PrimeVue", "Tailwind", "Pinia", "Vue Router", "Vite"],
  },
  {
    id: 2,
    name: "Country",
    type: "React",
    framework: "React 18",
    preview: "https://i.postimg.cc/bJRZbZnG/country.webp",
    demo: "https://react-crud-app-eosin.vercel.app/",
    repo: "https://github.com/giulianoFrau/react-approach.git",
    stack: ["React", "Redux", "Tailwind", "PrimeReact", "REST API", "Vite"],
  },
  {
    id: 4,
    name: "To do App",
    type: "Vue",
    framework: "Vue 2 → 3",
    preview: toDoApp,
    demo: "https://vue-to-do-app-one.vercel.app/",
    repo: "https://github.com/giulianoFrau/Vue-to-do-app.git",
    stack: ["Vue", "Bootstrap"],
  },
];
