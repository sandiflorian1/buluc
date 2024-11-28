import { useEffect, useRef, useState } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import Modal from "../components/Modal";
import Slider from '../components/Slider';
import IMAGES from "../assets/Images";
import { FadeInAnimation } from "../components/animations/Animations";

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
    images?.forEach((image: any) => {
      image.addEventListener('click', () => (onImageClick(image?.src)))
    })
  })

  return (
    <MainLayout bgImg={IMAGES.bgSufragerie}>
      <div className="container pt-20" ref={ref}>
        <FadeInAnimation className="mb-20 mb:w-[100vw]">
          <Slider slides={slides} />
        </FadeInAnimation>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} image={currentImage} />
    </MainLayout>
  );
}

const Description = () => {
  return(
    <div>
      <p>”All-that-Jazz … and more” este un concept care reunește mai multe genuri muzicale cântate în note de jazz alături de ANADI. O cântăreață extravagantă din anii `20 care a fost văzută cu proprietarul unei case burgheze de pe strada Madrid 4. Ziarele roiau în jurul ideii cum că cei 2 trăiau o poveste de dragoste, în timp ce ea își dorea să ajungă un star și să aibă propriul show. Oamenii o refuzau. Inclusiv el. Lumea întreaga era plina de nu. Lucrurile nu au ieșit cum a vrut ea, dar nici pentru el nu a ieșit prea grozav.  Cine zice ca nu-i și crima o arta? Te aşteaptă o seară de JAZZ reinterpretat alături de ANADI pe 13 Octombrie la 20:00 pe str. Madrid 4.</p>
      <p>Evenimentul face parte din proiectul Stagiunea din sufragerie în colaborare cu Carolia Social House.</p>
      <br/>
      <p><span className='text-orange pr-2'>VOCE:</span> ANADI - DIANA OPREA </p>
      <p><span className='text-orange pr-4'>PIAN:</span> VASI COVE </p>
    </div>
  )
}

const Description2 = () => {
  return (
    <div>
      <p>Ne strângem #buluc într-un univers completat de note muzicale, atmosfera anilor ‘20 și o experiență care te va învălui încă de la primii pași. Un eveniment ce promite să-ți încânte simțurile și să-ți trezească pasiunea pentru jazz într-un cadru intim și sofisticat. Alături de Sorina Rotaru & Alexandru Olteanu te așteaptă o atmosferă plină de eleganță și rafinament, unde luminile calde și muzica de jazz te vor îndemna să te pierzi în farmecul acestei arte atemporale. </p>
      <br/>
      <p><span className='text-orange pr-2'>VOCE:</span> SORINA ROTARU  </p>
      <p><span className='text-orange pr-4'>PIAN:</span> ALEXANDRU OLTEANU </p>
    </div>
  )
}

const Description3 = () => {
  return (
    <div>
      <p>Prima serată lăutărească din sufrageria Buluc. O seară dedicată muzicii și bucuriei de a fi împreună într-un cadru desprins din Bucureștiul interbelic, unde fiecare colț ascunde povești și amintiri. „Nu știu cu ce ți-am greșit” melodia pe care Corina Sîrghi a crescut și care aparține Romicăi Puceanu o însoțește și dă numele concertului din sufrageria noastră.</p>
      <br/>
      <p><span className='text-orange pr-2'>VOCE:</span> CORINA SÎRGHI  </p>
      <p><span className='text-orange pr-2'>VIOARĂ:</span> MELTIADE MIHALACHE </p>
      <p><span className='text-orange pr-2'>CONTRABAS:</span> COSTEL NECHITA </p>
      <p><span className='text-orange pr-2'>ACORDEON:</span> NICU PĂUN </p>
      <p><span className='text-orange pr-2'>ȚAMBAL:</span> LAURENȚIU MARINESCU </p>
    </div>
  )
}

const Description4 = () => {
  return (
    <div>
      <p>O seară de scurtmetraje românești difuzate în curtea casei de pe Madrid 4. Am vizionat împreună:</p>
      <br/>
<p> <span className='font-bold text-orange'> Maria Tănase, </span> regia Maria Drăgoi</p>
<p> <span className='font-bold text-orange'> Offstage,</span> regia & scenariul Andrei Huțuleac </p>
<p> <span className='font-bold text-orange'> Havana Cuba,</span> regia & scenariul Andrei Huțuleac</p>
    </div>
  )
}

const GaleryImg = (image: any) => (
  <img 
    src={image} 
    alt="galery-img"
    className="w-full rounded-lg shadow-md" 
  />
)

const SorinaImages1 = [
  IMAGES.jazzSorina1,
  IMAGES.jazzSorina2,
  IMAGES.jazzSorina6,
  IMAGES.jazzSorina8,
];

const SorinaImages2 = [
  IMAGES.jazzSorina7,
  IMAGES.jazzSorina5,
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
              <div key={index}>
                {GaleryImg(image)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {SorinaImages2.map((image, index) => (
              <div key={index}>
                {GaleryImg(image)}
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
            <div key={index}>
              {GaleryImg(image)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const TarafImages1 = [
  IMAGES.taraf1,
  IMAGES.taraf2,
  IMAGES.taraf7,
  IMAGES.taraf8,
];

const TarafImages2 = [
  IMAGES.taraf3,
  IMAGES.taraf6,
];

const TarafGalery = () => {
  return (
    <>
       <div className="galery container w-[85%] mx-auto mt-20">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {TarafImages1.map((image, index) => (
              <div key={index}>
                {GaleryImg(image)}
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <img 
              src={IMAGES.taraf5} 
              alt={`image ${IMAGES.taraf5}`} 
              className="w-full" 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {TarafImages2.map((image, index) => (
                <div key={index}>
                  {GaleryImg(image)}
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

const CinemaImages = [
  IMAGES.cinema1,
  IMAGES.cinema2,
  IMAGES.cinema3,
  IMAGES.cinema4,
];

const CinemaGalery = () => {
  return (
    <>
      <div className="galery container w-[85%] mx-auto mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CinemaImages.map((image, index) => (
            <div key={index}>
              {GaleryImg(image)}
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
    title: <div className='pb-5 mb:pt-5'><h3 className='mr-2'>Nu știu cu ce</h3><h3>ți-am greșit</h3></div>,
    description: Description3(),
    imageUrl: IMAGES.cover3,
    galery: TarafGalery(),
    edition: 2,
  },
  {
    number: 2,
    title: <h3 className='pb-5 mb:pt-5'>Scurtemetraje sub stele</h3>,
    description: Description4(),
    imageUrl: IMAGES.cover4,
    galery: CinemaGalery(),
    edition: 2,
  },
  {
    number: 3,
    title: <h3 className='pb-5 mb:pt-5'>All-that-Jazz … and more</h3>,
    description: Description(),
    imageUrl: IMAGES.cover1,
    galery: AnadiGalery(),
    edition: 1,
  },

  {
    number: 4,
    title: <h3 className='pb-5 mb:pt-5'>Jazz în sufragerie cu Sorina Rotaru</h3>,
    description: Description2(),
    imageUrl: IMAGES.cover2,
    galery: SorinaGalery(),
    edition: 1,
  },
];
