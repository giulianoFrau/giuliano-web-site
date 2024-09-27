import AppHome from "../components/AppHome.jsx";
import AppMenu from "../components/AppMenu.jsx";
import AppProject from "../components/AppProject.jsx";
import AppSkills from "../components/AppSkills.jsx";

function PokedexView() {
  return (
    <>
      <AppMenu />
      <AppHome />
      <AppSkills />
      <AppProject />
    </>
  );
}

export default PokedexView;
