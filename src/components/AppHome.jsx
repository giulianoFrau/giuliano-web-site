import "../assets/style/Sito.scss";
//import sfondo from "../assets/style/images/sfondo.jpg";
const AppHome = () => {
  return (
    <>
      <div className="app__home">
        <div className="app__home__content flex items-center h-full">
          <div className="flex flex-col gap-2">
            <div className="app__home__title">
              Ciao, il mio nome è Giuliano{" "}
            </div>
            <div className="app__home__subtitle">
              e sono un frontend developer{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHome;
