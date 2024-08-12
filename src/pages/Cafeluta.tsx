import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import SimpleCard from "../components/cards/SimpleCard";
import IMAGES from "../assets/Images";

export interface ICafelutaProps { }


const Cafeluta: React.FC = () => {
  return (
    <MainLayout>
      <section>
        <div>
          <div className="container">
            {/* <div className="w-full h-[30vw]  image-cover" style={{ backgroundImage: `url(${IMAGES.zoomtalks})` }} /> */}
            <div className="mx-[15%] mb:mx-0">
              <SimpleCard>
                <h2>Început de Buluc</h2>
                <p className="mb-4">20.11.2021</p>

                <h6 className="font-bold mb-2">
                <span className="text-red">Oamenii:</span> Hai să facem cunoștință!
                </h6>
                <p className="mb-2">
                  <span className="font-bold text-orange">Buluc: </span>sunt o companie independentă de artiști înființată în anul 2021, care își propune să activeze în domeniul artistic atât prin producții teatrale cât și prin activități ce presupun dezvoltarea personală și educația prin artă.
                </p>

                <h6 className="font-bold mb-2">
                <span className="text-red">O:</span> Care sunt pasiunile tale?
                </h6>
                <p className="mb-2">
                <span className="font-bold text-orange">B: </span> Am avut mereu o pasiune pentru artă, motiv pentru care am și ales să încep să lucrez în acest sens. Îmi place teatrul, poezia, dansul, toate aceste ramuri ale artei unde se poate lucra în echipă. Am fost mereu interesat de toate lucrurile pe care le poți face dacă ai oamenii potriviți lângă tine. Și asta mi-am și propus să fac. Sa găsesc oameni pasionați, frumoși, de la care să învăț cât mai multe lucruri și cu care să pot face cât mai multe lucruri. 
                </p>

                <h6 className="font-bold mb-2">
                <span className="text-red">O:</span> Și, ai găsit oamenii potriviți? 
                </h6>
                <p className="mb-2">
                  <span className="font-bold text-orange">B: </span>Conceptul nostru are la bază ideea de echipă, prin actul creației ce se poate realiza doar alături de oameni ce se întâlnesc, simt, gândesc și se inspiră reciproc. Eu am găsi acești oameni. Am reușit să adun în acest Buluc niște oameni absolut minunați și talentați! 
                </p>

                <h6 className="font-bold mb-2">
                <span className="text-red">O:</span> Ce planuri ai pentru viitor?
                </h6>
                <p className="mb-2">
                  <span className="font-bold text-orange">B: </span>Visez la lucruri frumoase. Am ”sertarul” plin de vise pe care îmi doresc la un moment dat să le transpun în realitate.
                </p>

                <h6 className="font-bold mb-2">
                <span className="text-red">O:</span> Care este misiunea ta? Ce vrei să dai mai departe?
                </h6>
                <p className="mb-2">
                  <span className="font-bold text-orange">B: </span>Misiunea noastră este să adunăm #buluc oameni ce simt, gândesc și se inspiră reciproc. Ne dorim să creăm conexiuni autentice, să încurajăm creativitatea și să inspirăm creșterea personală și culturală în cadrul unei experiențe de care ți se face dor.
                </p>

                <h6 className="font-bold mb-2">
                <span className="text-red">O:</span> Unde te găsim?
                </h6>
                <p className="mb-2">
                  <span className="font-bold text-orange">B: </span>B: Într-un loc special. Într-o casă cu trăsături burgheze din inima Capitalei amplasată în zona Dorobanți, într-o vilă interbelică din anul 1920. O locație de care te vei îndrăgosti așa cum am făcut și eu prima dată când i-am pășit pragul. Un spațiu creativ și versatil, ce dispune și de o terasă exterioară unde ne adunăm buluc seară de seară. Un ”loc de joacă” cu o atmosferă intimă și călduroasă care inspiră la creativitate.
                </p>

                <p className="mt-4">Articol scris de <strong>Marilena Adam</strong></p>
              </SimpleCard>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cafeluta;