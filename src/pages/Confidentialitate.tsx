import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import SimpleCard from "../components/cards/SimpleCard";
import IMAGES from "../assets/Images";

export interface IConfidentialitateProps { }


const Confidentialitate: React.FC = () => {
  return (
    <MainLayout>
      <div className="container pt-10">
        <div className="mx-[15%] mb:mx-0">
          <SimpleCard>
            <h4 className="pb-5">Politica de Confidențialitate </h4>
            <p className="pb-2">
              Politica de confidențialitate a Companiei de Teatru „Buluc” stabilește modul in care www.buluc.org  folosește și protejează orice informație cu caracter personal pe care o transmiteți către www.buluc.org de fiecare dată când vizitați acest website.
            </p>
            <p className="pb-2">
              Compania de Teatru „Buluc”  vă asigură că sunteți protejat împotriva distribuirii datelor cu caracter personal către terți. Toate datele dumneavoastră cu caracter personal transmise către noi pentru a vă identifica corect atunci când folosiți website-ul nostru sau pentru a ne trimite un mesaj, vor fi folosite în deplin acord cu declarația prezentă de confidențialitate.
            </p>
            <p className="pb-3 font-bold">Cine suntem?</p>
            <p className="pb-2">
              Noi suntem Compania de Teatru „Buluc” (denumit în mod colectiv „Operator”, „noi”, „nouă” sau „al nostru” în această Politică de Confidențialitate).
            </p>
            <p className="pb-2">
              În acest sens, Operatorul datelor dumneavoastră personale este Asociația „Buluc”, cu sediul social în București, str. LT. Col.  Dumitru Papazoglu nr. 1.
            </p>
            <p className="pb-3 font-bold">Cum ne puteți contacta?</p>

            <p>Telefon: 0740 993 479 </p>

            <p className="pb-2">E-mail: contact@buluc.org </p>

            <p className="pb-3 font-bold">Ce tip de informații personale colectăm:</p>

            <p className="pb-2">Datele personale pe care le prelucrăm sunt adresele de e-mail pe care le colectăm direct de la dvs. sau din alte surse atunci când deveniți spectatorul nostru.
            </p>
            <p className="pb-3 font-bold">Cum prelucrăm datele dvs. personale?</p>

            <p className="pb-2">Prelucrăm datele personale doar pentru scopuri legitime, precum acela de a va furniza newslettere cu programul spectacolelor și noutățile privind evenimentele organizate de Buluc.
            </p>
            <p className="pb-3 font-bold">Comunicăm date personale către alți destinatari?</p>

            <p className="pb-2"> Datele tale personale (adresa de e-mail) nu se comunica niciunui alt destinatar, iar accesul la baza de date îl au numai persoanele autorizate în acest sens. Noi nu vom vinde, distribui sau da spre folosință datele dumneavoastră personale către terți decât dacă suntem obligați prin lege să facem acest lucru.
            </p>
            <p className="pb-3 font-bold">Securitatea datelor dumneavoastra (adresele de e-mail)</p>

            <p className="pb-2">Dorim să vă asigurăm că securitatea datelor dvs. cu caracter personal este bine protejată. Pentru a preveni accesul neautorizat la datele dvs. sau divulgarea acestora către terți, am pus la punct mai multe proceduri adecvate, fizice, electronice și administrative, care să securizeze și să protejeze toate datele pe care le colectăm din mediul online. Puteți cere informații detaliate despre natura datelor dvs. personale pe care le deținem noi. Daca doriți o copie a informațiilor deținute de noi vă rugăm să ne scrieți pe adresa noastră de email.
            </p>
            <p className="pb-3 font-bold"> MODIFICAREA POLITICII DE CONFIDENȚIALITATE</p>

            <p className="pb-2">Operatorul are dreptul de a modifica prezenta Politică de confidențialitate oricând pe durata utilizării website-ului, fără însă a afecta în mod negativ sau a restrânge suplimentar drepturile și libertățile persoanelor vizate. Orice astfel de modificare va fi adusă la cunoştința utilizatorilor prin aceleaşi mijloace prin care au fost încunoştințate cu privire la Regulamentul de Ordine Interioară.
            </p>
            <p className="pb-2">Dacă aveți și alte întrebări cu privire la politica noastră de confidențialitate sau felul în care colectăm și folosim informațiile personale, vă rugăm de asemenea să ne contactați la adresa:
            </p>
            <p className="italic">Email: contact@buluc.org </p>
          </SimpleCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Confidentialitate;