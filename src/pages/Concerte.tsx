import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/Slider';
import IMAGES from "../assets/Images";

export interface IConcerteProps {
} 

export default function Concerte(props: IConcerteProps) {
  return (
    <MainLayout title="concerte" noPadding>
      <div className="pb-20">
        <Slider slides={slides} />
      </div>
    </MainLayout>
  );
}

const slides = [
  {
    number: 1,
    title: 'All-that-Jazz … and more',
    description: '”All-that-Jazz … and more” este un concept care reunește #buluc mai multe genuri muzicale cântate în note de jazz alături de ANADI. O artistă care a devenit cunoscută pentru creativitatea cu care reușește sa se joace pe diferite acorduri muzicale dând o notă personală oricărei melodii pe care alege să o interpreteze.',
    imageUrl: IMAGES.cover1,
    goToLink: '/',
  },

  {
    number: 2,
    title: 'Jazz în sufragerie cu Sorina Rotaru',
    description: 'Jazz în Sufragerie cu cu Sorina Rotaru (voce) & Alexandru Olteanu (pian) se întâmplă într-o casă interbelică încărcată de poveste și de mister care a găzduit de-a lungul anilor multe petreceri boierești. Ne strângem #buluc într-un univers completat de note muzicale, atmosfera anilor ‘20 și o experiență care te va învălui încă de la primii pași.',
    imageUrl: IMAGES.cover2,
    goToLink: '/',
  },
];
