import dev from "../assets/style/images/dev.jpg";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

const AppInfo = () => {
  return (
    <div className="app__info bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-5 lg:px-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-16">
        {/* Image */}
        <div className="lg:w-1/3 flex justify-center">
          <Avatar
            image={dev}
            size="xlarge"
            shape="circle"
            className="w-40 mb-5 lg:mb-0"
          />
        </div>
        {/* Intro Text */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h2 className="text-4xl  text-[#00C9D8] ">Su di me</h2>
          <p className="text-xl leading-relaxed text-white">
            Sono una persona socievole, seria, puntuale e molto disponibile.
            Imparo rapidamente nuove metodologie di lavoro e mi impegno sempre
            al massimo per raggiungere gli obiettivi prefissati.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 w-full border-b-2 border-[#00C9D8]"></div>

      {/* Experience Section */}
      <div className="text-center lg:text-left space-y-8">
        <h2 className="text-4xl font-semibold text-[#00C9D8]">Esperienza</h2>
        <p className="text-lg leading-relaxed ">
          Gestione completa del ciclo di vita dei progetti, con un focus su
          progetti chiave come Landing Pages orientate alla Lead Generation,
          progettazione di rubriche personali e sviluppo dell'intranet
          aziendale, con attenzione alla gestione HR e alle richieste di ferie e
          permessi. Tecnologie utilizzate: Vue.js (2.7 e 3), Javascript ES6,
          Sass, CSS, HTML5, MJML, Bootstrap, PrimeVue, PrimeFlex, e altro.
        </p>
        <p className="text-lg leading-relaxed text-white">
          Attualmente sto studiando React da autodidatta, e questo sito è
          realizzato proprio con React.
        </p>
      </div>

      {/* Divider */}
      <div className="my-16 w-full border-b-2 border-[#00C9D8]"></div>

      {/* Contacts Section */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-[#00C9D8]">Contatti</h2>
        <div className="flex justify-center space-x-6 mt-10">
          <Button
            icon="pi pi-linkedin"
            className="p-button-rounded p-button-lg p-button-info shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open("https://linkedin.com/tuo-url")}
          />
          <Button
            icon="pi pi-facebook"
            className="p-button-rounded p-button-lg p-button-primary shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open("https://facebook.com/tuo-url")}
          />
          <Button
            icon="pi pi-instagram"
            className="p-button-rounded p-button-lg p-button-warning shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open("https://instagram.com/tuo-url")}
          />
          <Button
            icon="pi pi-envelope"
            className="p-button-rounded p-button-lg p-button-help shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open("mailto:tuo-email@example.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
