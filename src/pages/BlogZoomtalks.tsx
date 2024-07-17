import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import SimpleCard from "../components/cards/SimpleCard";
import IMAGES from "../assets/Images";

export interface IBlogZoomtalksProps { }


const BlogZoomtalks: React.FC = () => {
  return (
    <MainLayout>
      <div className="container">
        <div className="w-full h-[30vw] image-cover" style={{ backgroundImage: `url(${IMAGES.zoomtalks})` }} />
        <div className="mx-[15%] mb:mx-0">
          <SimpleCard>
            <h2>Zoomtalks</h2>
            <p className="mb-4">01.06.2024</p>
            <div className="flex mb-6">
              <a href="https://www.instagram.com/zoomtalks/" className="pr-[1rem]" target="_blank"><FaInstagram size='20px' /></a>
            </div>
            <p className="font-bold mb-2">
              Anul 2020 a reprezentat pentru teatrul independent o provocare, o provocare cu care unii dintre noi s-au obișnuit și care ulterior s-a transformat într-un stil de viață. Părea că nimic nu are sens, 70%, 30% ...închis! Acest - închis - ne-a făcut să ne întrebăm, să ne gândim că totul se întâmplă cu un motiv.
              Ei bine, ZoomTalks credem noi, a fost acest motiv.
            </p>
            <p className="mb-2">Într-o seară, dintr-o idee și pentru că orice se mutase în online, pe platforma Zoom, am decis să facem ceva autentic și valoros pentru adolescenți. Și așa s-a născut ZoomTalks! Cu un share al unui prieten, un like al unui coleg și cu multă încredere că vom reuși să schimbăm ceva.
              Zoomtalks este un proiect ce își propune să creeze cât mai multe conexiuni între generații. Un concept care își dorește să aducă adolescentul pasionat de teatru și film mai aproape de oamenii din domeniul artistic și care să îl determine să comunice despre pasiunea lui, căutând astfel răspunsurile la întrebările pe care nu le găsește în online.
            </p>
            <p>
              Totul se întâmplă într-un video call pe platforma ZOOM care durează în medie 60 de minute unde povestim despre viața în facultate, dar și cea de după facultate, despre proiecte, repetiții, filmări și tot ce ține de parcursul unui artist într-o lume atât de mare.
              Pe lângă subiectele despre facultate, scenă și zilele de filmare,  vorbim și despre frica de penibil, emoțiile constructive, curajul, ambiția, lipsa comunicării cu familia și multe alte etape cu care un adolescent se întâlnește pe parcursul evoluției personale. Sună cunoscut? ...
            </p>

            <h6 className="mt-4">CĂLĂTORIA</h6>
            <p className="mb-2">
              Am pornit încrezători într-o călătorie virtuală și am reușit să ajungem în casele a peste 150 de adolescenți din peste 22 orașe din România și cu peste 20 de artiști invitați: actori, regizori, scenografi, dansatori și directori de casting. Artiști care ne-au susținut și ne-au fost alături, au răspuns cu drag invitației noastre și cu mare interes întrebărilor din online.
              Artiști ce au absolvit universități de teatru și film din România, dar și din afară, oameni faini care au povestit la o seară de ceai, experiențele lor. Experiențe din care fiecare adolescent a reținut și a pus în bagajul personal informații ce au creat un nou orizont, plecând astfel din întâlnirile noastre cu motivație, curaj și ambiție.
            </p>

            <h6 className="mt-4">ECHIPA</h6>
            <p className="mb-2">
              În prezent, proiectul se bucură de o comunitate mare de adolescenți cu care păstrăm legătura pe un grup de Whatsapp, dar și pe pagina oficială de Instagram și Facebook.
              Următorul capitol în această poveste l-au scris chiar ei, adolescenții! Pentru că ne-am dorit să creștem comunitatea, la începutul lunii noiembrie, proiectul ZoomTalks și-a deschis porțile și pentru cei mai puțini hotărâți în tainele viitorului și aici ne referim la adolescenții care au terminat liceul și nu s-au decis încă la ce facultate să aplice. Știm cu toții că unele momente necesită timp de gândire, iar decizia cea mai bună este luată la momentul potrivit, așa că suntem deschiși să ajutăm!
            </p>

            <h6 className="mt-4">zoomCLASS</h6>
            <p className="mb-2">
              Nu ne-am gândit vreodată că vom ajunge până aici! Am conectat oameni, orașe și generații și am reușit să ducem ZoomTalks și in locuri în care accesul la domeniul cultural este anevoios și plin de obstacole și așa ne-a venit în gând: zoomCLASS!
              zoomCLASS e un alt capitol prin care adolescenții au avut acces la diferite ateliere de dezvoltare personală redate prin jocuri teatrale care dezvoltă:
            </p>

            <ul className="list-disc pl-8">
              <li>încrederea în sine;</li>
              <li>inteligența emoțională;</li>
              <li>abilități de comunicare și lucru în echipă;</li>
              <li>creativitatea;</li>
              <li>originalitatea;</li>
              <li>spontaneitatea;</li>
            </ul>

            <h6 className="mt-4 mb-2"> CE SPUN ADOLESCENȚII?</h6>
            <div className="divide-y divide-orange">
              <div className="pb-4">
                <p className="mb-2">
                  <span className="italic"> „Pentru mine, Zoom Talks înseamnă pasiune pentru tot ce înseamnă lumea teatrului si a filmului. Am învățat foarte multe lucruri noi si am primit multe sfaturi care o sa ma ajute cu siguranta. In intalnirile organizate pe zoom am cunoscut artisti foarte deschisi care ne-au raspuns sincer la toate întrebările care le-au fost adresate, oferindu-ne multe sfaturi si povestindu-ne despre facultate si proiectele din care au facut parte. Mă bucur că am participat la Zoom Talks și aș repeta cu drag această experiență. Am cunoscut o gașcă super mișto. Best team!”</span>
                </p>
                <p className="w-full flex">
                  <span className="ml-auto">Jaqueline Stan</span>
                </p>
              </div>
              <div className="py-4">
                <p className="mb-2">
                  <span className="italic"> „Este pentru prima dată când particip la un zoomtalks și pot sincer descrie experiența ca fiind una genială. Pe lângă faptul că întâlnirile au fost utile în prezentarea unui ansamblu a ce presupune această meserie, au avut de fiecare dată un vibe super bun și mi-a făcut mare plăcere să iau parte la acest proiect. ”</span>
                </p>
                <p className="w-full flex">
                  <span className="ml-auto"> Raluca Avadanei</span>
                </p>
              </div>

              <div className="py-4">
                <p className="mb-2">
                  <span className="italic"> „Workshopul m-a ajutat sa-mi pun la punct o anumita rutina atunci cand vine vorba despre etapele unei incalziri, oferindu-mi o usurinta de a intra in pielea personajului. Cu ajutorul Liei am descoperit lucruri despre personaj pe care pana acum nu le vazusem, iar exercitiile pe care le-am facut cu textul m-au ajutat sa-mi clarific gandurile si sa fac replicile mult mai specifice si toate astea intr-o atmosfera foarte relaxanta ce ne-a oferit libertatea de a explora monologurile. A fost o initiativa foarte misto din partea lui Robert, in special in aceste luni in care cu totii cred ca simteam ca am intrat intr-o monotonie care e destul de daunatoare unui actor. Pe mine m-a ajutat mult si sa regasesc entuziasmul care e de obicei intr-o sala de repetitii. In acelasi timp cred ca mi-a mai si largit perspectivele cand vine vorba despre ce inseamna sa fii actor, ca foarte mult conteaza si experientele de viata si ce are fiecare de adus unui rol.” </span>
                </p>
                <p className="w-full flex">
                  <span className="ml-auto"> Ioana Diaconescu - zoomClass</span>
                </p>
              </div>
            </div>

            <p><strong>ZoomTalks</strong> este despre conexiunea între generații:</p>

            <ul className="list-disc pl-8">
              <li>26 de întâlniri</li>
              <li>18 orașe</li>
              <li>peste 150 de adolescenți</li>
              <li>peste 20 de invitați</li>
              <li>peste 50 de ore petrecute împreună</li>
              <li>peste 100 de povești și experiențe împărtășite</li>
              <li>și un număr necunoscut al amintirilor create</li>
            </ul>

            <p className="mt-4">Articol scris de <strong>Marilena Adam</strong></p>

          </SimpleCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogZoomtalks;