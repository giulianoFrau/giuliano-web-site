import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import projectManagerImg from "../assets/img/projectManager.jpg";

const AppInfo = () => {
  return (
    <div
      className="app__info bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-5 lg:px-20"
      id="contacts"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-16 mt-16">
        <div className="lg:w-1/3 flex justify-center ">
          <Avatar
            image="https://i.postimg.cc/YCfBtQBm/dev.webp"
            size="xlarge"
            shape="circle"
            className="w-40 mb-5 lg:mb-0 "
          />
        </div>

        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-semibold  text-[#00C9D8] ">Su di me</h2>
          <p className="text-xl leading-relaxed text-white">
            Sono una persona socievole, affidabile e puntuale, con un forte
            senso di responsabilità e disponibilità verso colleghi e clienti.
            Apprendo rapidamente nuove metodologie di lavoro e mi adatto con
            facilità a contesti diversi. Affronto ogni incarico con impegno e
            determinazione, perseguendo con costanza gli obiettivi prefissati.
          </p>
        </div>
      </div>

      <div className="my-16 w-full border-b-2 border-[#00C9D8]"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 space-y-10 lg:space-y-0 lg:space-x-16">
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-semibold text-[#00C9D8]">Esperienza</h2>
          <p className="text-xl leading-relaxed text-white">
            Ho gestito l'intero ciclo di vita dei progetti, concentrandomi su
            iniziative chiave come la creazione di Landing Pages pensate per la
            Lead Generation, la progettazione di rubriche personalizzate, e lo
            sviluppo di intranet aziendali con particolare attenzione alla
            creazione di componenti dedicati alla gestione delle risorse umane e
            le richieste di ferie e permessi. Nel mio lavoro, ho utilizzato
            principalmente <span className="text-[#3fb984]">Vue.js</span> (sia
            la versione 2.7 che la 3) come framework FE, inoltre utilizzo
            tecnologie come JavaScript ES6, Sass, CSS, HTML5, MJML, Bootstrap,
            PrimeVue e PrimeFlex, tra le altre. Utilizzo Outlook, Teams, Skype,
            Slack, Gmail per la comunicazione, Trello, Confluence e Microsoft
            Loop per la gestione dei progetti, Figma per il design. GitHub,
            Gitlab e VSCode per lo sviluppo e il mantenimento del codice,
            Microsoft Clarity per l'analisi. Infine, Excel e Word per la
            gestione dei dati e dei documenti.
          </p>
          <p className="text-xl leading-relaxed text-white">
            Attualmente ricopro il ruolo di Team Leader Front End all’ interno
            di un progetto in ambito sanitario, in consulenza presso azienda
            cliente. Mi interfaccio direttamente con il Project Manager e
            partecipo alle riunioni con i clienti per la definizione delle
            priorità e delle soluzioni tecniche. Gestisco e coordino le attività
            del team Front End, assegnando e monitorando i task, supportando i
            colleghi nello sviluppo garantendo il rispetto delle scadenze,
            partecipo alle sessioni di test pre rilascio in produzione oltre che
            la collaborazione con il team Back End e la redazione di
            documentazione sia funzionale che tecnica. Anche in questo progetto,
            il framework utilizzato è{" "}
            <span className="text-[#3fb984]">Vue.js</span> insieme a{" "}
            <span className="text-[#3fb984]">Quasar</span> per la gestione delle
            componenti UI.
          </p>
          <p className="text-xl leading-relaxed text-white">
            In passato ho studiato sia
            <span className="text-[#DD0031]">&nbsp; Angular</span> che
            <span className="text-[#00C9D8]">&nbsp; React</span> da autodidatta.
            In particolare con quest'ultimo ho applicato subito le conoscenze
            acquisite nei progetti che ho presentato nella sezione precedente,
            seppur non mi è mai capitato di usarlo in ambito lavorativo, dove
            sicuramente il contesto è diverso, anche se non penso ci voglia
            tanto tempo per passare da{" "}
            <span className="text-[#3fb984]">Vue</span> a
            <span className="text-[#00C9D8]">&nbsp; React</span>, essendo per
            certi aspetti piuttosto simili.
            <br /> Questo sito vetrina è realizzato interamente con
            <span className="text-[#00C9D8]">&nbsp; React</span>.
          </p>
        </div>

        <div className="lg:w-1/3 flex justify-center ">
          <Avatar
            image="https://i.postimg.cc/NM8dHkb1/dev2.webp"
            size="xlarge"
            shape="circle"
            className="w-40 mb-5 lg:mb-0 "
          />
        </div>
      </div>

      <div className="my-16 w-full border-b-2 border-[#00C9D8]"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-16 mt-16">
        <div className="lg:w-1/3 flex justify-center ">
          <Avatar
            image={projectManagerImg}
            size="xlarge"
            shape="circle"
            className="w-40 mb-5 lg:mb-0 "
          />
        </div>

        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-semibold  text-[#00C9D8] ">
            Verso il Project Management: il mio percorso futuro
          </h2>
          <p className="text-xl leading-relaxed text-white">
            Coltivo una forte passione per la grafica e il design, elementi che
            mi hanno spinto ad approfondire e apprezzare lo sviluppo Front End.
            Con l’ esperienza maturata nel tempo, sopratutto nella mia attuale
            posizione da team leader, ho capito che vorrei orientare il mio
            percorso verso un ruolo più gestionale, che mi permetta di
            coordinare progetti in modo più ampio: dalla raccolta dei requisiti
            all’ analisi, dalla redazione della documentazione tecnica alla
            comunicazione diretta con i clienti fino alla gestione delle
            risorse. Il mio obiettivo è crescere professionalmente verso ruoli
            di Project/People Management, contribuendo con organizzazione, senso
            di responsabilità e capacità di mediazione tra team e stakeholder.{" "}
            <br></br>In breve tempo, mi piacerebbe passare dall'essere un
            frontend developer all'essere un Project Manager o un People
            Manager, con la possibilità, almeno inizialmente, di essere
            affiancato da una figura Senior che possa aiutarmi a intraprendere
            questa strada per riuscire poi a fornire un contributo significativo
            alla gestione dei progetti e delle risorse assegnate.
          </p>
        </div>
      </div>

      <div className="my-16 w-full border-b-2 border-[#00C9D8]"></div>
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-[#00C9D8]">Contatti</h2>
        <div className="flex justify-center space-x-6 mt-10">
          <Button
            id="contatti"
            icon="pi pi-linkedin"
            className="p-button-rounded p-button-lg p-button-info shadow-lg hover:text-[#00C9D8] transform hover:scale-110 transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/giuliano-frau-8728a61bb/"
              )
            }
          />
          <Button
            icon="pi pi-facebook"
            className="p-button-rounded p-button-lg p-button-primary shadow-lg hover:text-[#00C9D8] transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open("https://www.facebook.com/giuly.frau")}
          />

          <Button
            icon="pi pi-envelope"
            className="p-button-rounded p-button-lg p-button-help shadow-lg hover:text-[#00C9D8] transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open("mailto:giuliano.frau1992@gmail.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
