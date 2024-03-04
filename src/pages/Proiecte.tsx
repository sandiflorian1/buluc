import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/Slider';
export interface ISectacoleProps {
}


export default function Sectacole(props: ISectacoleProps) {
  return (
    <MainLayout title="proiecte">
      <div className="pb-20">
        <Slider slides={slides} />
      </div>
    </MainLayout>
  );
}

const slides = [
  {
    number: 1,
    title: 'Tabara DoAct',
    description: 'Timp de o săptămână pătrundem într-un mic laborator de teatru în cadrul căruia construim un spectacol de la 0 pornind de la text şi mişcare scenică la decor, costume și repetiții.',
    imageUrl: 'src/assets/images/doAct.jpg',
    goToLink: '/',
  },

  {
    number: 2,
    title: 'Jazz in sufragerie',
    description: 'De obicei, când te afli la liceu, lumea ta e formată din multe întrebări legate de ce vei face după absolvire, iar când vrei să aplici la o facultate cu profil artistic, apar și mai multe întrebări.',
    imageUrl: 'src/assets/images/jazz.jpg',
    goToLink: '/',
  },

  {
    number: 3,
    title: '@The Party',
    description: 'Ce este Challenge Yourself @The Party? Un curs cu apucături de party🤭 mai bine zis o ședință în care ne “jucăm” exact ca la un curs obișnuit doar ca adăugăm și 🍷🍿 și atmosfera de party în sufragerie (evident).',
    imageUrl: 'src/assets/images/party.jpg',
    goToLink: '/',
  },
];
