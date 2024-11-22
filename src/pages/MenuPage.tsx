import { useRef, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { FadeInAnimation, SlideRightAnimation } from "../components/animations/Animations";

import IMAGES from "../assets/Images";

export interface IMenuPageProps {
  options: { id: string; link: string; text: string, description: string }[]
}

export default function MenuPage(props: IMenuPageProps) {
  const { options } = props;
  const menuRef = useRef<HTMLImageElement | null>(null);
  const teaturBgRef = useRef<HTMLImageElement | null>(null);
  const serateBgRef = useRef<HTMLImageElement | null>(null);
  const sufragerieBgRef = useRef<HTMLImageElement | null>(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    useEffect(() => {
      const menuItemsRef = menuRef.current?.children;
      if (menuItemsRef) {
        const teaturBg = teaturBgRef.current;
        const serateBg = serateBgRef.current;
        const sufragerieBg = sufragerieBgRef.current;
        options.map((option, index) => {
          const tl = gsap.timeline({ repeat: 0, paused: true });

          if(option.id === 'teatru') {
            tl.fromTo(sufragerieBg, { opacity: 1 }, { opacity: 0 }, 0)
            .fromTo(teaturBg, { opacity: 0 }, { opacity: 1 }, 0);
          }

          if(option.id === 'concerte') {
            tl.fromTo(sufragerieBg, { opacity: 1 }, { opacity: 0 }, 0)
            .fromTo(serateBg, { opacity: 0 }, { opacity: 1 }, 0);
          }

          menuItemsRef[index].children[0].addEventListener('mouseover', () => {
            tl.play();
          })
          menuItemsRef[index].children[0].addEventListener('mouseleave', () => {
            tl.reverse();
          })
        })
      }
    });
  }


  return (
    <FadeInAnimation>
      <MainLayout bgImg={isMobile ? IMAGES.bgSufragerie : IMAGES.bgSufragerieGol} noPadding>
        <div ref={serateBgRef} className="absolute top-0 bottom-0 right-0 left-0 z-[-1] serate-bg mb:opacity-0">
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.serateBg})` }}/>
        </div>
        <div ref={teaturBgRef} className="absolute top-0 bottom-0 right-0 left-0 z-[-1] teatru-bg mb:opacity-0">
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.teatruBg})` }}/>
        </div>
        <div ref={sufragerieBgRef} className="absolute top-0 bottom-0 right-0 left-0 z-[-1] teatru-bg mb:opacity-0">
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.bgSufragerie})` }}/>
        </div>
        <div className="py-20 h-[90vh] w-[100vw] flex flex-col pl-[22%] pt-[14vh] mb:items-start mb:pl-8 mb:pt-10 mb:justify-between">
          <div className="pb-10 mb:pb-25">
            <h1 className="text-[4vw]">Stagiunea din Sufragerie</h1>
            <p className='w-[40vw] mb:w-[80vw] text-[16px] mb:text-[0.85rem] mb:bg-white mb:py-2'>Este un proiect cultural desfășurat de Asociația Buluc în colaborare cu Carolia Social House care își dorește să adune oameni buluc în jurul muzicii live, dansului și conversațiilor animate, creând astfel amintiri de neuitat dezvoltând astfel spațiului cultural în cartierul Dorobanți, dar şi a comunităţii care se schimbă odată cu oraşul.</p>
          </div>
          <div ref={menuRef} className="flex flex-col w-[25vw] mb:w-[80vw] mb:pt-20">
            {options.map(({ id, link, text }) => (
              <SlideRightAnimation key={id} className="pb-2">
                <Link
                  id={id}
                  key={id}
                  to={link}
                >
                  <h2 className="title">{text}<span><FaArrowRight size='25px' className="text-orange inline center align-baseline ml-2"/></span></h2>
                </Link>
              </SlideRightAnimation>
            ))}
          </div>
        </div>
      </MainLayout>
    </FadeInAnimation>
  );
}
