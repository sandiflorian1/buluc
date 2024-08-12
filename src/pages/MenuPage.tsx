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
  const normalBgRef = useRef<HTMLImageElement | null>(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    useEffect(() => {
      const menuItemsRef = menuRef.current?.children;
      if (menuItemsRef) {
        // const teaturBg = teaturBgRef.current;
        // const serateBg = serateBgRef.current;
        // const normalBg = normalBgRef.current;
        options.map((option, index) => {
          const description = menuItemsRef[index].querySelector('.description');
          const descHeight = description?.children[0].getBoundingClientRect().height;
          // const bg = option.id === 'teatru' ? teaturBg : serateBg;
          const tl = gsap.timeline({ repeat: 0, paused: true });
          if (description) {
            tl.fromTo(description.children, { height: 0 }, { height: descHeight, duration: 0.5 }, 0)
              .fromTo(description, { opacity: 0 }, { opacity: 1 }, 0);
              // .fromTo(bg, { opacity: 0 }, { opacity: 1 }, 0)
              // .fromTo(bg, { opacity: 1 }, { opacity: 0 }, 0);

            menuItemsRef[index].addEventListener('mouseover', () => {
              tl.play();
            })
            menuItemsRef[index].addEventListener('mouseleave', () => {
              tl.reverse();
            })
          }
        })
      }
    });
  }


  return (
    <FadeInAnimation>
      <MainLayout bgImg={IMAGES.bgSufragerie} noPadding>
        {/* <div ref={serateBgRef} className="absolute top-0 bottom-0 right-0 left-0 z-[-1] serate-bg mb:opacity-0">
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.teatruBg})` }}/>
        </div>
        <div ref={teaturBgRef} className="absolute top-0 bottom-0 right-0 left-0 z-[-1] teatru-bg mb:opacity-0">
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.teatruBg})` }}/>
        </div>
        <div ref={normalBgRef} className="absolute top-0 bottom-0 right-0 left-0 z-[-1] teatru-bg">
          <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.teatruBg})` }}/>
        </div> */}
        <div className="py-20 h-[90vh] w-[100vw] flex items-center mb:items-start pl-[26%] mb:pl-8" >
          <div ref={menuRef} className="flex flex-col w-[25vw] mb:w-[80vw]">
            {options.map(({ id, link, text, description }) => (
              <SlideRightAnimation>
                <Link
                  id={id}
                  key={id}
                  to={link}
                  className="pb-5"
                >
                  <h1 className="title">{text}<span><FaArrowRight size='25px' className="text-orange inline center align-baseline ml-2"/></span></h1>
                  <div className="description">
                    <p className="text-bold" style={{ textShadow: '0.25px 0.25px 0.5px black'}}>.{description}</p>
                  </div>
                </Link>
              </SlideRightAnimation>
            ))}
          </div>
        </div>
      </MainLayout>
    </FadeInAnimation>
  );
}
