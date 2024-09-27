import "../assets/style/Sito.scss";
import { Button } from "primereact/button";
const AppHome = () => {
  return (
    <>
      <div className="app__home">
        <div className="app__home__content flex flex-col items-end h-full justify-center ">
          <div className="flex flex-col gap-8">
            <div className="app__home__titles flex flex-col gap-2">
              <div className="app__home__title">
                Ciao, sono Giuliano <br className="hidden md:block" /> Frontend
                developer
              </div>
              <div className="app__home__subtitle">
                Focalizzato su design funzionali e soluzioni web efficaci.
              </div>
            </div>
            <div className="app__home__buttons flex gap-5">
              <Button
                label="Scarica il mio CV"
                className="btn-primary-outline p-2 "
              />
              <Button
                label="I miei progetti"
                className="btn-primary p-2 "
                severity="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHome;
