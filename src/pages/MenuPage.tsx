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
          const description = menuItemsRef[index].querySelector('.description');
          const descHeight = description?.children[0].getBoundingClientRect().height;
          console.log(descHeight)
          const tl = gsap.timeline({ repeat: 0, paused: true });
          if (description) {
            tl.fromTo(description.children, { height: 0 }, { height: descHeight, duration: 0.5 }, 0)
              .fromTo(description, { opacity: 0 }, { opacity: 1 }, 0);

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
          }
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
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.bgSufragerieGol})` }}/>
        </div>
        <div className="py-20 h-[90vh] w-[100vw] flex pl-[26%] pt-[16vh] mb:items-start  mb:pl-8 mb:pt-20" >
          <div ref={menuRef} className="flex flex-col w-[25vw] mb:w-[80vw] mb:pt-6">
            {options.map(({ id, link, text, description }) => (
              <SlideRightAnimation key={id} className="mb-2">
                <Link
                  id={id}
                  key={id}
                  to={link}
                >
                  <h1 className="title">{text}<span><FaArrowRight size='25px' className="text-orange inline center align-baseline ml-2"/></span></h1>
                </Link>
                <div className="description">
                  <p className="text-bold mb:hidden" style={{ textShadow: '0.25px 0.25px 0.5px black'}}>.{description}</p>
                </div>
              </SlideRightAnimation>
            ))}
          </div>
        </div>
      </MainLayout>
    </FadeInAnimation>
  );
}
