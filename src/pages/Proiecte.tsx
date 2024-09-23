import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import IMAGES from "../assets/Images";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export interface ISectacoleProps {
}

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};


export default function Sectacole(props: ISectacoleProps) {

  return (
    <MainLayout>
      <div className="mt-20 mb:mt-10">
        {projects.map(({ number, title, description, goToLink, imageUrl, images, imageWidths }) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.1 });
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
          const cardVariants = {
            hidden: {
              opacity: 0,
              ...!isMobile && { x: number % 2 ? 500 : -500 },
            },
            visible: {
              opacity: 1,
              ...!isMobile && { x: 0 },
              transition: {
                delay: 0.2,
                duration: 0.5,
              },
            },
          };
          return (
            <motion.div
              id={`id-card-${number}`}
              className={`min-h-[36vh] rounded-[1rem] shadow-lg flex mb:flex-col row bg-white ${number % 2 === 0 && 'flex-row-reverse'} mb-10`}
              ref={ref}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              key={title}
            >
              <div className={`p-6 ${imageWidths[0]} mb:w-full`}>
                <h4 className="title title-h1 pb-4">
                  {title}
                </h4>
                <p className="mb-2">{description}</p>
                {number === 3 ? (
                  <a href={goToLink} className="hover:text-orange underline flex justify-end pt-4" target="_blank">
                    Vezi video 👉
                  </a>
                ) : (
                  <Link to={goToLink} className="hover:text-orange underline flex justify-end pt-4">
                    citeste mai mult 👉
                  </Link>
                )}


              </div>

              {images !== undefined ? (
                <div className={`${imageWidths[1]} h-[38vh] mb:h-[38vh] mb:w-[80vw]`}>
                  <Slider {...settings}>
                    {images.map((img) => (
                      <div className="w-[40vw] h-[38vh]" key={img}>
                        <div className="h-full image-cover" style={{ backgroundImage: `url(${img})` }} />
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                <div className={`image-cover ${imageWidths[1]} mb:h-[50vh] mb:w-full`} style={{ backgroundImage: `url(${imageUrl})` }} />
              )}
            </motion.div>
          )
        })}
      </div>
    </MainLayout>
  );
}
const projects = [
  {
    number: 1,
    title: 'the creARTive generation',
    description: 'este un proiect educațional pentru adolescenți, sub forma unui Podcast live, cu public - care vorbește despre curaj, autenticitate și despre libertatea de a alege propriul drum, despre despre ce înseamnă o profesie artistică în România și cum putem transforma aptitudinile în instrumente de care ne putem ajuta să facem trecerea de la pasiune la profesie.',
    imageUrl: IMAGES.creartive,
    goToLink: '/proiecte/thecreativegeneration',
    imageWidths: ['w-[45%]', 'w-[55%]'],
  },

  {
    number: 2,
    title: 'să luăm bullying-ul la roast',
    description: 'este un proiect care are ca scop principal prevenirea manifestărilor de tip bullying în mediul adolescenților și conștientizarea propriului rol prin dezbateri și prin paralela dintre bullying si roast,  toate acestea realizate sub consilierea unui psiholog în cadrul unor interviuri cu 3 invitați speciali: Adrian Nicolae, Alexandru Minculescu și Maria Popovici',
    imageUrl: IMAGES.bulling,
    goToLink: '/proiecte/roast',
    imageWidths: ['w-[45%]', 'w-[55%]'],
  },

  {
    number: 3,
    title: 'flashmob la cafea',
    description: 'Ne-am adunat #buluc în cartier, la Boiler Coffee Shop unde am dat trezirea la cafea pe ritmuri de salsa.',
    imageUrl: 'src/assets/images/doAct.jpg',
    goToLink: 'https://www.youtube.com/watch?v=lSRIJk16Jd0',
    textLink: 'Vezi video',
    images: [IMAGES.flashmob1, IMAGES.flashmob2, IMAGES.flashmob3],
    imageWidths: ['w-[45%]', 'w-[45vw]'],
  },
  {
    number: 4,
    title: 'tabăra DOACT',
    description: 'Tabăra de teatru pentru adolescenții cu vârsta cuprinsă între 14-19 creată special pentru a construi o comunitate de tineri mult mai pregătiți pentru momentul în care decid să-și urmeze pasiunea pentru artă.',
    imageUrl: IMAGES.doact,
    goToLink: '/proiecte/doact',
    imageWidths: ['w-[45%]', 'w-[55%]'],
  },
  {
    number: 5,
    title: 'zoomTalks',
    description: 'ZoomTalks este un proiect cultural apărut în pandemie din dorința de a oferi liceenilor pasionați de teatru și film o viziune asupra facultăților de teatru din România.',
    imageUrl: IMAGES.zoomtalks,
    goToLink: '/proiecte/zoomtalks',
    imageWidths: ['w-[45%]', 'w-[55%]'],
  },
];
