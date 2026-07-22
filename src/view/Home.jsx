import AppMenu from "../components/AppMenu.jsx";
import AppHome from "../components/AppHome.jsx";
import AppStats from "../components/AppStats.jsx";
import AppSkills from "../components/AppSkills.jsx";
import AppProject from "../components/AppProject.jsx";
import AppExperience from "../components/AppExperience.jsx";
import AppContact from "../components/AppContact.jsx";
import Effects from "../components/Effects.jsx";

function HomeView() {
  return (
    <>
      <Effects />
      <AppMenu />
      <main>
        <AppHome />
        <AppStats />
        <AppSkills />
        <AppProject />
        <AppExperience />
        <AppContact />
      </main>
    </>
  );
}

export default HomeView;
