import { useEffect, useRef, useState } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import Modal from "../components/Modal";
import Slider from '../components/Slider';
import IMAGES from "../assets/Images";

export interface IConcerteProps {
} 

export default function Concerte(props: IConcerteProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setcurrentImage] = useState(false);
  const ref  = useRef<HTMLImageElement | null>(null);

  const onImageClick = (image:any) => {
    setcurrentImage(image);
    setModalOpen(true);
  }

  useEffect(() => {
    const images = ref.current?.querySelectorAll('.galery img');
    images?.forEach((image) => {
      image.addEventListener('click', () => (onImageClick(image?.src)))
    })
  })

  return (
    <MainLayout>
      <div className="container pt-20" ref={ref}>
        <div className="pb-20 mb:w-[100vw]">
          <Slider slides={slides}>
          </Slider>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} image={currentImage} />
    </MainLayout>
  );
}

const Description = () => {
  return(
    <div>
      <p>”All-that-Jazz … and more” este un concept care reunește mai multe genuri muzicale cântate în note de jazz alături de ANADI. O cântăreață extravagantă din anii `20 care a fost văzută cu proprietarul unei case burgheze de pe strada Madrid 4. Ziarele roiau în jurul ideii cum că cei 2 trăiau o poveste de dragoste, în timp ce ea își dorea să ajungă un star și să aibă propriul show. Oamenii o refuzau. Inclusiv el. Lumea întreaga era plina de nu. Lucrurile nu au ieșit cum a vrut ea, dar nici pentru el nu a ieșit prea grozav.  Cine zice ca nu-i și crima o arta? Te aşteaptă o seară de JAZZ reinterpretat alături de ANADI pe 13 Octombrie la 20:00 pe str. Madrid 4</p>
      <p>Evenimentul face parte din proiectul Stagiunea din sufragerie în colaborare cu Carolia Social House.</p>
      <br/>
      <p>VOCE: ANADI - DIANA OPREA </p>
      <p>PIAN :  VASI COVE </p>
    </div>
  )
}

const Description2 = () => {
  return (
    <div>
      <p>Jazz în Sufragerie într-o casă interbelică încărcată de poveste și de mister care a găzduit de-a lungul anilor multe petreceri boierești. Ne strângem #buluc într-un univers completat de note muzicale, atmosfera anilor ‘20 și o experiență care te va învălui încă de la primii pași. Un eveniment ce promite să-ți încânte simțurile și să-ți trezească pasiunea pentru jazz într-un cadru intim și sofisticat. Alături de Sorina Rotaru & Alexandru Olteanu te așteaptă o atmosferă plină de eleganță și rafinament, unde luminile calde și muzica de jazz te vor îndemna să te pierzi în farmecul acestei arte atemporale. </p>
      <p>VOCE: SORINA ROTARU  </p>
      <p>PIAN: ALEXANDRU OLTEANU </p>
    </div>
  )
}

const SorinaImages1 = [
  IMAGES.jazzSorina1,
  IMAGES.jazzSorina2,
  IMAGES.jazzSorina5,
  IMAGES.jazzSorina6,
];

const SorinaImages2 = [
  IMAGES.jazzSorina7,
  IMAGES.jazzSorina8,
  IMAGES.jazzSorina3,
  IMAGES.jazzSorina4,
];

const SorinaGalery = () => {
  return (
    <>
      <div className="galery container w-[85%] mx-auto mt-20">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {SorinaImages1.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt={`image ${index + 1}`} 
                  className="w-full" 
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {SorinaImages2.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt={`image ${index + 1}`} 
                  className="w-full" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const AnadiImages = [
  IMAGES.jazzAnadi1,
  IMAGES.jazzAnadi2,
  IMAGES.jazzAnadi3,
  IMAGES.jazzAnadi4,
  IMAGES.jazzAnadi5,
  IMAGES.jazzAnadi6,
  IMAGES.jazzAnadi7,
  IMAGES.jazzAnadi8,
];

const AnadiGalery = () => {
  return (
    <>
      <div className="galery container w-[85%] mx-auto mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {AnadiImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={image} 
                alt={`image ${index + 1}`} 
                className="w-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const slides = [
  {
    number: 1,
    title: 'All-that-Jazz … and more',
    description: Description(),
    imageUrl: IMAGES.cover1,
    galery: AnadiGalery(),
  },

  {
    number: 2,
    title: 'Jazz în sufragerie cu Sorina Rotaru',
    description: Description2(),
    imageUrl: IMAGES.cover2,
    galery: SorinaGalery(),
  },
];
