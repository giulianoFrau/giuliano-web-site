import AppHome from "../components/AppHome.jsx";
import AppMenu from "../components/AppMenu.jsx";
import AppProject from "../components/AppProject.jsx";
import AppSkills from "../components/AppSkills.jsx";
import AppInfo from "../components/AppInfo.jsx";

function PokedexView() {
  return (
    <>
      <AppMenu />
      <AppHome />
      <AppSkills />
      <AppProject />
      <AppInfo />
    </>
  );
}

export default PokedexView;
