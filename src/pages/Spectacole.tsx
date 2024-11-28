import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import Modal from "../components/Modal";
import Slider from '../components/Slider';
import IMAGES from "../assets/Images";
import { FadeInAnimation } from "../components/animations/Animations";


export interface ISpectacoleProps {
} 

export default function Spectacole(props: ISpectacoleProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setcurrentImage] = useState(false);
  const ref  = useRef<HTMLImageElement | null>(null);

  const onImageClick = (image: any) => {
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
    <MainLayout bgImg={IMAGES.bgSufragerieGol}>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] teatru-bg mb:opacity-0">
        <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.teatruBg})` }}/>
      </div>
      <div className="container pt-20" ref={ref}>
        <FadeInAnimation className="pb-20 mb:w-[100vw]">
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
      <p>Un spectacol de teatru care aduce în scenă o poveste captivantă despre dorință, loialitate și compromisuri ce explorează iubirea dintre două persoane din două lumi diferite, a căror dragoste este pusă la încercare de presiunile financiare și sociale. Spectacolul o prezintă pe Carla, o femeie care este conștientă de frumusețea ei exterioară și care lucrează de când se știe pentru “viața de noapte” a Bucureștiului. Și Mihai, un bărbat de succes, antreprenor, cu principii foarte bine stabilite despre iubire și bani. O stație de autobuz, o seară obișnuită care le schimbă viața... cum? Vei afla pe Madrid. 4</p>
      <br/>
      <p className='text-red'>Distribuție:</p>
      
      <h6><span className="pl-10"> Mihai : </span> <span className="text-orange"> Ionuț Terteci </span></h6>
      <h6><span className="pl-10"> Carla : </span> <span className="text-orange"> Mihaela Mardare </span></h6>
      
      <p className='text-red'>Data premierei: </p>

      <h6><span className="pl-10"> 14 octombrie 2023 </span></h6>
    </div>
  )
}

const images = [
  IMAGES.dinIntamplare1,
  IMAGES.dinIntamplare2,
  IMAGES.dinIntamplare6,
  IMAGES.dinIntamplare4,
  IMAGES.dinIntamplare5,
  IMAGES.dinIntamplare7,
  IMAGES.dinIntamplare3,
  IMAGES.dinIntamplare8,
];

const TeatruGalery = () => {
  return (
    <>
      <div className="galery container w-[85%] mx-auto mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
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
    title: <h3 className='pb-5 mb:pt-5'>Din Întamplare</h3>,
    description: Description(),
    imageUrl: IMAGES.dinIntamplare,
    galery: TeatruGalery(),
  },
];
